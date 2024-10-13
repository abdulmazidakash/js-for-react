const getPromise = (name) =>{
	return new Promise((resolve, reject) =>{
		console.log(`Hello ${name}. your promise is made`);
		setTimeout(() =>{
			const error = false;
			if(!error){
				resolve(`${name} your promise is resolved`)
			}else{
				reject(`opps... ${name} error happend...`);
			}
		}, 3000)
	})
}

// getPromise('Akash')
getPromise('Akash')
.then(res => console.log(res))
.catch(err => console.log(err))