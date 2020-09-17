/* ALMACENAR UN ARRAY U OBJETO LITERAL  */

const arrayFrutas = ['Papaya', 'Manzana', 'Cereza', 'Melon', 'Pera', 'Limón']
console.log(typeof(arrayFrutas))

localStorage.setItem("arrayFrutas", arrayFrutas)

const arrayFrutasStorage = localStorage.getItem('arrayFrutas').split(',')   // se aplica la función split para recuperar los datos como array y no como texto. No SE RECOMIENDA
console.log(arrayFrutasStorage)
console.log(typeof(arrayFrutasStorage))

// Un objeto esta compuesto por propiedades (llave, valor)
const persona= {
    nombre: "Marcela",
    apellido: "Rodríguez",
    edad: 28,
    correo: "marcerolo@gmail.com"
}

const jsonPersona = JSON.stringify(persona) // se transforma el objeto con stringify para guardarlo en el localstorage
localStorage.setItem('persona', jsonPersona)
const personaStorage = JSON.parse(localStorage.getItem('persona'))  // para recuperar el objeto con sus propiedades le aplico el parseo a JSON
console.log(personaStorage)
console.log(typeof(personaStorage))


const contededor = document.getElementById("contenedor");

let etiquetaTitulo = document.createElement("h1");
etiquetaTitulo.textContent = "Datos de Usuario ";
etiquetaTitulo.classList.add('border-inferior');
contededor.appendChild(etiquetaTitulo);

/* Renderizar info de manera tradicional

let etiquetaNombre = document.createElement("h4");
etiquetaNombre.innerHTML = 
    '<p><b>Nombre: </b>' +  personaStorage.nombre + '</p>' +
    '<p><b>Apellido: </b>' +  personaStorage.apellido + '</p>' +
    '<p><b>Edad: </b>' +  personaStorage.edad + '</p>' +
    '<p><b>Correo: </b>' +  personaStorage.correo + '</p>';
etiquetaNombre.classList.add('my-2');
contededor.appendChild(etiquetaNombre);
*/

/** Renderizar info construyendo un template */

let etiquetaNombre = document.createElement("h4");
// para mostra la información por interfaz en este caso utilizamos un "template" que se crea con las comiilas invertidas ``
etiquetaNombre.innerHTML = `
    <p><b>Nombre: </b>${personaStorage.nombre}</p>
    <p><b>Apellido: </b>${personaStorage.apellido}</p>
    <p><b>Edad: </b>${personaStorage.edad}</p>
    <p><b>Correo: </b>${personaStorage.correo}</p>
    `
etiquetaNombre.classList.add('my-2');
contededor.appendChild(etiquetaNombre);






