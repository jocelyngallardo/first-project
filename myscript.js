$(document).ready(function(){
	$("p").click(function(){
		$("#otherBlue").hide();	
		$("img").fadeOut(3000);
	});
	$("img").click(function(){
		$("p").show();
	$(".bl").css({"color":"RoyalBlue", "background-color":"lightblue"});
	});
	$("p").click(function(){
		$(".bl").css({"color":"red", "background-color":"black"});
	})
	$("h1").click(function(){
		$("img").fadeTo(slow, 0.9);
	})
});