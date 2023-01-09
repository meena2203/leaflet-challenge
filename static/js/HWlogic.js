// Set the main coordinates (US coordinates) for our map
var myMap = L.map("map", {
    center: [37.0902, -95.7129],
    zoom: 4
  });

   
  // Add attribution (the tile layer) to Openstreet map
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap);



// Create function that will determine the color of a earthquake location based on the depth of the earthquake
function chooseColor(depth) {
    if (depth > -10 && depth <= 10) return '#07EA07';
    else if (depth > 10 && depth <= 30) return '#C5F914 ';
    else if (depth > 30 && depth <= 50) return '#F9F614';
    else if (depth > 50 && depth <= 70) return '#FACF1F';
    else if (depth > 70 && depth <= 90) return '#F94C37';
    else if (depth > 90) return '#992113';    
    
  }
  
 
// Use this link to get the GeoJSON data
var link = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson'

// Get the GeoJSON data
d3.json(link).then(function(data) {
    // Creating a GeoJSON layer with the retrieved data, depth of the earth is the third coordinate for each earthquake
    L.geoJson(data, {
        pointToLayer: function(feature, latlng) {
            return new L.CircleMarker(latlng, {
                radius: feature.properties.mag*3, 
                color: 'black',
                fillColor: chooseColor(feature.geometry.coordinates[2]),
                fillOpacity: 0.5,
                weight: 0.2    
            });
        },

        // Bind a popup (provides location, magnitude and depth of the earthquake when its associated marker is clicked) to each layer
        onEachFeature: function(feature, layer) {
            layer.bindPopup("<h3> Location:" + feature.properties.place+ "</h3><hr> Magnitude: " +
            feature.properties.mag + "<br /><br />Depth:" + feature.geometry.coordinates[2]);
      }

    }).addTo(myMap);

    // Create legend for the map
    var legend = L.control({position: 'bottomright',});

    legend.onAdd = function (map) {

        var div = L.DomUtil.create('div', 'info legend'),
            depth = [-10, 10, 30, 50, 70, 90];

        // loop through the depth range and generate a label with a colored square for each range
        for (var i = 0; i < depth.length; i++) {
            div.innerHTML +=
                '<i style="background:' + chooseColor(depth[i] + 1) + '"></i> ' +
                depth[i] + (depth[i + 1] ? '&ndash;' + depth[i + 1] + '<br>' : '+');
        }

        return div;  
    };
    legend.addTo(myMap);   
  });

