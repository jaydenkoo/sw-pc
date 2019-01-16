$(function(){
    $("<link rel='stylesheet' href='css/header-top.css'>").appendTo("head");
    $.ajax({
        url:"header-top.html",
        type:"get",
        success:function(res){
            $(res).replaceAll("#header-top")
        }
    })
})

window.onload = function() {
        var oUl1 = document.getElementById("ul1");
        var aLi = oUl1.getElementsByTagName("li");
        var oDiv = document.getElementById("tab-list");
        var aDiv = oDiv.getElementsByTagName("li");
        for(var i = 0; i < aLi.length; i++) {
            aLi[i].index = i;
            aLi[i].onmouseover = function() {
                for(var i = 0; i < aLi.length; i++) {
                    aLi[i].className = "";
                }
                this.className = "active";
                for(var j = 0; j < aDiv.length; j++) {
                    aDiv[j].className = "hide";
                }
                aDiv[	this.index].className = "show";
            }        
        }
    }