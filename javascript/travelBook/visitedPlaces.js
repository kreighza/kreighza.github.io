//TODO: Add all places I've visited here!
var visitedPlaces = (function(){
    
    var places = [];
    
    return {
        init: init,
        getAllPlaces: getAllPlaces
    };
    
    function init() {
        geocoder = new google.maps.Geocoder();
        
        places = [
            new visitedPlace('Ho Chi Minh, Vietnam'),
            new visitedPlace('Singapore'),
            new visitedPlace('Hongkong'),
            new visitedPlace('Macau'),
            new visitedPlace('Cebu, Philippines'),
            new visitedPlace('Makati, Philippines'),
            new visitedPlace('Cagayan de oro, Philippines'),
            new visitedPlace('Bantayan Island, Philippines'),
            new visitedPlace('Bohol, Philippines'),
            new visitedPlace('Baguio, Philippines'),
            new visitedPlace('Laguna, Philippines'),
            new visitedPlace('Batangas, Philippines'),
            new visitedPlace('Bangkok, Thailand'),
            new visitedPlace('Johor, Malaysia')
        ];
        
        $('div.places-visited-total').html(places.length);
    }
    
    function getAllPlaces() {
        return places;
    }
    
    function visitedPlace(name) {
        this.name = name;
    }
    
    
})();

