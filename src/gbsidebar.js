jQuery.fn.gbDrawer = function(option, value) {

	// Parse options
	/* Support for:
	//		Open - Boolean: Pass directly the boolean
	//		Style - Enum: Shrink or slide to hide. 1 == Shrink, 2 == Slide
	*/
	if (typeof option == "boolean") {
		var open = option;
	} else if(typeof option != 'undefined' && typeof value != 'undefined') {
		switch(option) {
			case "open":
				var open = value;
		}
	}
	var style = 2;

	//define variables
	var drawer = jQuery(this);
	var content = jQuery(this).siblings();
	if (open == true) {
		drawer.css('width', '325px');
	}
	//set starting position based on options
	if (typeof open != 'undefined') {
	} else {
		var open = false;
	}
	if (open) {
		gbStartOpen(drawer, content);
	} else {
		gbStartClosed(drawer, content);
	}

	//toggle drawer state and therefore mutation
	var toggle = jQuery('[toggle="'+drawer.attr('id')+'"]');
	toggle.on('click', function() {
		if (drawer.attr('drawer') == "1") {
			drawer.attr('drawer', "0");
		} else {
			drawer.attr('drawer', "1");
		}
	})


	MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

	var observer = new MutationObserver(function(mutations, observer) {
	    // fired when a mutation occurs
	    // If mutation targets the drawer then:
	    if (mutations[0].target.id == 'drawer' && mutations[0].attributeName == 'drawer') {
	    	if (drawer.hasClass('gbopen')) {
	    		//close drawer
	    		if (style == 1) {
		    		gbCloseShrink(drawer, content);
		    	} else {
		    		gbCloseSlide(drawer, content);
		    	}
			} else {
				//open drawer
				if (style == 1) {
					gbOpenShrink(drawer, content);
				} else {
					gbOpenSlide(drawer, content);
				}
			}
	    }
	});

	// define what element should be observed by the observer
	// and what types of mutations trigger the callback
	observer.observe(document, {
	  subtree: true,
	  attributes: true
	});

}

// Functions to Set starting position - open or closed
function gbStartOpen(drawer, content) {
	drawer.attr('drawer', "1");
	drawer.addClass('gbopen');
	drawer.attr('style', 'width: 325px;');
	if ($(window).width() > 600) {
		content.each(function() {
			$(this).attr('style', 'margin-left: 325px;');
		})
	}
}

function gbStartClosed(drawer, content) {
	drawer.attr('drawer', "0");
	drawer.addClass('gbclosed');
}

// Functions to open and close the drawer
function gbOpenShrink(drawer, content) {
	if ($(window).width() > 600) {
		drawer.animate({
			width: "325px"
		},100)
	} else {
		drawer.animate({
			width: "325px"
		},250)
	}
	if ($(window).width() > 600) {
		content.each(function () {
			$(this).animate({
				margin: "0px 0px 0px 325px"
			},100);
		})
	}
	drawer.removeClass('gbclosed');
	drawer.addClass('gbopen');
}

function gbCloseShrink(drawer, content) {
	if ($(window).width() > 600) {
		drawer.animate({
			width: "0px"
		},100)
	} else {
		drawer.animate({
			width: "0px"
		},250)
	}
	if ($(window).width() > 600) {
		content.each(function () {
			$(this).animate({
				margin: "0px 0px 0px 0px"
			},100);
		})
	}
	drawer.removeClass('gbopen');
	drawer.addClass('gbclosed');
}

// Functions to open and close the drawer
function gbOpenSlide(drawer, content) {
	drawer.parent().css('overflow-x', 'hidden');
	drawer.css('width', '325px');
	if ($(window).width() > 600) {
		drawer.animate({
			left: "0px"
		},100)
	} else {
		drawer.animate({
			left: "00px"
		},250)
	}
	if ($(window).width() > 600) {
		content.each(function () {
			$(this).animate({
				margin: "0px 0px 0px 325px"
			},100);
		})
	}
	drawer.removeClass('gbclosed');
	drawer.addClass('gbopen');
}

function gbCloseSlide(drawer, content) {
	drawer.parent().css('overflow-x', 'hidden');
	drawer.css('width', '325px');
	if ($(window).width() > 600) {
		drawer.animate({
			left: "-325px"
		},100)
	} else {
		drawer.animate({
			left: "-325px"
		},250)
	}
	if ($(window).width() > 600) {
		content.each(function () {
			$(this).animate({
				margin: "0px 0px 0px 0px"
			},100);
		})
	}
	drawer.removeClass('gbopen');
	drawer.addClass('gbclosed');
}