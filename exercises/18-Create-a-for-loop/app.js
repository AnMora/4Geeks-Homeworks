/* This exercise should be moved before 17-Your first loop? */

// Declare and write your function here:

function standardsMaker(){
	
	/*for(var i = 0; i < 300; i++)
	{
		console.log("Yo preguntaré si estoy atascado");
	}
	
    return i; */
    
    var i = 0;
    while(i < 300){
        console.log("Yo preguntaré si estoy atascado");
        i++;
    }

    return i;
}

// Calling the function:
standardsMaker();