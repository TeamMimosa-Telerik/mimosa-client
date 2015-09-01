function toggleNavigationEvents(){
    $('#login-trigger').click(function () {

        if ($('#signup-trigger').hasClass('active')) {
            $('#signup-trigger').find('span').html('&#x25BC;');
            $('#signup-trigger').next('#signup-content').slideToggle();
            $('#signup-trigger').toggleClass('active');
        }


        $(this).next('#login-content').slideToggle();
        $(this).toggleClass('active');

        if ($(this).hasClass('active')){
            $(this).find('span').html('&#x25B2;');
                  }
        else
            $(this).find('span').html('&#x25BC;');
    });

    $('#signup-trigger').click(function () {



        if ($('#login-trigger').hasClass('active')){
            $('#login-trigger').next('#login-content').slideToggle();
            $('#login-trigger').find('span').html('&#x25BC;');
            $('#login-trigger').toggleClass('active');
        }


        $(this).next('#signup-content').slideToggle();
        $(this).toggleClass('active');

        if ($(this).hasClass('active'))
            $(this).find('span').html('&#x25B2;');
        else $(this).find('span').html('&#x25BC;');
    });
}

export default {toggleNavigationEvents};