//! Andrés Alfonso

function Libro(titulo,autor){
    this.prestado= false;
    this.titulo= titulo;
    this.autor=autor;
    this.prestar= function(){
        if(this.prestado==false){
            this.prestado=true;
            console.log("Acaba de adquirir el libro: ", this.titulo, " de: ", this.autor);
        }
        else{
            this.prestado=false;
            console.log("Error, el libro está prestado!");
        }
    };
}

let libro1 = new Libro("Harry","J.K. Rowling");

libro1.prestar();
libro1.prestar();