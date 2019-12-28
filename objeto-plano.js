var Persona = /** @class */ (function () {
    function Persona(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
    Persona.prototype.presentarse = function () {
        var respuesta = "Hola, soy  "
            + this.nombre;
        if (!this.apellido) { }
        else {
            respuesta.concat(" " + this.apellido);
        }
        return respuesta;
    };
    return Persona;
}());
var instancia = new Persona("Juan");
console.log(instancia.presentarse());
