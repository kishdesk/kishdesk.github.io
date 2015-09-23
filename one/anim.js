var position = 0;
var rotation = 0;
var one = 0;
var two = 0;
var three = 0;
var four = 0;
var pv = 0; 
$(function(){
	$("#screen").addClass("intro");
})

function first(){
	$("nav").rotate(0);
	if(!one){
		one = 1;
		$(".fillin").removeClass("intro");
		$(".fillin").addClass("fadeOut");
		
		
	}
	else{
		$(".fillin").removeClass("fadeOut");
		$(".fillin").addClass("intro");
	}
	$("#navContent").removeClass("fadeOut");
	$("#navContent").addClass("intro");
	$("#content").removeClass("intro");
	$("#content").addClass("fadeOut");
	$("#content").html("Everything starts with a blank paper");
	$("#content").addClass("intro");
	
}

function second(){
	if(!two){
				$("nav").rotate(-55);
				two = 1;	
				$(".fillin").addClass("intro");
				$("#content").addClass("fadeOut");
				$("#content").html("Now comes in your idea");
				$("#content").addClass("intro");
				$("#navContent").addClass("fadeOut");	
	}
	else{
		two = 0;
		$("nav").rotate(-55);
		$(".vc, .note, .col").removeClass("intro");
		$(".vc, .note, .col").addClass("fadeOut");
		$(".vc, .note, .col").css("display","none");
		$("#content").removeClass("intro");
		$("#content").addClass("fadeOut");
		$("#content").html("Now comes in your idea");
		$("#content").addClass("intro");
		$("#navContent").addClass("fadeOut");
	}
	
}

function third(){
	
	$("nav").rotate(-113);
	if(!three){
		three = 1;
		$("div").removeClass("hide");
	}
	else{
		three = 0;
		$("#banner").removeClass("fadeOut");
		$("#banner").addClass("fadeIn");
		$(".fillin").addClass("intro");
		$("#screen img").removeClass("intro");
		$("#screen img").addClass("fadeOut");
		$("#screen img").css("display","none");
	}
	
	$(".vc, .note, .col").css("display","flex");
	$(".vc, .note, .col").addClass("intro");
	$("#content").addClass("fadeOut");
	$("#content").html("We help your idea to be market ready");
	$("#content").addClass("intro");
				
}

function fourth(){
	$("nav").rotate(-170);
				four = 1;
				$("#banner").addClass("fadeOut");
				$("#screen img").css("display","block");
				$("#screen img").addClass("intro");
				$("#content").addClass("fadeOut");
				$("#content").html("And digitally prepared for the world");
				$("#content").addClass("intro");
}

$(window).bind('mousewheel', function(event) {
	position = $(this).scrollTop();
	if (event.originalEvent.wheelDelta >= 0) {
        // console.log('Scroll up');
		if(position < 1000){
			// if(one){
			// 	$("nav").rotate(0);
			// 	one = 0;
			// }
			first();
		}
		if((position > 1000) && (position < 2000)){
			// if(two){
				// $("nav").rotate(-55);
				second();
			// }
		}
		else if((position > 2000) && (position < 3000)){
			// if(three){
			// 	$("nav").rotate(-113);
			// 	three = 0;
			// }
			third();
		}
		else if(position > 3000){
			if(four){
				$("nav").rotate(-170);
				four = 0;
			}
		}
    }
    else {
        // console.log('Scroll down');
		
		if(position > 1000){
			if(!one){
				$("nav").rotate(0);
				one = 1;	
			}
		}
		
		if((position > 1000) && (position < 2000)){
			if(!two){
				second();
			}
		}
		else if((position > 2000) && (position < 3000)){
			if(!three){
				third();
			}
		}
		else if (position > 3000){
			if (!four){
				fourth();
			}
		}
		
    }
});


$("a").on("click",function(){
	var id = $(this).attr("id");
	if(id == "one"){
		first();	
	}
	else if(id == "two"){
		second();	
	}
	else if(id == "three"){
		third();
	}
	else if(id == "four"){
		fourth();
	}
})

jQuery.fn.rotate = function(degrees) {
			$("nav#bottom").css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
						'-moz-transform' : 'rotate('+ degrees +'deg)',
						'-ms-transform' : 'rotate('+ degrees +'deg)',
						'transform' : 'rotate('+ degrees +'deg)'});
			return $(this);
		};


