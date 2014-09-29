jQuery.fn.gbDrawer = function(open) {
	var drawer = jQuery(this);
	var content = jQuery(this).siblings();
	console.log(drawer);
	console.log(drawer[0].offsetTop);
	drawer.css('height', $('body').height() - drawer[0].offsetTop - 0);
	if (typeof open != 'undefined') {
	} else {
		var open = false;
	}
	if (open) {
		drawer.attr('drawer', "1");
		drawer.addClass('gbopen');
		drawer.attr('style', 'width: 300px;');
		if ($(window).width() > 600) {
			content.each(function() {
				$(this).attr('style', 'margin-left: 300px;');
			})
		}
	} else {
		drawer.attr('drawer', "0");
		drawer.addClass('gbclosed');
	}

	

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
	    if (mutations[0].target.id == 'drawer' && mutations[0].attributeName == 'drawer') {
	    	if (drawer.hasClass('gbopen')) {
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
			} else {
				if ($(window).width() > 600) {
					drawer.animate({
						width: "300px"
					},100)
				} else {
					drawer.animate({
						width: "300px"
					},250)
				}
				if ($(window).width() > 600) {
					content.each(function () {
						$(this).animate({
							margin: "0px 0px 0px 300px"
						},100);
					})
				}
				drawer.removeClass('gbclosed');
				drawer.addClass('gbopen');
			}
	    }
	    // ...
	});

	// define what element should be observed by the observer
	// and what types of mutations trigger the callback
	observer.observe(document, {
	  subtree: true,
	  attributes: true
	});

}
