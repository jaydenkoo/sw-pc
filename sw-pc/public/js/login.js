$(function(){
	$(".tologin").click(function(){
		//console.log(123423);
		var uname=$(".unameInput").val();
		var upwd=$(".upwdInput").val();
		(async function(){
      var res=await $.ajax({
        url:"http://localhost:2727/login",
        type:"post",
        data:{uname,upwd},
        dataType:"json"
      })
      if(res.ok==0)
        alert(res.msg);
      else{
        alert("登录成功！即将返回来时的页面...")
        if(location.search.startsWith("?back=")){
          var url=location.search.slice(6)
        }else{
          var url="index.html"
        }
        location.href=url;
      }
    })()
		//console.log(uname+"------"+upwd);
		/*$.get("http://127.0.0.1:2727/login?uname="+uname+"&upwd="+upwd,function(data,status){
			console.log(data);
			console.log(status);
		})*/
	})
})