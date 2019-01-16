$(function(){
    $("<link rel='stylesheet' href='css/mid.css'>").appendTo("head");
    $.ajax({
        url:"mid.html",
        type:"get",
        success:function(res){
            $(res).replaceAll("#mid")
        }
    })
})