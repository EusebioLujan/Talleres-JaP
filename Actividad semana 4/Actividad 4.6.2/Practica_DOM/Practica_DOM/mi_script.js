document.addEventListener('DOMContentLoaded', function () {

    // Incluye aquí el código necesario para mostrar en el párrafo "info", el número de enlaces de la página :
    
    let allLinks = document.getElementsByTagName('a')?.length
    console.log(allLinks);
    const infoParrafo = document.getElementById('info');
    infoParrafo.innerHTML = `Número total de enlaces en la página: ${allLinks}`;
    

    // Incluye aquí el código necesario para mostrar en el párrafo "info", la dirección del penúltimo enlace de la página :

    if (allLinks >= 2) {
        const penultimaLink = document.getElementsByTagName('a')[allLinks - 2].href;
        infoParrafo.innerHTML += `<br>La dirección del penúltimo enlace es: ${penultimaLink}`;
    }

    // Incluye aquí el código necesario para mostrar en el párrafo "info", el número de enlaces que apuntan a http://prueba/ :

    let linksPrueba = 0;
    for (let i = 0; i < allLinks; i++) {
        /* se verifica si el atributo href es igual a http://prueba/ si la condicion se cumple se suma 1 con el operador ++ */
        if (document.getElementsByTagName('a')[i].href === 'http://prueba/') {
            linksPrueba++;
        }
    }
    infoParrafo.innerHTML += `<br>Número de enlaces que apuntan a "http://prueba/": ${linksPrueba}`;

    // Incluye aquí el código necesario para mostrar en el párrafo "info", el número de enlaces del tercer párrafo :

    const thirdParagraph = document.getElementsByTagName('p')[2];
    const linksInThirdParagraph = thirdParagraph.getElementsByTagName('a').length;
    infoParrafo.innerHTML += `<br>Número de enlaces en el tercer párrafo: ${linksInThirdParagraph}`;
    })
