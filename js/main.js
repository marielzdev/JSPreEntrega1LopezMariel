//INICIO

// Alerta de Ingreso a la pagina especifica de Cursos y más

alert("Desde aquí podrás adquirir mis cursos de idioma y más! Are you ready?");

// Declaraciones para el carrito de compras de cursos y más

const comprarCursos = () => {
  let curso = " ";
  let cantidad = 0;
  let precio = 0;
  let subtotal = 0;
  let seguirComprando = true;

  //bucle para el carrito

  do {
    curso = prompt(
      " Querés comprar mi guía de idioma Inglés, Turco o Italiano?"
    );
    cantidad = parseInt(prompt("Cuántas guías querés comprar?"));

    console.log(curso);
    console.log(cantidad);

    let cantidadValidada = validarCantidad(cantidad);

    switch (curso) {
      case "Inglés":
        precio = 1000;

        break;
      case "Turco":
        precio = 1100;

        break;
      case "Italiano":
        precio = 1050;
        break;
      default:
        alert("Ingresaste un Producto no válido, por favor volvé a ingresar.");
        precio = 0;
        cantidadValidada = 0;
        break;
    }
    //calculo de subtotal

    subtotal += precio * cantidadValidada;

    seguirComprando = confirm("Querés seguir comprando?");
  } while (seguirComprando);
  return subtotal;
};

const validarCantidad = (cantidad) => {
  while (Number.isNaN(cantidad) || cantidad === 0) {
    alert("Por favor debe ingresar un número válido");
    cantidad = parseInt(prompt("Cuántas guías de querés comprar?"));
  }
  return cantidad;
};

let totalCompra = comprarCursos();

alert("El costo total de su compra es: " + totalCompra);

// en caso que tenga un descuento:

const codigoDescuentoCorrecto = "20offteayudo"; //Desclaro el codigo de descuento correcto
let codigoDescuentoIngresado = " ";
const descuento = 0.2;
let descuentoAplicar = totalCompra * descuento;
let totalCompraConDesc = totalCompra - descuentoAplicar;
let preguntarDenuevo = true;

//bucle para validar el codigo descuento:

do {
  codigoDescuentoIngresado = prompt(
    "Tienes un codigo de descuento a aplicar? Por favor ingrese su código de descuento"
  );
  if (codigoDescuentoCorrecto === codigoDescuentoIngresado) {
    alert("Se ha aplicado un descuento del 20 % a tu compra!");
    preguntarDenuevo = false;
  } else
    alert("Has ingresado un codigo de descuento erroneo, vuelve a intentar");
} while (preguntarDenuevo);

//Alerta con el descuento aplicado

alert(
  "El valor de tu compra con descuento es de: " +
    totalCompraConDesc +
    " " +
    "pesos ARG. Muchas gracias por tu compra!"
);

//FIN
