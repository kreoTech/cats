'use strict';
(function ($) {

    var px = ''; //'rt--'

    /**
     * Функция для вывода набора jQuery по селектору, к селектору добавляются
     * префиксы
     *
     * @param {string} selector Принимает селектор для формирования набора
     * @return {jQuery} Возвращает новый jQuery набор по выбранным селекторам
     */
    function $x(selector) {
        return $(x(selector));
    }

    /**
     * Функция для автоматического добавления префиксов к селекторы
     *
     * @param {string} selector Принимает селектор для формирования набора
     * @return {string} Возвращает новый jQuery набор по выбранным селекторам
     */
    function x(selector) {
        var arraySelectors = selector.split('.'),
            firstNotClass = !!arraySelectors[0];

        selector = '';

        for (var i = 0; i < arraySelectors.length; i++) {
            if (!i) {
                if (firstNotClass) selector += arraySelectors[i];
                continue;
            }
            selector += '.' + px + arraySelectors[i];
        }

        return selector;
    }

// Прелоадер
    $(function () {

var jQuery = function(){
    return {
        init: function(){
        }
    };
};
jQuery().init();
//END
var Middle = function(){
    var $middle = $('.Middle');
    var $middleCenter = $('.Middle-center');
    console.log($middleCenter.height());
    console.log($('body').height());
    function heightSet(){
        $middle.height('');
        if ($middleCenter.height() < $('body').height()) {
            $middle.height($('body').height());
        };
    };
    heightSet();
    return {
        init: function(){
            $(window).on('resize', function(){
                heightSet();
            });
        }
    };
};
Middle().init();
var Card = function(){
    var $cards = $('.Card');
    $cards.each(function(){
        var $this = $(this);
        var $caption = $this.find('.Card-caption');
        $caption.data('text', $caption.html());

        if ($this.find('.Card-check').is('[disabled="disabled"]')) {
            $caption.html($caption.data('disabled'))
        }
    });
    return {
        init: function(){
            $('.Card-check').on('change', function(){
                var $Card = $(this).closest('.Card');
                var $caption = $Card.find('.Card-caption');
                if ($Card.find('.Card-check').is(':checked')) {
                    $caption.html($caption.data('selected'));
                } else {
                    $caption.html($caption.data('text'));
                }
            });
        }
    };
};
Card().init();
var Site = function(){
    return {
        init: function(){
        }
    };
};
Site().init();
//END

    });


})(jQuery);