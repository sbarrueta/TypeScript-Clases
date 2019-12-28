class Persona{
    nombre:string;
    apellido:string;

    presentarse(){
        return "Hola, soy  "
            +this.nombre +
            " " + this.apellido;
    }
}

let instancia= new Persona();

instancia.nombre = "Juan";
instancia.apellido="Perez";

console.log(instancia.presentarse());
