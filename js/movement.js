/**
 * Copyright (c) 2015 Leonardo Cardoso (http://leocardz.com)
 * Licensed under the APACHE LICENSE V2.0 (http://www.apache.org/licenses/LICENSE-2.0)
 *
 * Version: 1.0.0
 */
(function ($) {
    $.fn.movement = function (options) {

        var defaults = {
            center: "img/center.jpg",
            up: "img/up.jpg",
            upRight: "img/upRight.jpg",
            right: "img/right.jpg",
            downRight: "img/downRight.jpg",
            down: "img/down.jpg",
            downLeft: "img/downLeft.jpg",
            left: "img/left.jpg",
            upLeft: "img/upLeft.jpg"
        };

        var opts = jQuery.extend(defaults, options);
        var selector = $(this);

        var x = selector.offset().left;
        var y = selector.offset().top;
        var height = selector.innerHeight();

        $(document).scroll(function () {
            updateData();
        });

        $(document).mousemove(function (event) {
            if (event.pageX < x) {
                if (event.pageY < y) // up left
                    selector.attr("src", opts.upLeft);
                else {
                    if (event.pageY < y + height) // left
                        selector.attr("src", opts.left);
                    else // down left
                        selector.attr("src", opts.downLeft);
                }
            }
            else if (event.pageX > x + height) {
                if (event.pageY < y) // up right
                    selector.attr("src", opts.upRight);
                else {
                    if (event.pageY < y + height) // right
                        selector.attr("src", opts.right);
                    else // down right
                        selector.attr("src", opts.downRight);
                }
            }
            else {
                if (event.pageY < y) // up
                    selector.attr("src", opts.up);
                if (event.pageY > y + height) // down
                    selector.attr("src", opts.down);
            }

            updateData();
        });

        selector.mouseover(function () {
            selector.attr("src", opts.center);
        });
        selector.attr("src", opts.center);

        function updateData() {
            x = selector.offset().left;
            y = selector.offset().top;
            height = selector.innerHeight();
        }

    };
})(jQuery);
