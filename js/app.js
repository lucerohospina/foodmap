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
  var $select = $('#rest-filter');
  var $picture = $('img');

  /* Evento con el mouse encima de cada imagen */
  $picture.on('mouseover', addEffect);

  /* Dando funcionalidad al filtro seleccionador */
  $select.on('change', selectRest);

  /* Funciones*/
  function addEffect() {
    $picture.addClass('effect');
  }
  
  function selectRest() {
    console.log($select.val());
    $imgContainer.hide();
    for (i = 0; i < data.length; i++) {
      if ($select.val() === 'criolla' && data[i]['type'] === 'criollo') {
        $imgContainer2.append('<img class="col-xs-4 pic" data-toggle="modal" data-target="#rest-modal" src="' + data[i].image + '">');
        console.log(data[i]['image']);
      } else if ($select.val() === 'marina' && data[i]['type'] === 'marino') {
        $imgContainer2.hide();
        $imgContainer3.append('<img class="col-xs-4 pic" data-toggle="modal" data-target="#rest-modal" src="' + data[i].image + '">');
        console.log(data[i]['image']);
      } else if ($select.val() === 'pizzeria' && data[i]['type'] === 'pizza') {
        $imgContainer3.hide();
        $imgContainer4.append('<img class="col-xs-4 pic" data-toggle="modal" data-target="#rest-modal" src="' + data[i].image + '">');
        console.log(data[i]['image']);
      }
    }
  }
});

/* Agregando el gmap */
function initMap() {
  var uluru = {lat: -25.363,
    lng: 131.044};
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
