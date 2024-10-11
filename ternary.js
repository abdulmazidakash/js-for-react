const person = {
	name: 'akash',
	age: 13,
	isStudent: true
}

// let sentence = '';
// if(person.isStudent){
// 	sentence = 'he is a student';
// }else{
// 	sentence = 'he is not student';
// }

// console.log(sentence);

// let sentence = '';

// person.isStudent? sentence = 'he is a student' : sentence = 'he is not a student';

let sentence = person.isStudent? 'he is a student': 'he is not student';

console.log(sentence);