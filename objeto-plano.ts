class Persona{
    nombre:string;
    apellido:string;
}

let instancia = new Persona();

instancia.nombre = "Juan";
instancia.apellido="Perez";

console.log("Hola " +instancia.nombre);
