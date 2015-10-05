var travelBook = (function(){
    return {
        init: init
    };
    
    var map;
    
    function init() {
        console.log('initializing stuff');
        initMap();
    }
    
    function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 13.0000, lng: 122.0000},
            zoom: 5
        });
    }
    
})();
