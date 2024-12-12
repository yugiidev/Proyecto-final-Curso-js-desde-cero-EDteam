/*
 * Lógica para crear pedidos y cobrar los pedidos del usuario
 */

const usuario = {
  Nombre: "Yugi",
  Edad: 20,
  Deuda: 0,
};

let pedido = [];
let costoPedido = 0;
let ventas = 0;

const mostrarMenu = () => {
  console.log("Código - Nombre del producto - Costo");

  //productos.forEach(producto => console.log(`${producto.Codigo} - ${producto.Nombre} - $${producto.Costo}`))

  for (let producto of productos) {
    console.log(`${producto.Codigo} - ${producto.Nombre} - $${producto.Costo}`);
  }
  return "";
};

const pedirProducto = (cod) => {
  if (!cod || typeof cod !== "string") {
    return "Ingrese un código valido";
  }
  const productoEncontrado = productos.find(
    (producto) => producto.Codigo === cod,
  );
  if (!productoEncontrado) return "El producto no existe";

  pedido.push(productoEncontrado);
  console.log("Su producto ha sido agregado a su pedido.");
  console.log("Su pedido es:");
  return verPedido();
};

const verPedido = () => pedido;

const calcularCosto = () => {
  let costo = 0;
  for (let producto of pedido) {
    costo += producto.Costo;
  }
  costoPedido = costo;
  return costoPedido;
};

const finalizarPedido = () => {
  calcularCosto();
  usuario.Deuda = costoPedido;
  pedido = [];
  costoPedido = 0;

  return `${usuario.Nombre}, debes pagar $${usuario.Deuda} pesos`;
};

const pagarPedido = (montoEntregado) => {
  if (typeof montoEntregado !== "number") return "Ingresa un dato valido";
  switch (true) {
    case montoEntregado < usuario.Deuda:
      console.log("No te alcanza para pagar tu pedido");
      break;
    case montoEntregado === usuario.Deuda:
      ventas += usuario.Deuda;
      usuario.Deuda = 0;
      console.log("Tu pedido ha sido pagado");
      break;
    default:
      console.log(
        `Tu pedido ha sido pagado y tu cambio es de $${montoEntregado - usuario.Deuda} pesos`,
      );
      ventas += usuario.Deuda;
      usuario.Deuda = 0;
      break;
  }
  return "";
};

const totalVentas = () => {
  return `El total de ventas fue de $${ventas} pesos`;
};
