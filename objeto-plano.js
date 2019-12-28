var Persona = /** @class */ (function () {
    function Persona() {
    }
    Persona.prototype.presentarse = function () {
        return "Hola, soy  "
            + this.nombre +
            " " + this.apellido;
    };
    return Persona;
}());
var instancia = new Persona();
instancia.nombre = "Juan";
instancia.apellido = "Perez";
console.log(instancia.presentarse());
