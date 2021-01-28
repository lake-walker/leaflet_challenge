var myMap = L.map('map', {
    center: [
        37.09, -95.71
    ],
    zoom: 5
});

var queryUrl = "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2014-01-01&endtime=" +
  "2014-01-02&maxlongitude=-69.52148437&minlongitude=-123.83789062&maxlatitude=48.74894534&minlatitude=25.16517337";

L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

// var geojsonMarkerOptions = {
//     radius: 8,
//     fillColor: "#ff7800",
//     color: "#000",
//     weight: 1,
//     opacity: 1,
//     fillOpacity: 0.8
// };

// L.geoJSON(someGeojsonFeature, {
//     pointToLayer: function (feature, latlng) {
//         return L.circleMarker(latlng, geojsonMarkerOptions);
//     }
// }).addTo(myMap);


d3.json(queryUrl, function(data) {

    for (var i = 0; i < data.length; i++) {
        L.circleMarker([data[i].geometry.coordinates[1], data[i].geometry.coordinates[0]], {
            fillOpacity: 0.75,
            color: 'white',
            fillColor: data[i].geometry.coordinates[2],
            radius: data[i].features.properties.mag * 1000
        }).bindPopup('<h3>' + feature.properties.place + 
            '</h3><hr><p>' + new Date(feature.properties.time) + '</p').addTo(myMap);
    }
    // createFeatures(data.features);
});