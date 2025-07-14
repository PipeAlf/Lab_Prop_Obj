//! Andrés Alfonso

function ListaCompras(){
    this.productos= [];
    this.agregar=function(producto){
        this.productos.push(producto);
    }
    this.mostrar=function(){
        for(let i=0;i<this.productos.length;i++){
            console.log(i+1, ".", this.productos[i]);
        }
    }
}

let Lista1 = new ListaCompras();

Lista1.agregar("Manzana");
Lista1.agregar("Lulo");
Lista1.agregar("Pera");
Lista1.mostrar();