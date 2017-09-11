$(function(){

    init();

    function init() {
        initMap();
    }

    function initMap() {
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
            placesVisited['bn'] = blue;
            placesVisited['tw'] = blue;
            placesVisited['hk'] = blue;
            placesVisited['sg'] = blue;
            placesVisited['mfm'] = blue;

            return placesVisited;
        }
    }
});

$(window).load( function(){
    preloadImages();

    function preloadImages() {
        var imageList = getImageList();

        for(var i = 0; i < imageList.length ; i++) {
            preloadImage(imageList[i]);
        }

        function preloadImage(src) {
            var img = new Image();
            img.src = src;
        }

        function getImageList() {
            var imageList = [];
            var baseLocation = '../images/travelBook/photos/';
            var maxNumberOfPhotos = 10;

            for(var i = 1; i <= maxNumberOfPhotos ; i++) {
                imageList.push(baseLocation + 'photo' + i + '.jpg');
            }

            return imageList;
        }
    }
});