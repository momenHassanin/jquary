$("documnet").ready(function(){
	$(".orange").focus(function(){
	 		$("input").focus(function(){
		});
	});
	$(".orange").blur(function(){
   		var x=parseFloat($("#priO").html());
	 	var y=parseFloat($("#orange").val());
	 	var z=mult(x,y);
  		$("#torange").val(z);
 	});
 	$(".higeen").focus(function(){
	 		$("input").focus(function(){
		});
	});
	$(".higeen").blur(function(){
   		var x=parseFloat($("#priH").html());
	 	var y=parseFloat($("#higeen").val());
	 	var z=mult(x,y);
  		$("#thigeen").val(z);
 	});
 	$(".vitamin").focus(function(){
	 		$("input").focus(function(){
		});
	});
	$(".vitamin").blur(function(){
   		var x=parseFloat($("#priV").html());
	 	var y=parseFloat($("#vitamin").val());
	 	var z=mult(x,y);
  		$("#tvitamin").val(z);
 	});
 	$(".mask").focus(function(){
	 		$("input").focus(function(){
		});
	});
 	$(".mask").blur(function(){
   		var x=parseFloat($("#priM").html());
	 	var y=parseFloat($("#mask").val());
	 	var z=mult(x,y);
  		$("#tmask").val(z);
 	});
 	$(".book").focus(function(){
	 		$("input").focus(function(){
		});
	});
 	$(".book").blur(function(){
   		var x=parseFloat($("#priB").html());
	 	var y=parseFloat($("#book").val());
	 	var z=mult(x,y);
  		$("#tbook").val(z);
 	});
 	$(".tissue").focus(function(){
	 		$("input").focus(function(){
		});
	});
 	$(".tissue").blur(function(){
   		var x=parseFloat($("#priT").html());
	 	var y=parseFloat($("#tissue").val());
	 	var z=mult(x,y);
  		$("#ttissue").val(z);
 	});
 	$(".water").focus(function(){
	 		$("input").focus(function(){
		});
	});
 	$(".water").blur(function(){
   		var x=parseFloat($("#priW").html());
	 	var y=parseFloat($("#water").val());
	 	var z=mult(x,y);
  		$("#twater").val(z);
 	});
 	function mult(num1,num2) {
 		return num1*num2;
 	}


 	$("#sum").click(function(){
 		var x=add();
 		$("strong").html(x);
 	});
 	function add(){
 		var a =parseFloat($("#torange").val());
 		var b =parseFloat($("#thigeen").val());
 		var c =parseFloat($("#tvitamin").val());
 		var d =parseFloat($("#tmask").val());
 		var e =parseFloat($("#tbook").val());
 		var f =parseFloat($("#ttissue").val());
 		var g =parseFloat($("#twater").val());
 		return a+b+c+d+e+f+g;
 	
 	}
 	
});

