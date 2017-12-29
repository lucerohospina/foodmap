$(document).ready(function() {
  /* Animación splash de intro */
  $(function() {
    setTimeout(function() {
      $('#intro').fadeOut(1000);
    }, 2000);
  });

  /* Dando funcionalidad al filtro seleccionador */
  var $imgContainer = $('.images-container');
  var $select = $('#rest-filter');
  var $subSelectType = null;

  $select.on('change', restFilter);

  // arrays de restaurantes segun su tipo
  // var $criollo = restaurants['Criolla'];
  // var $marino = restaurants['Marina'];
  // var $chino = restaurants['China'];
  var $criollo = ['criollo1', 'criollo2', 'criollo3', 'criollo4', 'criollo5'];
  var $marino = ['marino1', 'marino2', 'marino3', 'marino4', 'marino5'];
  var $chino = ['chino1', 'chino2', 'chino3', 'chino4', 'chino5'];

  
});

/* Agregando el gmap */
function initMap() {
  var uluru = {lat: -25.363, lng: 131.044};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}
/* Fin de mapa */

/* window.location.href = 'ruta donde esta mi archivo html' */