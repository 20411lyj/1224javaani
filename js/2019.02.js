const log = console.log();

/* $("#bt1").click(function(){
	$("#box1").stop().fadeToggle(1000);
}); */


	$("#bt1").click(function(){
		if($("#box1").css("margin-top") == "48px"){
	$("#box1").stop().animate({"margin-top":"248px"},1000)
}
	else{
		$("#box1").stop().animate({"margin-top":"48px"},1000)
	}

	});	