
const formulario = document.getElementById("formularioNombre");
const campoNombre = document.getElementById("nombreMascota");


const palabrasProhibidas = `
idiota estupido mierda puta pene ignorante
weon weona aweonao aweona sacowea longi perkin
pollo pajaron gil gilazo sapo sapa barsa weon weona aweonao aweona sacowea longi perkin perkín pollo pajarón pavazo gil gilazo sapo sapa barsa patúo chanta flaite rasca ordinario ordinaria picante penca pajero pajera flojo floja carepalo carerraja caraerraja carewea carepoto carecuico caretabla vendido vendida falso falsa doblecara traicionero traicionera arrastrado arrastrada alumbrao alumbrada agrandao agrandada pasao pasá quebrao quebrada fantasma fantasmón cuentero cuentera mentiroso mentirosa chupamedias chupapico chupasangre lamebotas lameculos malacuea malaonda malaleche malaclase sinvergüenza desubicado desubicada barsúo barsúa cuma cumita malaya maldito maldita conchesumadre conchetumadre ctm culiao culiá qliao qlia qlo qla mierda mierdoso mierdosa imbécil idiota estúpido estúpida
`.trim().split(/\s+/);


formulario.addEventListener("submit", async function(evento) {
    evento.preventDefault();

    const nombre = campoNombre.value.trim();

    if (nombre.length < 2) {
        alert("El nombre debe tener al menos 2 caracteres.");
        return;
    }

    const nombreLimpio = nombre
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

    const esInapropiado = palabrasProhibidas.some(palabra =>
        nombreLimpio.includes(palabra)
    );

    if (esInapropiado) {
        alert("Ese nombre no está permitido. Intenta con otro.");
        return;
    }

    
const datos = {
    nombre: document.getElementById("nombreEstudiante").value.trim(),
    nivel: document.getElementById("nivelEstudiante").value,
    curso: document.getElementById("cursoEstudiante").value,
    mascota: nombre
};

const URL_SCRIPT = "https://script.google.com/macros/s/AKfycbwLqv3CDRI4lz7k1C5PZTVkJQGF-6rbuxRGyPzT6zn1ow2_YH5L5t0Gy8hbEJu9LCjE/exec";

try {
    const respuesta = await fetch(URL_SCRIPT, {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "text/plain;charset=utf-8"
        },
        body: JSON.stringify(datos)
    });

    alert("Propuesta enviada. Verifica su registro en la planilla.");
    formulario.reset();

} catch (error) {
    alert("No se pudo enviar la propuesta. Inténtalo nuevamente.");
}

});

const musica = document.getElementById("musicaFondo");
musica.volume = 0.15;
// Intentar reproducir la música al entrar
musica.play().then(() => {
    botonMusica.textContent = "🔇 Silenciar música";
}).catch(() => {
    // Si el navegador la bloquea, esperar la primera interacción
    document.addEventListener("click", iniciarMusica, { once: true });
});

function iniciarMusica() {
    if (!musica.paused) return;

    musica.play().then(() => {
        botonMusica.textContent = "🔇 Silenciar música";
    }).catch(() => {});
}
const botonMusica = document.getElementById("botonMusica");

botonMusica.addEventListener("click", async function() {
    if (musica.paused) {
        try {
            await musica.play();
            botonMusica.textContent = "🔇 Silenciar música";
        } catch (error) {
            alert("No se pudo reproducir la música.");
        }
    } else {
        musica.pause();
       botonMusica.textContent = "🎵 Activar música";
    }
});


