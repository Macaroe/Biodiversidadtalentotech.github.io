document.addEventListener('DOMContentLoaded', function() {
    // Coordenadas de las ciudades que quieres marcar
    var cities = [
        { name: "Bogotá", coordinates: [4.6097, -74.0817] },
        { name: "Chía", coordinates: [4.8594, -74.0331] },
        { name: "Zipaquirá", coordinates: [5.0219, -74.0024] },
        { name: "Cajicá", coordinates: [4.9167, -74.0167] },
        { name: "Facatativá", coordinates: [4.8143, -74.3637] },
        { name: "La Mesa", coordinates: [4.3057, -74.3620] },
        { name: "Villavicencio", coordinates: [4.1444, -73.6264] }
    ];

    // Inicializa el mapa
    var map = L.map('mapa').setView([4.6097, -74.0817], 8);

    // Añadir capa base del mapa
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Añadir marcadores para cada ciudad
    cities.forEach(function(city) {
        L.marker(city.coordinates).addTo(map).bindPopup(city.name);
    });

    // Manejar la selección del lugar
    document.getElementById('select-location').addEventListener('change', function(e) {
        var coords = e.target.value.split(',');
        if (coords.length === 2) {
            map.setView(coords, 13);  // Cambia la vista del mapa al lugar seleccionado
        }
    });
});