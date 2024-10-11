const person = {
	name: 'akash',
	age: 23,
	isStudent: true,
	details: 'this is details'
}

// console.log(person.isStudent && 'he is student');

// console.log(person.name || 'N/A');

const details = person?.details || 'N/A';
console.log(details);