var map = (function() {
    
    var travelledMap;
    var visitedPlaces;
    
    return {
        init: init
    };
    
    function init(places) {
        travelledMap = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 13.0000, lng: 122.0000},
            zoom: 5,
            scrollwheel: false,
            styles: getStyle()
        }); 
        
        var markers = [];
        
        places.forEach(function(place) {
            var marker = new google.maps.Marker({
                position: {lat: place.latitude, lng: place.longitude},
                map: travelledMap,
                title: place.name
            });
            
            markers.push(marker);
        });
        
        console.log(markers);
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
                styleWrapper('landscape.natural', 'geometry.fill', [{ 'visibility':'on','color': '#e0efef' }]),
                styleWrapper('poi', 'geometry.fill', [{'visibility': 'on'},{'hue': '#1900ff'},{'color': '#c0e8e8'}]),
                styleWrapper('road', 'geometry', [{'lightness': 100},{'visibility': 'simplified'}]),
                styleWrapper('road', 'labels', [{'visibility': 'off'}]),
                styleWrapper('transit.line', 'geometry', [{'visibility': 'on', 'lightness': 700}]),
                styleWrapper('water', 'all', [{'color': '#7dcdcd'}])                
            ];
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
