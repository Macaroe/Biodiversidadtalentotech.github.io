
// Inicializar el mapa centrado en Boyacá
var map = L.map('mapa').setView([5.55, -73.05], 8);

// Añadir capa base de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Diccionario de páramos y humedales con sus coordenadas
var lugares = {
    "Páramo de Ocetá": [5.6657, -73.0194],
    "Páramo de Pisba": [5.6450, -72.5150],
    "Páramo de Rabanal": [5.4427, -73.3630],
    "Páramo de Iguaque": [5.4540, -73.4330],
    "Parque Nacional Natural El Cocuy": [6.4053, -72.2987],
    "Humedal de Tota": [5.5774, -73.3661],
    "Humedal de Fúquene": [5.4734, -73.3623]
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
