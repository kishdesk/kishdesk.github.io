
$(function(){
	
	function init(){
		$('bg')
		.css({
		'filter'         : 'blur(5px)',
		'-webkit-filter' : 'blur(5px)',
		'-moz-filter'    : 'blur(5px)',
		'-o-filter'      : 'blur(5px)',
		'-ms-filter'     : 'blur(5px)'
		});
		$("#banner").animate({"opacity":"1"},800,function(){
			setTimeout(init1, 1500);
		});
	}
	function init1(){
		$("#banner").animate({"opacity":"0"},800,function(){
			$("#banner").html("We will help you get magnetize");
			setTimeout(init2,200);
		});
	}
	function init2(){
		$("#banner").animate({"opacity":"1"},500);
		setTimeout(end,1500);
	}
	function end(){
		$('bg')
		.css({
		'filter'         : 'blur(5px)',
		'-webkit-filter' : 'blur(5px)',
		'-moz-filter'    : 'blur(5px)',
		'-o-filter'      : 'blur(5px)',
		'-ms-filter'     : 'blur(5px)'
		});
		$("#banner").animate({"opacity":"0"},500);
		$("#banner").addClass("fadeOut");
		$("content header").addClass("fadeIn");
	}
	if(!localStorage.getItem("intro")){
		setTimeout(init, 1000);
		localStorage.setItem("intro","1");	
	}
	else{
		end();
	}
	
	
	
})