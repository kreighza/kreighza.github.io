$(function(){

    init();

    function init() {

        var placesVisited = initPlacesVisited();
        var totalPlacesVisited = Object.keys(placesVisited).length;

        jQuery('#map').vectorMap({
            map: 'world_en',
            colors: placesVisited,
            hoverColor: null,
            onRegionClick: onRegionClick
        });

        $('div.places-visited-total#trivia1').html(totalPlacesVisited);
        $('span.places-visited-total').html(totalPlacesVisited);
    }

    function onRegionClick(event, code, region) {
        event.preventDefault();
    }

    function initPlacesVisited() {
        var placesVisited = {};
        var blue = '#628FC4';

        placesVisited['ph'] = blue;
        placesVisited['th'] = blue;
        placesVisited['vn'] = blue;
        placesVisited['my'] = blue;

        return placesVisited;
    }

});