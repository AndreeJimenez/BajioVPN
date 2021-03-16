var coords = {
  lat: 0,
  lng: 0,
};

var propiedades = {
  center: coords,
  zoom: 2,
};

function obtenerMarcadores() {
  const markers = [
    {
      name: "Mexico",
      longitude: "-99.1276",
      latitude: "19.427",
    },
    {
      name: "Brazil",
      longitude: "-47.9292",
      latitude: "-15.7801",
    },
    {
      name: "Spain",
      longitude: "-3.70327",
      latitude: "40.4167",
    },
    {
      name: "Palestine",
      longitude: "35.233333",
      latitude: "31.766666666666666",
    },
    {
      name: "Albania",
      longitude: "19.816667",
      latitude: "41.31666666666667",
    },
    {
      name: "Armenia",
      longitude: "44.500000",
      latitude: "40.166666666666664",
    },
  ];

  return markers;
}

function iniciaMapa() {
  const mapa = new google.maps.Map(
    document.getElementById("mapa"),
    propiedades
  );

  const marcadores = obtenerMarcadores();

  for (marcador of marcadores) {
    let marker = new google.maps.Marker({
      map: mapa,
      position: new google.maps.LatLng(marcador.latitude, marcador.longitude),
      title: marcador.name,
    });
  }
}
