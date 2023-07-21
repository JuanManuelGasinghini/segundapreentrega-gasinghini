class Carrito {
  constructor(prenda, valor, cantidad) {
    this.prenda = prenda;
    this.valor = valor;
    this.cantidad = cantidad;
    this.envio = 0;
    this.subTotal = 0;
    this.total = 0;
  }

  calcularSubTotal() {
    this.subTotal = this.valor * this.cantidad
  }

  calcularIva() {
    return this.subTotal * 0.21
  }

  calcularEnvio() {
    if (this.subTotal >= 4500) {
      this.envio = 0
    } else {
      this.envio = 200
    }
  }

  calcularTotal() {
    this.total = this.subTotal + this.envio + this.calcularIva()
  }
}