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
  var $criollo = restaurants['Criolla'];
  var $marino = restaurants['Marina'];
  var $chino = restaurants['China'];

  //agregando imagenes de restaurantes
  

  function restFilter() {
    var $kindOfFood = $select.val();
    console.log($kindOfFood);
  }
});

/* window.location.href = 'ruta donde esta mi archivo html */