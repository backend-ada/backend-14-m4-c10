interface PersonData {
	name: string;
	lastname: string;
	birthdate: number;
}

class Person {
	name;
	lastname;
	birthdate;

	constructor(userData: PersonData) {
		const { birthdate, name, lastname } = userData;

		this.name = name;
		this.lastname = lastname;
		this.birthdate = birthdate;
	}

	#createRandomNumber() {
		return Math.trunc(Math.random() * 1000);
	}

	userCode() {
		return `${this.#createRandomNumber()}--${this.#createRandomNumber()}--${this.#createRandomNumber()}`;
	}

	printObject(): number {
		console.log(3, this);
		console.log(4, this.name);

		return 999;
	}
}

const jroberts = new Person({
	name: 'Julia',
	lastname: 'Roberts',
	birthdate: 1967,
});

const bpitt = new Person({ name: 'Brad', lastname: 'Pitt', birthdate: 1963 });

console.log(jroberts instanceof Person);
console.log(bpitt instanceof Person);

console.log(' ');
console.log('-------------------   ---------------------');
console.log(' ');

console.log(1, jroberts.userCode());
console.log(2, jroberts.printObject(), 10);

console.log(' ');
console.log('-------------------   ---------------------');
console.log(' ');

console.log(1, bpitt.userCode());
console.log(2, bpitt.printObject(), 10);
