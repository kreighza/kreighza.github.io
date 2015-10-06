//TODO: Add all places I've visited here!


var visitedPlaces = (function(){
    
    var places = [];
    
    return {
        init: init,
        getAllPlaces: getAllPlaces
    };
    
    function init() {
        places = [
            new visitedPlace('Ho Chi Minh, Vietnam', 106.6667, 10.7500),
            new visitedPlace('Singapore', 103.8000, 1.3000),
            new visitedPlace('Cebu, Philippines', 123.9000 ,10.2800)
        ];
        
        console.log(places);
    }
    
    function getAllPlaces() {
        return places;
    }
    
    function visitedPlace(name, long, lat) {
        this.name = name;
        this.longitude = long;
        this.latitude = lat;
    }
})();

