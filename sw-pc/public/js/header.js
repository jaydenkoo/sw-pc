$(function(){
    $("<link rel='stylesheet' href='css/header.css'>").appendTo("head");
    $.ajax({
        url:"header.html",
        type:"get",
        success:function(res){
            $(res).replaceAll("#header")
        }
    })
})

function mouseover(){
            $(".img2").css("display","none");
						$(".imgbig").css("display","block");
}
        function moseout(){
            $(".img2").css("display","block");
            $(".imgbig").css("display","none") ;
        }
        function mouseoverxl1(){
            $(".xiala1").css("display","block");
        }
        function mouseoutxl1(){
            $(".xiala1").css("display","none") ;

        }
        function mouseoverxl2(){
            $(".xlnr").css("display","block");
        }
        function mouseoutxl2(){
            $(".xlnr").css("display","none");
        }
