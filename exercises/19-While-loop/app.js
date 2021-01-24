
//fix this function:
function startCounting(){
    console.log('Entra en la funcion');
    
	var counter = 100;
    
	while(counter <= 100 && counter >= 0){
		console.log(counter);
        counter--;
	}
	
	return counter;
}

startCounting();