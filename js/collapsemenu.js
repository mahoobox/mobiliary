$(document).ready(function () {
    $("#menuMovil").mCustomScrollbar({
        theme: "minimal"
    });

    $('#dismiss, .overlay').on('click', function () {
        $('#menuMovil').removeClass('active');
        $('.overlay').removeClass('active');
    });

    $('#menuMovilCollapse').on('click', function () {
        $('#menuMovil').addClass('active');
        $('.overlay').addClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
});
