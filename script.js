// script.js
document.addEventListener("DOMContentLoaded", function() {
    // Initialisation de la première carte
    var map1 = L.map('map1').setView([48.5, 5.5], 7.2); // Carte centrée sur Paris
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map1);

    // Chargement et ajout du GeoJSON avec D3.js
    d3.json("Data/epci.geojson")
        .then(function(data) {
            L.geoJSON(data, {
                style: {
                    color: "#ff7800",
                    weight: 2
                },
                onEachFeature: function (feature, layer) {
                    if (feature.properties && feature.properties.name) {
                        layer.bindPopup(feature.properties.name);
                    }
                }
            }).addTo(map1);
        })
        .catch(function(error) {
            console.error("Erreur de chargement du GeoJSON :", error);
        });
});
