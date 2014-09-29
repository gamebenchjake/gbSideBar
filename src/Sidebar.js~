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
				drawer.removeClass('gbopen');
				drawer.addClass('gbclosed');
				content.each(function () {
					$(this).removeClass('gbcontent');
				})
			} else {
				drawer.removeClass('gbclosed');
				drawer.addClass('gbopen');
				content.each(function () {
					$(this).addClass('gbcontent');
				})
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
