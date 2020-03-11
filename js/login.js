$("documnet").ready(function(){
	$(".second").hide();
	$(".end").hide();
	$(".email").focus(function(){
		$(".first").hide();
		$(".second").show();
		$(".end").hide();
	});
	$("#pwd").focus(function(){
		$(".first").hide();
		$(".second").hide();
		$(".end").show();
	});
	$(".send").focus(function(){
		$(".first").show();
		$(".second").hide();
		$(".end").hide();
	});
	$(".send").click(function(){
		var x =$(".email").val();
		var y =$("#pwd").val();
		if(x=="admin" && y=="123456"){
			window.open("logout.html");

		}else
		{
			alert("try again");
		}
	});
	$(".org").click(function(){
		$("body").css("background-color","orange");
	});
	$(".yel").click(function(){
		$("body").css("background-color","yellow");
	});
	$(".sky").click(function(){
		$("body").css("background-color","skyblue");
	});
	$(".wit").click(function(){
		$("body").css("background-color","White");
	});
	$(".blk").click(function(){
		$("body").css("background-color","black");
	});
});