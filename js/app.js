$(document).ready(function() {
  /* Animación splash de intro */
  $(function() {
    setTimeout(function() {
      $('#intro').fadeOut(1000);
    }, 2000);
  });

  /* Dando funcionalidad al filtro seleccionador */

  var $select = $('#rest-filter');

  $select.on('change', restFilter);

  function restFilter() {
    var $kindOfFood = $select.val();
    console.log($kindOfFood);
  }
});

/* window.location.href = 'ruta donde esta mi archivo html */