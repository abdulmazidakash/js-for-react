// function show(){
// 	console.log('normal function');
// }

// const show = () =>{
// 	console.log('arrow');
// }

// const show1 = () =>{
// 	return 'arrow function';
// }

// const show2 = (x) =>{
// 	console.log('arrow function', x);
// }

// const show3 = (x) =>{
// 	return x * 2;
// }
// show();
// console.log(show1());
// console.log(show3(2));

const addArray = (numbers) =>{
	if(!Array.isArray(numbers))
		return 'Invalid';
	
	let sum = 0;
	for (let num of numbers){
		sum += numbers;
		console.log(sum);
	}

	return sum;
}

const result = [1,23, 4, 45];
console.log(addArray(result));