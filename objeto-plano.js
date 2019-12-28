var Persona = /** @class */ (function () {
    function Persona(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
    Persona.prototype.presentarse = function () {
        return "Hola, soy  "
            + this.nombre +
            " " + this.apellido;
    };
    return Persona;
}());
var instancia = new Persona("Juan", "Perez");
console.log(instancia.presentarse());
