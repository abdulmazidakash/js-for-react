// const fun = (x, y, callback) =>{
// 	console.log('hello from fun 1');
// 	console.log(typeof callback);
// 	callback(x, y);

// }

// const fun2 = (x, y) =>{
// 	console.log(x + y);
// }

// fun(4,5,fun2)

const giveName = (name, callback) => {
	// callback(name);

	setTimeout(() =>{
		callback(name)
	}, 3000)
}

const greeting = (name) =>{
	console.log(`hello, ${name}...!`);
}

// giveName('akash', greeting);

console.log('first line of code');
giveName('akash', greeting);
console.log('last line of code');
