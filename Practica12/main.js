var coordenadas = {
  lat: -31.56391,
  lng: 147.154312,
};

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const idioma = urlParams.get("idioma");

document.getElementById("idioma").value = idioma;

var script = document.createElement("script");
script.src =
  "https://maps.googleapis.com/maps/api/js?key=AIzaSyAv-m46ebIV9fqkE2fIBGeWunmGmBm2R24&callback=iniciaMapa&language=" +
  idioma;
document.head.appendChild(script);

function iniciaMapa() {
  var map = new google.maps.Map(document.getElementById("mapa"), {
    map: map,
    center: coordenadas,
    zoom: 3,
  });
}
