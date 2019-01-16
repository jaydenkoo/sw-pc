function $(elementId){
  return document.getElementById(elementId).value;
    }
function divId(elementId){
  return document.getElementById(elementId);
    }
/*用户名验证*/    
function checkUser(){
  var user=$("user");
  var userId=divId("user_prompt");
   userId.innerHTML="";    
  var reg=/^[a-zA-Z][a-zA-Z0-9]{3,15}$/;    
    if(reg.test(user)==false){
       userId.innerHTML="用户名不正确";
    return false;
      }
      return true;
    }
/*密码验证*/    
function checkPwd(){
  var pwd=$("pwd");
  var pwdId=divId("pwd_prompt");
   pwdId.innerHTML="";    
  var reg=/^[a-zA-Z0-9]{4,10}$/;    
    if(reg.test(pwd)==false){
       pwdId.innerHTML="密码不能含有非法字符,建议长度在4-10之间";
    return false;
      }
      return true;
    }
    
function checkRepwd(){
  var repwd=$("repwd");
  var pwd=$("pwd");
  var repwdId=divId("repwd_prompt");
   repwdId.innerHTML="";
    if(pwd!=repwd){
       repwdId.innerHTML="两次输入的密码不一致";
    return false;
      }
      return true;
    }
/*验证手机号码*/
function checkMobile(){
    var mobile=$("mobile");
    var mobileId=divId("mobile_prompt");
    var regMobile=/^1\d{10}$/;
    if(regMobile.test(mobile)==false){
        mobileId.innerHTML="手机号码不能为空";
        return false;
        }
        mobileId.innerHTML="";
        return true;
    }
	/*验证码验证*/
function checkCode(){
  var user=$("code");
  var userId=divId("code_prompt");
   userId.innerHTML="";    
  var reg=/^[a-zA-Z][a-zA-Z0-9]{3,15}$/;    
    if(reg.test(user)==false){
       userId.innerHTML="验证码不能为空";
    return false;
      }
      return true;
    }