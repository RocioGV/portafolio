// CRUD
// Crear Leer Actualizar Borrar

// alert("Hola Mundo!");

let about = document.getElementById('about-me');

let typewriter = new Typewriter(about, {
  loop: true,
  delay: 75,
});

// Usar el punto es para llamar a una propiedad o a una acción del objeto.
// Acciones se distinguen por los paréntesis ()
typewriter
  .pauseFor(2500)
  .typeString('Rocío Guevara Villela')
  .pauseFor(300)
  .deleteAll()
  .typeString('Desarrolladora FrontEnd JR')
  .pauseFor(1000)
  .start();


// Frase
let frase = document.getElementById('frase');

let typewriterFrase = new Typewriter(frase, {
  loop: true,
  delay: 75,
});

typewriterFrase
  .pauseFor(2500)
  .typeString('“In God we trust, all others must bring Data.”')
  .pauseFor(300)
  .deleteAll()
  .typeString('Dr. W. Edwards Deming')
  .pauseFor(1000)
  .start();