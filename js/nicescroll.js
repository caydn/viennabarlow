$(document).ready(function () {

    $('#sidebar').niceScroll({
        cursorcolor: '#53619d', // Changing the scrollbar color
        cursorwidth: 4, // Changing the scrollbar width
        cursorborder: 'none', // Rempving the scrollbar border
    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

    // This function will make the open dropdowns to be closed while the sidebar is collapsed out
    // $('#sidebar').niceScroll({
    //     cursorcolor: '#53619d', // Changing the scrollbar color
    //     cursorwidth: 4, // Changing the scrollbar width
    //     cursorborder: 'none', // Rempving the scrollbar border
    // });
    //
    // $('#sidebarCollapse').on('click', function () {
    //     // open or close navbar
    //     $('#sidebar').toggleClass('active');
    //     // close dropdowns
    //     $('.collapse.in').toggleClass('in');
    //     // and also adjust aria-expanded attributes we use for the open/closed arrows
    //     // in our CSS
    //     $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    // });

});
