var map;
      
function initMap() {
    
    default_center = {lat: 42.2808256, lng: -83.74303780000002};
    // Constructor creates a new map - only center and zoom are required.
    map = new google.maps.Map(document.getElementById('map'), {
        center: default_center,
        zoom: 13,
    });
    
    // These are the real estate listings that will be shown to the user.
    // Normally we'd have these in a database instead.
    
    var locations = [
        {title: 'Rackham Graduate School', location: {lat: 42.280808, lng: -83.738258}},
        {title: 'Jolly Pumpkin Café & Breweryt', location: {lat: 42.279166, lng: -83.748479}},
        {title: 'Michigan Theater', location: {lat: 42.279531, lng: -83.741763}},
        {title: 'Arborcrest Cemetery', location: {lat: 42.289818, lng: -83.709984}},
    ];

    var maker = new google.maps.Marker({
        position: default_center,
        map: map;
    });
}

