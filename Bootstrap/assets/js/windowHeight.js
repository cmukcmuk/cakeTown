$(function () {

        var $windowHeight = $(window).height();
        var $headerHeight = $("header").height();

        function windowHeight () {

            var $windowWidth = $(window).width();

            if ($windowWidth > 768) {
                $("header").css("min-height", $windowHeight);
            } else {
                $("header").css("min-height", $headerHeight); // can change this to be nothing. wait, do i even need to do this?
            };

        };

        windowHeight();

        $(window).resize(function() {
            windowHeight();
        });

});