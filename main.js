function correr(){
    let producto = "";
              let precioTotal = 0;
              let cantidadTotal = 0;
              let seguirComprando = true;
    
              do {
                producto = prompt("¿Querés comprar remera, camisa, medias, campera o pantalon?", "remera?");
    
                let cantidad = parseInt(prompt("¿Cuántas prendas queres comprar?"));
    
                while (isNaN(cantidad) || cantidad <= 0) {
                  alert("No es una cantidad válida.");
                  cantidad = parseInt(prompt("¿Cuántas prendas queres comprar?"));
                }
    
                let precio = 0;
    
                switch (producto) {
                  case "remera":
                    precio = 2000;
                    break;
                  case "camisa":
                    precio = 4000;
                    break;
                  case "pantalon":
                    precio = 5600;
                    break;
                    case "medias":
                      precio = 600;
                      break;
                      case "campera":
                        precio = 9000;
                        break;
    
                  default:
                    alert("Ingresaste un producto que no es válido");
                    continue;
                }
    
                let precioTotalProducto = precio * cantidad;
                precioTotal += precioTotalProducto;
                cantidadTotal += cantidad;
    
                alert('Tienes '+cantidad+' '+producto+'(s)'+' en el carrito. Total a pagar: $'+precioTotalProducto);
    
                seguirComprando = confirm(" ¿Otro producto?");
    
                if (!seguirComprando) {
                  let finalizarCompra = confirm("¿Fin de la compra?");
    
                  if (finalizarCompra) {
                    alert('compraste '+cantidadTotal+' prenda(s)'+' por un valor de $'+precioTotal+'. '+' ¡Gracias por tu compra!');
                  } else {
                    alert("Hasta la próxima compra! Que tengas un gran día");
                  }
                }
              } while (seguirComprando);
            }