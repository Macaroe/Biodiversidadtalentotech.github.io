document.addEventListener('DOMContentLoaded', function() {
  // Coordenadas de los municipios de Boyacá que quieres marcar
  var municipalities = [
      { name: "Tunja", coordinates: [5.5333, -73.3667] },
      { name: "Sogamoso", coordinates: [5.7206, -72.9297] },
      { name: "Duitama", coordinates: [5.8269, -73.0203] },
      { name: "Paipa", coordinates: [5.7800, -73.1167] },
      { name: "Chiquinquirá", coordinates: [5.6189, -73.8199] },
      { name: "Samacá", coordinates: [5.4923, -73.4857] },
      { name: "Mongui", coordinates: [5.727391, -72.859904] },

  ];

  // Inicializa el mapa
  var map = L.map('mapa').setView([5.5333, -73.3667], 8);

  // Añadir capa base del mapa
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  // Añadir marcadores para cada municipio
  municipalities.forEach(function(municipality) {
      L.marker(municipality.coordinates).addTo(map).bindPopup(municipality.name);
  });

  // Manejar la selección del lugar
  document.getElementById('select-location').addEventListener('change', function(e) {
      var coords = e.target.value.split(',');
      if (coords.length === 2) {
          map.setView(coords, 13);  // Cambia la vista del mapa al lugar seleccionado
      }
  });
});
