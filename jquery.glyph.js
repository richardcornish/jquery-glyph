/**
 * jQuery Glyph http://www.richardcornish.com/projects/glyph/
 *
 * @author              Richard Cornish <http://www.richardcornish.com/>
 * @version             2.0
 * @projectDescription  Adds a magazine-like glyph character to the last paragraph or list item child of any selector
 *
 * Built on the shoulders of giants:
 *   * John Resig      - http://jquery.com/
 *
 *
 * Copyright (c) 2010 Richard Cornish, licensed under the MIT License:
 *   * http://www.opensource.org/licenses/mit-license.php
 */
 
(function($){
    $.fn.glyph = function(options) {
        
        var defaults = {
            entity: '&#9632;',
            color: '#000',
            size: '100%',
            left: '5px',
            top: '0',
            align: 'top',
            lineheight: '0',
            position: 'relative',
            favicon: false,
            domain: false
        };
        
        var options = $.extend(defaults, options);
        
        return this.each(function(){

            if (options.favicon || options.domain) {
                var image = $(new Image());
                image.css({ verticalAlign: options.align });

                if (options.domain) {
                    var url = 'http://www.google.com/s2/favicons?domain=' + options.domain.replace(/((\w)*:\/\/)?/gi, '').replace(/\//gi, '');
                    image.attr('src', url);
                } else {
                    image.attr('src', options.favicon);
                }
                
                var glyph = image;
                
            } else {
                glyph = options.entity;
            }

            var html = $(document.createElement('span')).html(glyph);
            html.css({ color: options.color, fontSize: options.size, left: options.left, top: options.top, lineHeight: options.lineheight, position: options.position }).addClass('glyph');
            
            $($('*', this).get().reverse()).each(function(){
                if ($(this).is('p') || $(this).is('li') || $(this).is('dd')) {
                    $(this).append(html);
                    return false;
                }
            });

        });

    };
})(jQuery);