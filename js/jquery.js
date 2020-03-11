$("documnet").ready(function(){
	///////////////////////////q1
	$(".orange").blur(function(){
		var x=parseFloat($("#priO").html());
		var y=parseFloat($("#orange").val());
		var z=mult(x,y);
		$("#torange").val(z);
	});
	$(".higeen").blur(function(){
		var x=parseFloat($("#priH").html());
		var y=parseFloat($("#higeen").val());
		var z=mult(x,y);
		$("#thigeen").val(z);
	});
	$(".vitamin").blur(function(){
		var x=parseFloat($("#priV").html());
		var y=parseFloat($("#vitamin").val());
		var z=mult(x,y);
		$("#tvitamin").val(z);
	});
	$(".mask").blur(function(){
		var x=parseFloat($("#priM").html());
		var y=parseFloat($("#mask").val());
		var z=mult(x,y);
		$("#tmask").val(z);
	});
	$(".book").blur(function(){
		var x=parseFloat($("#priB").html());
		var y=parseFloat($("#book").val());
		var z=mult(x,y);
		$("#tbook").val(z);
	});
	$(".tissue").blur(function(){
		var x=parseFloat($("#priT").html());
		var y=parseFloat($("#tissue").val());
		var z=mult(x,y);
		$("#ttissue").val(z);
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
	$("#submet").click(function(){
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
	/////////////////////////////////////////Q2

 	/////////////////////////////////////////Q3
 	$(".hid").hide();
 	var wordCounts = {};
 	$("#word_count").keyup(function() {
 		var matches = this.value.match(/\b/g);
 		
 		wordCounts[this.id] = matches ? matches.length / 2 : 0;
 		var finalCount = 0;
 		var x =false;
 		$.each(wordCounts, function(k, v) {
 			finalCount += v;
 			

 			if (finalCount==5) {
 				x=true;
 				$(".txt").attr("disabled","0");

 			}
 			if (x) {
 		 		$(".hid").show();	
			}
 		});
 		$('#display_count').html(finalCount);
 	}).keyup();
 	
 	$(".send").click(function(){
 		var x = $("#word_count").val();
 		alert(x);
 	});

	///////////////////////////////////////// Q4
 	$(".usa").hide();
 	$("select.country").change(function(){
        var selectedCountry = $(this).children("option:selected").val();
        if (selectedCountry=="USA") {
        	$(".usa").show();
        	$(".city").hide();
        }
        if (selectedCountry=="jordan") {
        	$(".usa").hide();
        	$(".city").show();
        }
    });
});

