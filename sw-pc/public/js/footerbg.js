$(function(){
    $("<link rel='stylesheet' href='css/footer-top.css'>").appendTo("head");
    $.ajax({
        url:"footerbg.html",
        type:"get",
        success:function(res){
            $(res).replaceAll("#footerbg")
        }
    })
})