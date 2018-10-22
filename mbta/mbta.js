// This function is where the magic happens
// and by magic I mean everything
// It is called onload in the body tag in index.html
function init()
{
    // Store position of all stations
    var SouthStation = new google.maps.LatLng(42.352271, -71.05524200000001);
    var Andrew = new google.maps.LatLng(42.330154, -71.057655);
    var PorterSquare = new google.maps.LatLng(42.3884, -71.11914899999999);
    var HarvardSquare = new google.maps.LatLng(42.373362, -71.118956);
    var JFKUMass = new google.maps.LatLng(42.320685, -71.052391);
    var SavinHill = new google.maps.LatLng(42.31129, -71.053331);
    var ParkStreet = new google.maps.LatLng(42.35639457, -71.0624242);
    var Broadway = new google.maps.LatLng(42.342622, -71.056967);
    var NorthQuincy = new google.maps.LatLng(42.275275, -71.029583);
    var Shawmut = new google.maps.LatLng(42.29312583, -71.06573796000001);
    var Davis = new google.maps.LatLng(42.39674, -71.121815);
    var Alewife = new google.maps.LatLng(42.395428, -71.142483);
    var KendallMIT = new google.maps.LatLng(42.36249079, -71.08617653);
    var CharlesMGH = new google.maps.LatLng(42.361166, -71.070628);
    var DowntownCrossing = new google.maps.LatLng(42.355518, -71.060225);
    var QuincyCenter = new google.maps.LatLng(42.251809, -71.005409);
    var QuincyAdams = new google.maps.LatLng( 42.233391, -71.007153);
    var Ashmont = new google.maps.LatLng(42.284652, -71.06448899999999);
    var Wollaston = new google.maps.LatLng(42.2665139, -71.0203369);
    var FieldsCorner = new google.maps.LatLng(42.300093, -71.061667);
    var CentralSquare = new google.maps.LatLng(42.365486, -71.103802);
    var Braintree = new google.maps.LatLng(42.2078543, -71.0011385);


    // Set up map
    var myOptions = {
        zoom: 13, // The larger the zoom number, the bigger the zoom
        center: SouthStation,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    // Create the map in the "map_canvas" <div>
    var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
    

    // Create markers
    var icon = 'icon.jpg';
    var SouthStationmarker = new google.maps.Marker({position: SouthStation, map: map, title: "South Station, Boston, MA", icon: icon});
    var Andrewmarker = new google.maps.Marker({position: Andrew, map: map, title: "Andrew, Boston, MA", icon: icon});
    

    //Create polylines
    var pathCoordinates = [Alewife, Davis, PorterSquare];
    var RedLinePath = new google.maps.Polyline({
                                               path: pathCoordinates,
                                               geodesic: true,
                                               strokeColor: '#ff0000',
                                               strokeOpacity: 1.0,
                                               strokeWeight: 2});
    RedLinePath.setMap(map);



    
    // This is a global info window...
    var infowindow = new google.maps.InfoWindow();
    // Open info window on click of marker
    google.maps.event.addListener(marker, 'click', function() {
                                              infowindow.setContent(marker.title);
                                              infowindow.open(map, marker);
                                              });
    
}