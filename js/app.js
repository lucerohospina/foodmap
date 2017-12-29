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

  // agregando container para grupos de imagenes de restaurantes
  function addImages(arrayRest, typeOfRest) {
    $subSelectType = $('<div></div>');
    $imgContainer.append($subSelectType);

    for (var i = 0; i < arrayRest.length; i++) {
      createImages(arrayRest[i], restFilter);
    }
  }

  // agregando imagenes de los restaurantes
  function createImages(name, kindOf) {
    var $image = $('<img>');
    $image.attr('src', 'assets/images/" + kindOf + "/" + name + ".jpg');
    $image.attr('alt', name);

    $subSelectType.append('image');
  }
  // Evento change para el select
  function restFilter(event) {
    switch (true) {
    case event.target.value === 'criolla':
      addImages($criollo, 'criollo');
      break;
    case event.target.value === '$marina':
      addImages($marino, marino);
      break;
    case event.target.value === 'china':
      addImages($chino, chino);
      break;
    default:
      addImages($criollo, 'criollo');
      addImages($marino, 'marino');
      addImages($chino, 'chino');
    }
    // var $kindOfFood = $select.val();
    // console.log($kindOfFood);
  }
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

/* window.location.href = 'ruta donde esta mi archivo html' */