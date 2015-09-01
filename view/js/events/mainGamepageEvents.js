function gameEvents(){

    $('#announcer').mouseenter(function () {
        $(this).css('background-color', 'orange');
    });
    $('#announcer').mouseleave(function () {
        $(this).css('background-color', 'rgb(' + 11 + ',' + 79 + ',' + 66 + ')');
    });

    $('#announcer').click(function () {
        $('#categoryContainer').slideToggle();
        var $src = $('#arrow').attr('src');
        if ($src === '../img/downArrow.png') {
            $('#arrow').attr('src', '../img/upArrow.png');
        }
        else {
            $('#arrow').attr('src', '../img/downArrow.png');
        }
    });

    $('.category').mouseenter(function () {
        $(this).css('background-color', 'lime');
        var $child = $(this).children();
        $child.each(function (item) {
            $child.eq(item).css('color', 'white');
        });
    });
    $('.category').mouseleave(function () {
        $(this).css('background-color', 'black');
        var $child = $(this).children();
        $child.each(function (item) {
            $child.eq(item).css('color', 'lime');
        });
    });
}

export default {gameEvents};
