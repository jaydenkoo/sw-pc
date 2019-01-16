const express=require('express');
const bodyParser=require('body-parser');
const pool=require("./pool");
const cors=require("cors");
const session = require('express-session');

var app=express();
var server=app.listen(2727);

//使用body-parser中间件
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('../public'));
app.use(session({
  secret: '128位随机字符串',
  resave: false,
  saveUninitialized: true,
}))
app.use(cors({
	origin:["http://127.0.0.1:2727","http://localhost:2727"],
		credentials:true
}))

//用户登录
app.get("/login",(req,res)=>{
	 
	 //1:获取参数 uname,upwd
   var uname = req.query.uname;
   var upwd = req.query.upwd;
   //2:创建正则表达式验证
   //3:创建sql
   var sql = "SELECT count(id) as c";
   sql +=" FROM sw_news";
   sql +=" WHERE uname = ? AND upwd = md5(?)";
   pool.query(sql,[uname,upwd],(err,result)=>{
		if(err)throw err;
    var obj = result[0].c;
    if(obj == 1){
     //7.3:将用户名保存session对象中

		 req.session.uname = uname;
		 res.send({code:1,msg:"登录成功"});
		 return;
		}else{
		 res.send({code:-1,msg:"用户名或密码有误"});
		 return;
		 }  
   });
   //4:返回结果
})


app.post("/login",(req,res)=>{
  var uname=req.body.uname;
	console.log(uname);
  var upwd=req.body.upwd;
  console.log(uname,upwd);
  pool.query(
    "select * from sw_news where uname=? and upwd=?",
    [uname,upwd],
    (err,result)=>{
      if(err) console.log(err);
      if(result.length>0){
        res.writeHead(200);
        var user=result[0]
        req.session.uname=user.uname
        res.write(JSON.stringify({
          ok:1
        }))
      }else{
        res.write(JSON.stringify({
          ok:0,
          msg:"用户名或密码错误！"
        }))
      }
      res.end();
    }
  )
})
app.get("/islogin",(req,res)=>{
  res.writeHead(200);
  if(req.session.uid===undefined){
    res.write(JSON.stringify({ok:0}))
    res.end()
  }else{
    var uid=req.session.uid;
    var sql=
     "select * from sw_news where uid=?"
    pool.query(sql,[uid],(err,result)=>{
      if(err) console.log(err);
      var user=result[0];
      res.write(JSON.stringify({
        ok:1,uname:user.uname
      }))
      res.end()
    })
  }
  
})
app.get("/signout",(req,res)=>{
  req.session["uid"]=undefined;
  res.end();
})