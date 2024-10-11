const numbers = [2,3, 4, 45,645];

// const numbers2 = [...numbers];
// numbers2.push(44);
// numbers.push(23);

// console.log(numbers);
// console.log(numbers2);

const [x, y, ...z] = numbers;

console.log(x, y, z);