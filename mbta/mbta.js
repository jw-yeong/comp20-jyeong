// Function to get JSON schedule data
function getschedule(stop_id, infowindow)
{
    var request;
    request = new XMLHttpRequest();
    var url = "https://chicken-of-the-sea.herokuapp.com/redline/schedule.json?stop_id="+stop_id;
    request.open("GET", url);

    request.onreadystatechange = function(){
        if (request.readyState == 4 && request.status == 200) {
            theData = request.responseText;
            messages = JSON.parse(theData);
            var schedule = "";
            for (i = 0; i < messages.data.length; i++) {
                schedule = schedule + "<ul> <li> arrival:" + messages.data[i].attributes.arrival_time + "</li>";
                schedule = schedule + "<li> departure:" + messages.data[i].attributes.departure_time + "</li>";
                if (messages.data[i].attributes.direction_id == 0){
                    schedule += "<li> direction: southbound </li></ul>";
                }
                else {
                    schedule += "<li> direction: northbound </li></ul>";
                }
            }
            infowindow.setContent(schedule);
        }
    }
        
    request.send();
    
}

// This function is where the magic happens
// and by magic I mean everything
// It is called onload in the body tag in index.html
function init()
{
    /****************************************************************************
    // PART 1
    // Create map, station positions, station markers, station info windows,
    // and polylines between stations
    ****************************************************************************/
    
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
    var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

    // Create station markers and event listeners that display windowed schedule data upon marker click
    var icon = 'icon.jpg';
    var stationinfowindow = new google.maps.InfoWindow();
    
    var SouthStationmarker = new google.maps.Marker({position: SouthStation, map: map, title: "South Station, Boston, MA", icon: icon});
    google.maps.event.addListener(SouthStationmarker, 'click', function() {
                                  getschedule("place-sstat", stationinfowindow);
                                  stationinfowindow.open(map, SouthStationmarker);});
    var Andrewmarker = new google.maps.Marker({position: Andrew, map: map, title: "Andrew, Boston, MA", icon: icon});
    google.maps.event.addListener(Andrewmarker, 'click', function() {
                                  getschedule("place-andrw", stationinfowindow);
                                  stationinfowindow.open(map, Andrewmarker);});
    var PorterSquaremarker = new google.maps.Marker({position: PorterSquare, map: map, title: "Porter Square, Boston, MA", icon: icon});
    google.maps.event.addListener(PorterSquaremarker, 'click', function() {
                                  getschedule("place-portr", stationinfowindow);
                                  stationinfowindow.open(map, PorterSquaremarker);});
    var HarvardSquaremarker = new google.maps.Marker({position: HarvardSquare, map: map, title: "Harvard Square, Boston, MA", icon: icon});
    google.maps.event.addListener(HarvardSquaremarker, 'click', function() {
                                  getschedule("place-harsw", stationinfowindow);
                                  stationinfowindow.open(map, HarvardSquaremarker);});
    var JFKUMassmarker = new google.maps.Marker({position: JFKUMass, map: map, title: ",JFK/UMass Boston, MA", icon: icon});
    google.maps.event.addListener(JFKUMassmarker, 'click', function() {
                                  getschedule("place-jfk", stationinfowindow);
                                  stationinfowindow.open(map, JFKUMassmarkermarker);});
    var SavinHillmarker = new google.maps.Marker({position: SavinHill, map: map, title: "Savin Hill, Boston, MA", icon: icon});
    google.maps.event.addListener(SavinHillmarker, 'click', function() {
                                  getschedule("place-shmnl", stationinfowindow);
                                  stationinfowindow.open(map, SavinHillmarker);});
    var ParkStreetmarker = new google.maps.Marker({position: ParkStreet, map: map, title: "Park Street, Boston, MA", icon: icon});
    google.maps.event.addListener(ParkStreetmarker, 'click', function() {
                                  getschedule("place-pktrm", stationinfowindow);
                                  stationinfowindow.open(map, ParkStreetmarker);});
    var Broadwaymarker = new google.maps.Marker({position: Broadway, map: map, title: "Broadway, Boston, MA", icon: icon});
    google.maps.event.addListener(Broadwaymarker, 'click', function() {
                                  getschedule("place-brdwy", stationinfowindow);
                                  stationinfowindow.open(map, Broadwaymarker);});
    var NorthQuincymarker = new google.maps.Marker({position: NorthQuincy, map: map, title: "North Quincy, Boston, MA", icon: icon});
    google.maps.event.addListener(NorthQuincymarker, 'click', function() {
                                  getschedule("place-nqncy", stationinfowindow);
                                  stationinfowindow.open(map, NorthQuincymarker);});
    var Shawmutmarker = new google.maps.Marker({position: Shawmut, map: map, title: "Shawmut, Boston, MA", icon: icon});
    google.maps.event.addListener(Shawmutmarker, 'click', function() {
                                  getschedule("place-smmnl", stationinfowindow);
                                  stationinfowindow.open(map, Shawmutmarker);});
    var Davismarker = new google.maps.Marker({position: Davis, map: map, title: "Davis, Boston, MA", icon: icon});
    google.maps.event.addListener(Davismarker, 'click', function() {
                                  getschedule("place-davis", stationinfowindow);
                                  stationinfowindow.open(map, Davismarker);});
    var Alewifemarker = new google.maps.Marker({position: Alewife, map: map, title: "Alewife, Boston, MA", icon: icon});
    google.maps.event.addListener(Alewifemarker, 'click', function() {
                                  getschedule("place-alfcl", stationinfowindow);
                                  stationinfowindow.open(map, Alewifemarker);});
    var KendallMITmarker = new google.maps.Marker({position: KendallMIT, map: map, title: "KendallMIT, Boston, MA", icon: icon});
    google.maps.event.addListener(KendallMITmarker, 'click', function() {
                                  getschedule("place-knncl", stationinfowindow);
                                  stationinfowindow.open(map, KendallMITmarker);});
    var CharlesMGHmarker = new google.maps.Marker({position: CharlesMGH, map: map, title: "CharlesMGH, Boston, MA", icon: icon});
    google.maps.event.addListener(CharlesMGHmarker, 'click', function() {
                                  getschedule("place-chmnl", stationinfowindow);
                                  stationinfowindow.open(map, CharlesMGHmarker);});
    var DowntownCrossingmarker = new google.maps.Marker({position: DowntownCrossing, map: map, title: "DowntownCrossing, Boston, MA", icon: icon});
    google.maps.event.addListener(DowntownCrossingmarker, 'click', function() {
                                  getschedule("place-dwnxg", stationinfowindow);
                                  stationinfowindow.open(map, DowntownCrossingmarker);});
    var QuincyCentermarker = new google.maps.Marker({position: QuincyCenter, map: map, title: "QuincyCenter, Boston, MA", icon: icon});
    google.maps.event.addListener(QuincyCentermarker, 'click', function() {
                                  getschedule("place-qnctr", stationinfowindow);
                                  stationinfowindow.open(map, QuincyCentermarker);});
    var QuincyAdamsmarker = new google.maps.Marker({position: QuincyAdams, map: map, title: "QuincyAdams, Boston, MA", icon: icon});
    google.maps.event.addListener(QuincyAdamsmarker, 'click', function() {
                                  getschedule("place-qamnl", stationinfowindow);
                                  stationinfowindow.open(map, QuincyAdamsmarker);});
    var Ashmontmarker = new google.maps.Marker({position: Ashmont, map: map, title: "Ashmont, Boston, MA", icon: icon});
    google.maps.event.addListener(Ashmontmarker, 'click', function() {
                                  getschedule("place-asmnl", stationinfowindow);
                                  stationinfowindow.open(map, Ashmontmarker);});
    var Wollastonmarker = new google.maps.Marker({position: Wollaston, map: map, title: "Wollaston, Boston, MA", icon: icon});
    google.maps.event.addListener(Wollastonmarker, 'click', function() {
                                  getschedule("place-wlstra", stationinfowindow);
                                  stationinfowindow.open(map, Wollastonmarker);});
    var FieldsCornermarker = new google.maps.Marker({position: FieldsCorner, map: map, title: "Fields Corner, Boston, MA", icon: icon});
    google.maps.event.addListener(FieldsCornermarker, 'click', function() {
                                  getschedule("place-fldcr", stationinfowindow);
                                  stationinfowindow.open(map, FieldsCornermarker);});
    var CentralSquaremarker = new google.maps.Marker({position: CentralSquare, map: map, title: "Central Square, Boston, MA", icon: icon});
    google.maps.event.addListener(CentralSquaremarker, 'click', function() {
                                  getschedule("place-cntsq", stationinfowindow);
                                  stationinfowindow.open(map, CentralSquaremarker);});
    var Braintreemarker = new google.maps.Marker({position: Braintree, map: map, title: "Braintree, Boston, MA", icon: icon});
    google.maps.event.addListener(Braintreemarker, 'click', function() {
                                  getschedule("place-brntn", stationinfowindow);
                                  stationinfowindow.open(map, Braintreemarker);});

    
    //Create red polylines between stations
    var pathCoordinates1 = [Alewife, Davis, PorterSquare, HarvardSquare, CentralSquare, KendallMIT, CharlesMGH, ParkStreet, DowntownCrossing,
                            SouthStation, Broadway, Andrew, JFKUMass, NorthQuincy, Wollaston, QuincyCenter, QuincyAdams, Braintree];
    var RedLinePath1 = new google.maps.Polyline({path: pathCoordinates1, map: map, geodesic: true, strokeColor: '#ff0000', strokeOpacity: 1.0, strokeWeight: 3});
    var pathCoordinates2 = [JFKUMass, SavinHill, FieldsCorner, Shawmut, Ashmont];
    var RedLinePath2 = new google.maps.Polyline({path: pathCoordinates2, map: map, geodesic: true, strokeColor: '#ff0000', strokeOpacity: 1.0, strokeWeight: 3});
    

    /****************************************************************************
     //
     // PART 2
     // Locate and create self, closest station marker, update self,
     // and draw polyline to closest station
     //
     ****************************************************************************/
    
    
    //Create self-related variables, markers, then centre map on self
    var meicon = 'meicon.jpg';
    var meinfowindow = new google.maps.InfoWindow();
    var myLat = 42.3; //arbitrary default
    var myLng = -71;  //arbitrary default
    var me;
    var memarker;
    if (navigator.geolocation) { // the navigator.geolocation object is supported on your browser
        navigator.geolocation.getCurrentPosition(function(position) {
                                                 myLat = position.coords.latitude;
                                                 myLng = position.coords.longitude;
                                                 me = new google.maps.LatLng(myLat, myLng);
                                                 memarker = new google.maps.Marker({position: me, map: map, title: "This is me", icon: meicon});
                                                 map.panTo(me);
                                                 google.maps.event.addListener(memarker, 'click', function() {
                                                                               meinfowindow.setContent(memarker.title);
                                                                               meinfowindow.open(map, memarker);
                                                                               });
                                                 
                                                 
                                                 //Create list of all station markers, then iterate and compare to self to calculate closest station.
                                                 //Then, change self's marker info and draw polyline
                                                 var allmarkers = [SouthStationmarker, Andrewmarker, PorterSquaremarker, HarvardSquaremarker, JFKUMassmarker,
                                                                   SavinHillmarker, ParkStreetmarker, Broadwaymarker, NorthQuincymarker, Shawmutmarker, Davismarker, Alewifemarker,
                                                                   KendallMITmarker, CharlesMGHmarker, DowntownCrossingmarker, QuincyCentermarker, QuincyAdamsmarker, Ashmontmarker,
                                                                   Wollastonmarker, FieldsCornermarker, CentralSquaremarker, Braintreemarker];
                                                 
                                                 var allmarkerslength = allmarkers.length;
                                                 var closestmarker = SouthStationmarker; //by default
                                                 
                                                  for (var i = 0; i < allmarkerslength; i++){
                                                      if (google.maps.geometry.spherical.computeDistanceBetween(me, allmarkers[i].position)
                                                          < google.maps.geometry.spherical.computeDistanceBetween(me, closestmarker.position)){
                                                          closestmarker = allmarkers[i];
                                                      }
                                                  }
                                                  var milestoclosest = google.maps.geometry.spherical.computeDistanceBetween(me, closestmarker.position)*0.000621371;
                                                  memarker.title = "Closest station is: " + closestmarker.title + " " + milestoclosest.toString() + " miles";
                                                  var closestCoordinates = [me, closestmarker.position];
                                                  var closestPath = new google.maps.Polyline({path: closestCoordinates, map: map, geodesic: true, strokeColor: '#551a8b', strokeOpacity: 1.0, strokeWeight: 2});
                                                 
                                                 }); //closes anonymous function.
    }
    else {alert("Geolocation is not supported by your web browser.");}
    

}





