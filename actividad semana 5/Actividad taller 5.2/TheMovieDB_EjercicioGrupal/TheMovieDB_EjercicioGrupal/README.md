Bloque 1#
el codigo agrega un evento de escucha al formulario con un ID "formSearch".
cuando el formulario se envie, se ejecutara la funcion "submitSearchEvent"

Bloque 2#

Esta funcion se encarga de manejar el evento de envio de formulario.
al enviar el formulario,se detiene el comportamiento predeterminado(evitando la recarga de la pagina)
luego, se obtiene peliculas basadas en el valor ingresado en el formulario y muestra si la respuesta fue exitosa los resultados
si hubo algun error muestra mensaje del mismo

Bloque 3#

getJSONData es una funcion asincrona que obtiene datos en formato JSON desde un URL.
si la solicitud es exitosa, devuelve los datos y un estado "ok", si llegase a ocurrir un error nos devuelve estado "error"

Bloque 4#

la funcion "showMovies" muestra una lista de peliculas la cual se muestra en la pagina web.
utiliza el elemento con el ID "container" como contenedor para mostrar las tarjetas de cada pelicula.

