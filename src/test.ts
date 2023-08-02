class Persona {
	nombre;
	edad;
	genero = 'femenino';

	constructor(nombre: string, edad: number) {
		this.nombre = nombre;
		this.edad = edad;
	}

	saludar() {
		console.log(this);
	}
}

const roberto = new Persona('Roberto', 36);

const julia = new Persona('Julia', 36);

const juana = new Persona('Juana', 36);

const joaquin = new Persona('Joaquin', 36);

const test = {
	nombre: 'Test',
	edad: 999,
};

console.log(julia instanceof Persona);
console.log(test instanceof Persona);

roberto.saludar();
julia.saludar();
juana.saludar();
joaquin.saludar();
