var map = (function() {
    
    var travelledMap;
    var visitedPlaces;
    var geocoder;
    
    return {
        init: init
    };
    
    function init(places) {
        geocoder = new google.maps.Geocoder();
        travelledMap = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 13.0000, lng: 122.0000},
            zoom: 5,
            scrollwheel: false,
            mapTypeControl: false,
            streetViewControl: false,
            styles: getStyle()
        }); 
                
        places.forEach(function(place) {
            markOnMap(place);
        });
    }
    
    function styleWrapper(featureType, elementType, stylers) {
        return {
            featureType : featureType,
            elementType : elementType,
            stylers     : stylers
        }
    }
    
    function getStyle() {
        return [ 
                styleWrapper('landscape.natural', 'geometry.fill', [{ 'visibility':'off'}]),
                styleWrapper('poi', 'geometry.fill', [{'visibility': 'on'},{'hue': '#1900ff'},{'color': '#c0e8e8'}]),
                styleWrapper('road', 'geometry', [{'lightness': 100},{'visibility': 'simplified'}]),
                styleWrapper('road', 'labels', [{'visibility': 'off'}]),
                styleWrapper('transit.line', 'geometry', [{'visibility': 'on', 'lightness': 700}]),
                styleWrapper('water', 'all', [{'color': '#7dcdcd'}])                
            ];
    }
    
    function markOnMap(place) {
        geocoder.geocode({'address': place.name}, function(results, status) {
            if (status === google.maps.GeocoderStatus.OK) {
                var marker = new google.maps.Marker({
                    position: results[0].geometry.location,
                    map: travelledMap,
                    title: place.name,
                    icon: '../images/travelBook/mapMarker.png'
                });
            } else {
                console.error('Cannot find coordinates for ' + place.name + ' because: ' + status);
            }
        });
    }
})();

var travelBook = (function(){
    return {
        init: init
    };
    
    function init() {
        visitedPlaces.init();
        map.init(visitedPlaces.getAllPlaces());
    }
})();
