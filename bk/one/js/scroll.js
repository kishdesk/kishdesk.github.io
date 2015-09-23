$("main").scroll(function(){
		var pos  = $("main").scrollTop();
		if(pos > 700){
			$("#callback").addClass("fixed");
		}
		console.log($("#services").offset().top)
		if($("#services").offset().top <= 100){
			// $("#services").addClass("fixed");
		}
})