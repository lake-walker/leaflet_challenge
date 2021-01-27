// Store our API endpoint inside queryUrl
var queryUrl = "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2014-01-01&endtime=" +
  "2014-01-02&maxlongitude=-69.52148437&minlongitude=-123.83789062&maxlatitude=48.74894534&minlatitude=25.16517337";

// get request to the qury URL
d3.json(queryUrl, function(data) {
    createFeatures(data.features);
});

function createFeatures(earthquakeData) {

    // define a function we want to run once for each feature in the features array
    // give each feature a popup describing the place and time of the earthquake 
    function onEachFeature(feature, layer) {
        layer.bindPopup('<h3>' + feature.properties.place + 
            '</h3><hr><p>' + new Date(feature.properties.time) + '</p');
    }

    // Create a GeoJSON layer containing the features array on the earthquakeData object
    // Run the onEachFeature function once for each piece of data in the array
    var earthquakes = L.geoJSON(earthquakeData, {
        onEachFeature: onEachFeature
    });

    // send earthquake layer to createMap function
    createImageBitmap(earthquakes);
}

// CreateMap function
function createMap(earthquakes) {
    // Define streetmap and darkmap layers
    var streetmap
}