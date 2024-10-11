//forEach, map, find, filter

// const numbers = [2,3, 43, 54, 43];

// for(let i = 0; i < numbers.length; i++)
// 	console.log(numbers[i]);

// const x = (item) => console.log(item);

// numbers.forEach(x);

// const result = numbers.forEach((item) => console.log(item))
// console.log(result);

// const result = numbers.map((item) => item * 2)

// const result = numbers.map((item, index) =>{
// 	console.log('item: ',item, 'index: ', index);
// 	return item * 2;
// })

// console.log(result);
// console.log(numbers);

// const numbers = [2,3, 43, 54, 43];

// const sentence = `my numbers are ${numbers.forEach(item => item)}`

// const sentence = `my numbers are ${numbers.map(item => item).join(' ')}`;
// console.log(sentence);

// const result = numbers.find((item) => item > 10);
// const result = numbers.find((item) => item> 1000);

// const result = numbers.filter((item) => item > 10);
// const result = numbers.filter((item) => item > 1000);
// console.log(result);

const numbers = [2, 432, 4,3, 465,45];

// let sum = 0;
// numbers.forEach((item) => sum+= item);
// console.log(sum);

/**
 * prev = prev + current
 * 0 = 0 + 1;
 * 1 = 1 + 2;
 * 3 = 3 + 3;
 * 6 = 6 + 4;
 */

// const total = numbers.reduce((previous, current) => previous + current, 0);
// console.log(total);

const products = [
	{price: 1},
	{price: 2},
	{price: 3},
	{price: 4}
];

const total = products.reduce((previous, current) => previous + current.price, 0);
console.log(total);
