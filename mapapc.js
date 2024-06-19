
// Inicializar el mapa centrado en Cundinamarca
var map = L.map('mapa').setView([4.85, -73.75], 8);

// Añadir capa base de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Diccionario de páramos y humedales con sus coordenadas
var lugares = {
    "Páramo de Sumapaz": [4.9404, -73.7293],
    "Páramo de Chingaza": [4.6470, -74.1800],
    "Páramo de Guerrero": [5.0187, -73.8889],
    "Páramo de Rabanal": [5.1516, -73.8192],
    "Humedal La Conejera": [4.5709, -73.9260],
    "Humedal Juan Amarillo": [4.6762, -74.0480],
    "Humedal Santa María del Lago": [4.6097, -74.0830]
};

// Añadir marcadores de páramos y humedales al mapa
for (var nombre in lugares) {
    var coordenadas = lugares[nombre];
    L.marker(coordenadas).addTo(map).bindPopup(nombre);
}

// Manejar el cambio de selección en el dropdown
document.getElementById('select-location').addEventListener('change', function(e) {
    var coords = e.target.value.split(',');
    if (coords.length === 2) {
        var lat = parseFloat(coords[0]);
        var lon = parseFloat(coords[1]);
        map.setView([lat, lon], 12);
    }
});
