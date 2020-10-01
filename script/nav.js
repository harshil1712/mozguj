$( '.navbar-nav a' ).on( 'click', function () {
	$( '.navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
	$( this ).parent( 'li' ).addClass( 'active' );
});

// onscroll border bottom

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 0) {
        $('.navbar').addClass('sticky-nav');
    } else {
        $('.navbar').removeClass('sticky-nav');
    }
});