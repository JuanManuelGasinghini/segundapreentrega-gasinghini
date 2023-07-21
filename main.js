function comprarPrenda() {
  let productoId = 0
  let prendaSeleccionado = null

  while (!prendaSeleccionado) {
    prendaId = parseInt(prompt(
      "¿Qué prenda vas a comprar?:\n" +
      "1: Remera ($2000)\n" +
      "2: Camisa ($4000)\n" +
      "3: Medias ($600)\n" +
      "4: Campera ($9000)\n" +
      "5: Buzo (7250)"
    ));

    prendaSeleccionado = prenda.find(prenda => prenda.id === prendaId)
  }

  let cantidadPrenda = 0
  while (!cantidadPrenda || cantidadPrenda === 0) {
    cantidadPrenda = parseInt(prompt("Producto elegido: " + prendaSeleccionado.nombre + "\nIntroduzca la cantidad deseada (sólo números):"))
  }

  const carrito = new Carrito(prendaSeleccionado.nombre, prendaSeleccionado.precio, cantidadPrenda)

  return carrito
}

const carrito = comprarPrenda()

carrito.calcularSubTotal()
carrito.calcularEnvio()
carrito.calcularTotal()


alert(`Detalle del carrito:
- ${carrito.prenda} x ${carrito.cantidad}: $${carrito.subTotal}
- IVA 21%: $${carrito.calcularIva()}
- Costo de envío: $${carrito.envio}
Total = $${carrito.total}`);
