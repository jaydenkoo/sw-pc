$(function(){
    $("<link rel='stylesheet' href='css/headerbg.css'>").appendTo("head");
    $.ajax({
        url:"headerbg.html",
        type:"get",
        success:function(res){
            $(res).replaceAll("#headerbg")
        }
    })
})