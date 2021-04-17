function iniciaMapa() {
  var coordenadas = { lat: 21.152639, lng: -101.711598 };

  var properties1 = {
    center: coordenadas,
    zoom: 12,
  };
  new google.maps.Map(document.getElementById("map1"), properties1);

  var properties2 = {
    center: coordenadas,
    zoom: 12,
    disableDefaultUI: true,
  };
  new google.maps.Map(document.getElementById("map2"), properties2);

  var properties3 = {
    center: coordenadas,
    zoom: 12,
    zoomControl: false,
    scaleControl: false,
  };
  new google.maps.Map(document.getElementById("map3"), properties3);

  var properties4 = {
    center: coordenadas,
    zoom: 12,
    mapTypeControl: true,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
      mapTypeIds: ["roadmap", "satellite", "terrain"],
    },
  };
  new google.maps.Map(document.getElementById("map4"), properties4);

  var properties5 = {
    center: coordenadas,
    zoom: 12,
    mapTypeControl: true,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
      position: google.maps.ControlPosition.TOP_CENTER,
    },
    zoomControl: true,
    zoomControlOptions: {
      position: google.maps.ControlPosition.LEFT_CENTER,
    },
    scaleControl: true,
    streetViewControl: true,
    streetViewControlOptions: {
      position: google.maps.ControlPosition.LEFT_TOP,
    },
    fullscreenControl: true,
  };
  new google.maps.Map(document.getElementById("map5"), properties5);

  var limites = {
    north: 21.390039,
    south: 20.858414,
    west: -102.149631,
    east: -101.09299,
  };

  var properties6 = {
    center: coordenadas,
    zoom: 12,
    restriction: {
      latLngBounds: limites,
      strictBounds: false,
    },
  };
  new google.maps.Map(document.getElementById("map6"), properties6);
}
