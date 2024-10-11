// const person = {
// 	name: 'akash',
// 	age: 24,
// 	isStudent: true
// }

// const person2 = {...person};
// person2.phone = 3534;

// console.log(person);
// console.log(person2);

// const {age:myAge} = person;
// console.log(myAge);

const obj = {
	name: 'akash',
	age: 23,
	address: 'feni',
	nest: {
		city: 'world'
	}
}

const {age,nest,...remaining} = obj;
console.log(nest.city, remaining);