// JavaScript Document
(function () {
	
	// get all element with 'data-fade' attribute
	function getFadeElements() {
		
		var fadeElements = $("[data-fade=active]");
		var elements = [];
		var i = 0;
	
		fadeElements.each(function() {
			$(this).removeClass($(this).attr("data-after-class"));
			$(this).addClass($(this).attr("data-before-class"));
			
			var element = [];
			element[0] = this;
			element[1] = ($(this).offset().top - $(window).height()) + ($(window).height() * parseFloat($(this).attr("data-start-display")));
			element[2] = $(this).attr("data-before-class");
			element[3] = $(this).attr("data-after-class");
			
			elements[i] = element;
			
			i++;
		});
		
		return elements;
		
	};
	
	// init and display elements
	function initFadeElements(elements) {
		
		var scrollTop = $(window).scrollTop();
		var arrayLength = elements.length;
		
		for ( var x = 0; x < arrayLength; x++ ) {
			if ( ( elements[x][1] <= 0 ) || ( scrollTop > elements[x][1] ) ) {
				$(elements[x][0]).addClass(elements[x][3]);
			} else {
				$(elements[x][0]).removeClass(elements[x][3]);
			}
		}
	}
	
	$(document).ready(function() {
		
		var elements = getFadeElements();
		var arrayLength = elements.length;
		
		initFadeElements(elements);
		
		$(window).resize(function() {
			elements = getFadeElements();
			arrayLength = elements.length;
			initFadeElements(elements);
		});
	
		$(window).scroll(function() {
			var scrollTop = $(window).scrollTop();
			for ( var x = 0; x < arrayLength; x++ ) {
				if (scrollTop > elements[x][1]) {
					$(elements[x][0]).addClass(elements[x][3]);
				} else {
					$(elements[x][0]).removeClass(elements[x][3]);
				}
			}
		});	
	});
	
}).call(this);
