interface IPerson {
	firstName: string;
	lastName: string;
}
const person: IPerson = {
	firstName: 'Derek',
	lastName: 'DenHartigh',
};

const someFunction = () => {
	console.log(`hello ${person.firstName + ' ' + person.lastName}`);
};

export { person, someFunction };
