# **FOODMAP**

* El presente reto de código consiste en crear una app para que los usuarios puedan buscar sus restaurates favoritos.

* La pantalla unicia con un efecto 'splash' de 2 segundos e inmediatamente después vemos el 'home-page'.

* En la vista general, el mapa geolocaliza al usuario.

* En la vista general, el usuario verá primero seis restaurantes por defecto e inmediatamente después puede efectuar su búsqueda por **tipo de comida**.

* Se escogió para el propósito de la búsqueda filtrada un elemento de html del tipo **select**; esto porque me pareció más acertado para la experiencia del usuario.

* Respecto a la funcionalidad mediante jquery:

  1. Los restaurantes son filtrados de una lista de restaurantes contenidos en un array de objetos (data.js).

  2. Se logró 'jalar' la data y filtrarla desde el archivo **app.js** correctamente; sin embargo, aún está en revisión la funcionalidad para que se pueda hacer la selección de tipo de comida en cualquier orden. Esto quiere decir que hasta la hora del **deadline** de este reto solo se puede hacer la selección por tipo de comida en orden descendiente.
  
  3. Se pudo habilitar un mismo modal para cada foto, ya sea para las **por defecto** como para las **filtradas**; sin embargo, aún está en revisión poder 'jalar' cada data en particular y ubicarla en el modal y así se muestre la data personalizada de cada uno.

* Estas fueron las imágenes proporcionadas por el equipo de diseño:

  ![Sin titulo](assets/docs/intro-splash.jpg)
  ![Sin titulo](assets/docs/home.jpg)
  ![Sin titulo](assets/docs/modal-view.jpg)

  **En desarrollo por:
  _Lucero Hospina_**

