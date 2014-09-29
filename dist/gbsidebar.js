jQuery.fn.gbDrawer = function() {
	var drawer = jQuery(this);
	var content = jQuery(this).siblings();

	drawer.attr('drawer', "0");
	drawer.addClass('gbclosed');

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
	    		drawer.animate({
	    			width: "0px"
	    		},100)
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
				drawer.animate({
					width: "300px"
				},100)
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
