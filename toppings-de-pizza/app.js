// SELECCIONAR ELEMENTOS DEL DOM

// Seleccionar un elemento por id con  el metodo: .getElementById()
const titulo = document.getElementById('titulo');

// Seleccionar mas de un elemento por clase con  el metodo: .getElementsByClassName()
//const toppings = document.getElementsByClassName('topping')

// Seleccionar mas de un elemento por tagName(Nombre de etiqueta) con  el metodo: .getElementsByTagName()
const misToppings = document.getElementsByTagName('li')

// Seleccionar mas de un elemento por clase con  el metodo: .getElementsByClassName()
const toppingsFondoMarron = document.getElementsByClassName('fondo-marron')


//seleccionar elementos que cumplan el criterio de un selector css

// querySelector() permite seleccionar el primer elemento que cumple ese criterio
const primerToppingFondoNaranja = document.querySelector('ul li.fondo-naranja')

const primerToppingNoFondoMarron = document.querySelector('ul li:not(.fondo-marron)')



// querySelectorAll() permite seleccionar el primer elemento que cumple ese criterio

const toppingsFondoNaranja = document.querySelectorAll('.topping.fondo-naranja')


// ASIGNAR ESTILO A LOS ELEMENTOS DEL DOM

const primerTopping = document.querySelector('.topping')

primerTopping.style.backgroundColor = 'blue' ;
primerTopping.style.color = '#06ff00'
primerTopping.style.textTransform = 'uppercase'

console.log(primerTopping);

//TEXTO EN EL DOM
// ACCEDER A EL TEXTO 

const listaDeToppings = document.getElementById('lista de Toppings')

console.log('innerText') // Devuelve solo el texto
console.log(listaDeToppings.innerText)

console.log('textContent') // Devuelve todo el contenido esto incluye los espacios y el texto
console.log(listaDeToppings.textContent)

console.log('innerHTML') // Devuelve la estructura HTML interna
console.log(listaDeToppings.innerHTML)


// Modificando el texto

const tituloH1 = document.getElementById('titulo')

console.log(tituloH1);

tituloH1.innerText = 'Mis Toppings Favoritos'

// MODIFICAR LOS ATRIBUTOS DE UN ELEMENTO

const enlace = document.getElementsByTagName('a')

// Obtener un atributo
console.log(enlace[0].getAttribute('href'))

// Modificar un atributo
enlace[0].setAttribute('href','https://www.freecodecamp.org/')
console.log(enlace[0].getAttribute('href'))


// Eliminar un atributo
enlace[0].removeAttribute('href')

// TRABAJANDO CON CLASES EN ELEMENTOS DEL DOM

// obteniendo una coleccion de elementos
const miListaDeToppings = document.querySelectorAll('.topping')
// removiendo el estilo en linea previamente agregado
miListaDeToppings[0].removeAttribute('style')
// Adicionando una clase al elemento seleccionado
miListaDeToppings[0].classList.add('texto-amarillo')
console.log(primerTopping.classList)

// Verificando si el elemento tiene determinada clase
console.log(miListaDeToppings[0].classList.contains('fondo-marron'))
console.log(miListaDeToppings[0].classList.contains('fondo-azul'))

// Eliminando una clase del elemento seleccionado
miListaDeToppings[0].classList.remove('texto-amarillo')
console.log(primerTopping.classList)

// MODIFICANDO EL DOM

// Agregando un nuevo elemento al DOM
// Obtenemos una referencia de un elemento del DOM, para determinar donde agregarlo
 const finalListaDeToppings = document.getElementById('lista de Toppings')
// Creando un elemento en el DOM
 const toppingNuevo = document.createElement('li')
// Agregando las clases al nuevo elemento
 toppingNuevo.classList.add('topping','fondo-marron')
 toppingNuevo.innerText = 'Queso Extra'
// Agregando el nuevo elemento a una parte especifica del DOM
 finalListaDeToppings.append(toppingNuevo)

 // Eliminando un elemento del DOM
 toppingNuevo.remove();

 // RECORRER EL DOM

 // Obteniendo el elemento padre
 console.log(finalListaDeToppings.parentElement)

  // Obteniendo el elemento padre , del elemento padre de finalListaDeToppings
  console.log(finalListaDeToppings.parentElement.parentElement)

 // Obteniendo el nodo padre
 console.log(finalListaDeToppings.parentNode)

 // Obteniendo elementos hijos
 console.log(finalListaDeToppings.children)

 // Obteniendo nodos hijos
 console.log(finalListaDeToppings.childNodes)

 // Obteniendo el primer elemento
 console.log(finalListaDeToppings.firstElementChild)

  // Otra forma de obtener el primer elemento o cualquier elemento con el indice correspondiente en la coleccion de elementos hijos
  console.log(finalListaDeToppings.children[0])

 // Obteniendo el primer nodo hijo
 console.log(finalListaDeToppings.firstChild)

 //Obteniendo el ultimo elemento hijo
 console.log(finalListaDeToppings.lastElementChild)

 //Obteniendo el ultimo nodo hijo
 console.log(finalListaDeToppings.lastChild)

 // Obteniendo un elemento hermano anterior
 console.log(finalListaDeToppings.previousElementSibling)

  // Obteniendo un nodo hermano anterior
  console.log(finalListaDeToppings.previousSibling)

   // Obteniendo un elemento hermano siguiente
   console.log(finalListaDeToppings.nextElementSibling)

   // Obteniendo un nodo hermano siguiente
   console.log(finalListaDeToppings.nextSibling)

   // EVENTOS DEL DOM
/*
Conceptos importantes
   target
   trigger
   Event handler
   Event listner
*/

// Evento en linea en HTML
/*
En el archivo HTML
 <li class="topping fondo-marron" onclick="mostrarClick()" id="albahaca">Albahaca</li>
En el archivo JavaScript
   function mostrarClick(){
    console.log('click');
   }
*/

// Escuchando el evento mediante addEventListener()

/*
Ejemplo simple
const albahaca = document.getElementById('albahaca')
   
function mostrarTopping(e){
    console.log(e.target.innerText)
}

albahaca.addEventListener('click',mostrarTopping)
*/

const toppings = document.getElementsByClassName('topping')

function mostrarTopping(e){
    console.log(e.target.innerText)
}

for ( const topping of toppings){
    topping.addEventListener('click',mostrarTopping)
}

