//! Andrés Alfonso

function Carrito(){
    this.productos=[];
    this.total=0;
    this.agregarProducto=function(nombre,precio){
        this.productos.push(nombre);
        this.total=this.total+precio;
        console.log("Producto agregado: ", nombre, " - ", precio);
    }
    this.calcularDescuento=function(){
        if(this.total>100){
            let desc=0.1;
            let valPago=this.total-(this.total*desc);
            console.log("El valor a pagar es de: ", valPago);
        }
        else if(this.total>50 && this.total<=100){
            let desc=0.05;
            let valPago=this.total-(this.total*desc);
            console.log("El valor a pagar es de: ", valPago);
        }
        else{
            console.log("El total a pagar es de: ", this.total);
        }
    }
}

let CarroCompras = new Carrito();

CarroCompras.agregarProducto("Camisa", 30);
CarroCompras.agregarProducto("Hoodie", 50);
CarroCompras.agregarProducto("Zapatos", 40);
CarroCompras.calcularDescuento();

let CarroCompras2 = new Carrito();

CarroCompras2.agregarProducto("Medias", 5);
CarroCompras2.agregarProducto("Pantaloneta", 10);
CarroCompras2.agregarProducto("Crocs", 40);
CarroCompras2.calcularDescuento();

let CarroCompras3 = new Carrito();

CarroCompras3.agregarProducto("Medias", 5);
CarroCompras3.agregarProducto("Boxers", 10);
CarroCompras3.agregarProducto("Cepillo", 10);
CarroCompras3.calcularDescuento();
