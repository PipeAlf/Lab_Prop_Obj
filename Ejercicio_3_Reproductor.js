//! Andrés Alfonso

function Reproductor(){
    this.valorinicial= "detenido";
    this.play=function(){
        if(this.valorinicial=="detenido" || this.valorinicial=="pausado"){
            this.valorinicial="reproduciendo";
            console.log("Reproduciendo música.");
        }
        else if(this.valorinicial=="reproduciendo"){
            console.log("Ya se esta reproduciendo música");
        }
    }
    this.pausar=function(){
        if(this.valorinicial=="reproduciendo"){
            this.valorinicial="pausado";
            console.log("Música pausada.");
        }
        else{
            console.log("No hay musica reproduciéndose.");
        }
    }
    this.detener=function(){
        this.valorinicial="detenido";
        console.log("Música detenida");
    }
}

let ReproductorMus= new Reproductor();

ReproductorMus.play();
ReproductorMus.play();
ReproductorMus.pausar();
ReproductorMus.pausar();
ReproductorMus.detener();
