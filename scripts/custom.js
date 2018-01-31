// The center property specifies where to center the map.
// The LatLng object centers the map on a specific point. Pass the coordinates in the order: latitude, longitude.
// The zoom property specifies the zoom level for the map. zoom: 0 shows a map of the Earth fully zoomed out.
// The mapTypeId property specifies the map type to display. The following map types are supported:
// ROADMAP (normal, default 2D map)
// SATELLITE (photographic map)
// HYBRID (photographic map + roads and city names)
// TERRAIN (map with mountains, rivers, etc.)




function initialize() {
    var mapProp = {
        center:new google.maps.LatLng(51.508742, -0.120850),
        zoom: 7,
        // how far soomed in we want to be. it is setting the properties of the map
        mapTypeId: google.maps.MapTypeId.ROADMAP,
      };

      var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

    google.maps.event.addDomListener(window, 'load', initialize);


