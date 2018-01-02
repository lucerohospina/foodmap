$(document).ready(function() {
  /* Animación splash de intro */
  $(function() {
    setTimeout(function() {
      $('#intro').fadeOut(1000);
    }, 2000);
  });

  /* Definiendo variables */
  var $imgContainer = $('#img-container-1');
  var $imgContainer2 = $('#image-container-2');
  var $imgContainer3 = $('#image-container-3');
  var $imgContainer4 = $('#image-container-4');
  var $imgContainer5 = $('#image-container-5');
  var $select = $('#rest-filter');
  var $picture = $('.pic');

  /* Evento con el mouse encima de cada imagen */
  $picture.on('mouseover', addEffect); 

  /* Dando funcionalidad al filtro seleccionador */
  $select.on('change', selectRest);

  /* Funciones*/
  function selectRest() {
    $imgContainer.hide();
    for (i = 0; i < data.length; i++) {
      if ($select.val() === 'criolla' && data[i]['type'] === 'criollo') {
        $imgContainer2.append('<img class="col-xs-4 pic" data-toggle="modal" data-target="#rest-modal" src="' + data[i].image + '">');
      } else if ($select.val() === 'marina' && data[i]['type'] === 'marino') {
        $imgContainer2.hide();
        $imgContainer3.append('<img class="col-xs-4 pic" data-toggle="modal" data-target="#rest-modal" src="' + data[i].image + '">');
      } else if ($select.val() === 'pizzeria' && data[i]['type'] === 'pizza') {
        $imgContainer3.hide();
        $imgContainer4.append('<img class="col-xs-4 pic" data-toggle="modal" data-target="#rest-modal" src="' + data[i].image + '">');
      } else if ($select.val() === 'fast' && data[i]['type'] === 'fast-food') {
        $imgContainer4.hide();
        $imgContainer5.append('<img class="col-xs-4 pic" data-toggle="modal" data-target="#rest-modal" src="' + data[i].image + '">');
      }
    }
  }

  function addEffect() {
    $picture.addClass('effect');
  }
});

/* Agregando el gmap */
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397,
      lng: 150.644},
    zoom: 6
  });
  var infoWindow = new google.maps.InfoWindow({map: map});

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('Location found.');
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
    'Error: The Geolocation service failed.' :
    'Error: Your browser doesn\'t support geolocation.');
}
/* Fin de mapa */
