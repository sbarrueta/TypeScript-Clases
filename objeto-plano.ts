class Persona{
    nombre:string;
    apellido:string;

    constructor(nombre:string, apellido?:string){
        this.nombre=nombre;
        this.apellido=apellido;
        
    }

    presentarse(){

        let respuesta = "Hola, soy  "
            + this.nombre;
        if (!this.apellido){}
        else
        {
            respuesta.concat(" " + this.apellido);
        }
        return respuesta;
            
    }
}

let instancia= new Persona("Juan");

console.log(instancia.presentarse());
