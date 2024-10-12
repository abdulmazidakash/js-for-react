const promise =  new Promise ((resolve, reject) =>{
	setTimeout(() =>{
		resolve('result of promise => 1');
	}, 1000)
})
const promise1 =  new Promise ((resolve, reject) =>{
	setTimeout(() =>{
		resolve('result of promise => 2');
	}, 2000)
	// reject('reject promise 2')
})
const promise2 =  new Promise ((resolve, reject) =>{
	setTimeout(() =>{
		resolve('result of promise => 3');
	}, 3000)
})

console.log('calling 3 async tasks');

// promise.then((response) =>{
// 	console.log(response);
// 	promise1 .then((response) =>{
// 		console.log(response);
// 		promise2.then((response) =>{
// 			console.log(response);
// 		})
// 	}) 
// })

// Promise.all([promise, promise1, promise2])
// .then((response) =>{
// 	console.log(response);
// })
// .catch(err => console.log(err))


const getAllPromise = async () =>{
	const [result, result1, result2] = await Promise.all([promise, promise1, promise2]);
	console.log(result, result1, result2);
}

getAllPromise();