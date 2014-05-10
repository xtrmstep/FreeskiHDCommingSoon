var rotatorTimer;
var currentIndex = 1;
var nextIndex = 2;
var $current;

$(document).ready(function(){
	$current = $('.bk'+currentIndex);
	
	adjustScale();
	$(window).resize(adjustScale);
	
	var rotatorTimer = setInterval(function(){rotate()}, 12000);
	function rotate() {
		var $current = $(".bk"+currentIndex);
		var $next = $(".bk"+nextIndex);
		
		$current.toggleClass("transparent");
		$next.toggleClass("not-transparent");
		
		currentIndex = nextIndex;
		nextIndex++;
		if (nextIndex > 3) nextIndex = 1;
	}
	
	function adjustScale(){
		var width = $(window).width();
		var height = $(window).height();
		$(".layer").width(width);
		var bkHeight = $(".layer.bk").height();
		$(".layer.bk").css("top", ((height-bkHeight)/2)*.95);
		$(".layer.title").height(height);
		
		var textWidth = $(".text").height();
		var textHeight = $(".text").height();
		$(".text").css("left", (width-textWidth)/2);
		$(".text").css("top", ((height-textHeight)/2)*.95);
	}
	
});

var bk1 = new Image();bk1.src="img/bk1-overlay.jpg";
var bk2 = new Image();bk2.src="img/bk2-overlay.jpg";
var bk3 = new Image();bk3.src="img/bk3-overlay.jpg";
