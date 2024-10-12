const promise = new Promise((resolve, reject) =>{
	console.log('promise is made');
	// resolve();
	// reject();

	// const error = true;
	// if(!error){
	// 	resolve();
	// }else{
	// 	reject();
	// }
	
	setTimeout(() =>{
	const error = false;
	if(!error){
		resolve('promise is resolved');
	}else{
		reject('oppss...error happend...');
	}
	}, 5000)
})

const getPromise = async ()  =>{
	// const response = await promise;
	// console.log(response);

	try{
		const response = await promise;
		console.log(response);
	}catch(error){
		console.log(error);
	}finally{
		console.log('finally block run');
	}
}

getPromise();


// promise
// .then(response =>{
// 	console.log(response);
// 	console.log('this is response block');
// })

// .catch(error =>{
// 	console.log(error);
// 	console.log('this is error catch block');
// })

// .finally(() =>{
// 	console.log('finally block run');
// })