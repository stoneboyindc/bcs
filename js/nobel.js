/**
 *	JavaScript for Nobel Learning
 *
 *  @author JS
 *  @version 1.0
 */

jQuery( document ).ready( function( $ ) {

/**	Variables
====================================== */
	var speed = 500;

/**	Elements
====================================== */

	$( 'body' ).append( '<div id="shade"></div>' );

/**	Events
====================================== */

	//	Force list display
	$( window ).on( 'load', function( event ) {

		if ( window.innerWidth < 768 ) {

			forceCalendarDisplay();
		}
	});

	//	Autoplay videos
	$( window ).on( 'load', function( event ) {

		var vars = [];
		var hash;

		var href = window.location.href;

		var hashes = href.slice( href.indexOf('?') + 1 ).split('&');

		for ( var i = 0; i < hashes.length; i ++ ) {

			hash = hashes[i].split('=');
			vars[hash[0]] = hash[1];
		}

		if ( vars['autoplay'] ) {

			$('div.ltl-video a').click();
		}
	});

	//	Navigation Toggle
	$( '#menu_toggle' ).on( 'click', function( event ) {

		toggleNavigation();
		$( '#locator_searchbox' ).hide();
		$( '#find_a_school' ).removeClass( 'show-searchbox' );
		$( '#navbar_search_form form' ).hide();
		$( '#navbar_search_toggle i' ).removeClass( 'fa-times' ).addClass( 'fa-search' );
	});

	$( '#nobel_locator_link' ).on( 'click', function( event ) {

		if ( $( '#main_nav ul.menu' ).hasClass('open') ) {

			throwShade( false );
			$( '#main_nav ul.menu' ).stop().removeClass('open').hide();
		}
	});

	//	Sagemont Search toggle
	$( '#navbar_search_toggle' ).on( 'click', function( event ) {

		if ( $( '#main_nav ul.menu' ).hasClass('open') ) {

			throwShade( false );
			$( '#main_nav ul.menu' ).stop().removeClass('open').hide();
		}

		$( '#navbar_search_form form' ).toggle();
		$( '#navbar_search_toggle i' ).toggleClass( 'fa-search' );
		$( '#navbar_search_toggle i' ).toggleClass( 'fa-times' );

	});

	//	Archive expand collapse
	$( 'span.archive-toggle' ).on( 'click', function( event ) {

 		$( event.currentTarget ).parent().children( 'ul' ).toggle();
 		$( event.currentTarget ).children( 'i' ).toggleClass( 'fa-chevron-right fa-chevron-down' );
 	});

	//	Calendar Pop Up -- Open
	$( '.home-calendar-event' ).on( 'click', function( event ) {

		throwShade( true );
		calendarPopUp( event.currentTarget );
	});

	//	Calendar Pop Up -- Close
	$( '#popup_close' ).on( 'click', function( event ) {

		throwShade( false );
		$( '#calendar_popup' ).fadeOut( speed );
	});

	$( '.event-popup-close' ).on( 'click', function( event ) {

		$( '.proscenio-foreground' ).click();
	});

	//	Teacher Page toggle
	$('.teacher-page article section > h2').click( function( event ) {

		teacherPageToggle( event.currentTarget );
	});

	//	Toolbar
	$( 'li.email-tool' ).on( 'click', function( event ) {

		window.location.href = "mailto:?subject=" + encodeURIComponent( document.title ) + "&body=" + escape( window.location.href );
	});
	$( 'li.print-tool' ).on( 'click', function( event ) {

		window.print();
	});
	$( 'li.fontS-tool, li.fontL-tool' ).on( 'click', function( event ) {

		changeFont( event.currentTarget );
	});
	$( 'li.export-tool' ).on( 'click', function( event ) {

		$('a.export').click();
	});
	$( 'li.grid-tool' ).on( 'click', function( event ) {

		$('ul.view-type').find( 'li a.grid' ).click();
		$('li.grid-tool').addClass('active');
		$('li.list-tool').removeClass('active');
	});
	$( 'li.list-tool' ).on( 'click', function( event ) {

		$('ul.view-type').find( 'li a.list' ).click();
		$('li.list-tool').addClass('active');
		$('li.grid-tool').removeClass('active');
	});

	//	Parent communications toggle
	$( '.comm-title' ).on( 'click', function( event ) {

		if ( window.innerWidth > 1280 ) {

			$( '.comm-title' ).parent().find( 'div' ).hide();
			$( event.currentTarget ).parent().find( 'div' ).show();

			$( 'li.communications' ).removeClass( 'active' );
			$( event.currentTarget ).parent().addClass( 'active' );
		}
		else {

			$( event.currentTarget ).parent().find( 'div' ).slideToggle( speed );
			$( event.currentTarget ).parent().find( 'i' ).toggleClass( 'fa-caret-right' ).toggleClass( 'fa-caret-down' );
		}
	});

	//	Checkboxes
	$( '.nobel-checkbox' ).on( 'click', function( event ) {

		checkboxes( event );
	});

	//	Links to Parents mobile actions
	$( '#l2p_items .l2p-topics' ).on( 'click', function( event ) {
		$( event.currentTarget ).toggleClass( 'active' );
		$( '#l2ptopics' ).toggle();
		$( '#l2p_items .l2p-search' ).removeClass( 'active' );
		$( '#l2psearch' ).hide();
	});

	$( '#l2p_items .l2p-search' ).on( 'click', function( event ) {
		$( event.currentTarget ).toggleClass( 'active' );
		$( '#l2psearch' ).toggle();
		$( '#l2p_items .l2p-topics' ).removeClass( 'active' );
		$( '#l2ptopics' ).hide();
	});

	$( '#news_items .news-search' ).on( 'click', function( event ) {
		$( event.currentTarget ).toggleClass( 'active' );
		$( 'div.sidebar-search' ).toggle();
	});



/**	Functions
====================================== */

	//	Change font size
	function changeFont( button ) {
		var font = $('div.entry-content');
		var ltl  = $('div.ltl-bottom-text *');

		var change = ( $( button ).hasClass('fontL-tool') ) ? "+=0.1em" : "-=0.1em";

		$(font).css("font-size", change );
		$(ltl).css("font-size", change );

	}
	//	Teacher Page Toggle
	function teacherPageToggle( header ) {

		var section  = $(header).parent().find('div.teach-sec');
		var allhead  = $('.teacher-page article section > h2');
		var allsec   = allhead.parent().find('div.teach-sec');
		var arrow	 = $(header).find('span i');
		var allarrow = $(allhead).find('span i');

		if ( $(header).hasClass('current-sec') ) {

			section.slideUp( speed );
			$(header).removeClass('current-sec');
			arrow.removeClass('fa-chevron-down').addClass('fa-chevron-right');
		}
		else {

			allsec.slideUp( speed );
			allhead.removeClass('current-sec');
			section.slideDown( speed );
			$(header).addClass('current-sec');
			allarrow.removeClass('fa-chevron-down').addClass('fa-chevron-right');
			arrow.removeClass('fa-chevron-right').addClass('fa-chevron-down');
		}
	}

	// 	Toggle Touch Navigation
	function toggleNavigation() {

		if ( $( '#main_nav ul.menu' ).hasClass('open') ) {

			throwShade( false );
			$( '#main_nav ul.menu' ).stop().removeClass('open').slideUp( speed );
		}
		else {

			throwShade( true );
			$( '#main_nav ul.menu' ).stop().addClass('open').slideDown( speed );
			$( '#calendar_popup' ).fadeOut( speed );
		}
	}

	//	Calendar Pop Up
	function calendarPopUp( selected ) {

		$( '#popup_title' ).empty().append( $( selected ).find( 'span.event-title' ).html() );
		$( '#popup_info' ).empty().append( $( selected ).find( 'span.event-info' ).html() );
		$( '#popup_date' ).empty().append( $( selected ).find( 'span.event-date' ).html() );
		$( '#popup_time' ).empty().append( $( selected ).find( 'span.event-time' ).html() );
		$( '#popup_link' ).attr( 'href', $( selected ).find( 'span.event-link' ).html() );

		$( '#calendar_popup' ).fadeIn( speed );
	}

	// Shade
	function throwShade( show ) {

		if ( show ) {

			$( '#shade' ).stop().fadeIn( speed );
		}
		else {

			$( '#shade' ).stop().fadeOut( speed );
		}
	}


	// Force Calendar List Display
	function forceCalendarDisplay() {

		$('ul.view-type li a.list' ).trigger('click');
	}

	// Nobel check boxes
	function checkboxes( event ) {

		var field = event.currentTarget;
		var check = $( field ).find( 'i' );
		var input = $( field ).find( 'input' );

		$( check ).toggleClass( 'fa-square' );
		$( check ).toggleClass( 'fa-check-square' );

		input[0].value = ( $( check ).hasClass( 'fa-check-square' ) ? input[0].id : '' );

	}
});
