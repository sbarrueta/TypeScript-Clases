class Persona{
    nombre:string;
    apellido:string;

    constructor(nombre:string, apellido:string){
        this.nombre=nombre;
        this.apellido=apellido;
        
    }

    presentarse(){
        return "Hola, soy  "
            + this.nombre +
            " " + this.apellido;
    }
}

let instancia= new Persona("Juan", "Perez");

console.log(instancia.presentarse());
