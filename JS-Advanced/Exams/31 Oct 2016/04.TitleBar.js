/**
 * Created by nkondova on 20.7.2017 г..
 */
class TitleBar{
    constructor(title){
        this.title = title;
        this.links = [];
    }

    addLink(href, name){
        let link = $('<a>')
            .addClass('menu-link')
            .attr('href', href)
            .text(name);

        this.links.push(link);
    }

    appendTo(selector){
        $(selector).append(this._generateMenu());
    }

    _generateMenu(){

        let header = $('<header>').addClass('header');
        let headerRow = $('<div>').addClass('header-row').appendTo(header);
        
        let btn = $('<a>')
            .addClass('button')
            .html('&#9776')
            .on('click', function () {
                $('div.drawer').toggle();
            })
            .appendTo(headerRow);

        let btnTitle = $('<span>')
            .addClass('title')
            .text(this.title)
            .appendTo(headerRow);

        let drawer = $('<div>')
            .addClass('drawer')
            .css('display', 'none')
            .appendTo(header);

        let nav = $('<nav>')
            .addClass('menu')
            .appendTo(drawer);

        for (let link of this.links) {
            $(link).appendTo(nav);
        }

        return header;
    }

}