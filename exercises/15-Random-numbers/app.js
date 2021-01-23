/*Exercise closely resembles 11 - consider introducing another concept here? */

function getRandomInt(a,b)
{
    var randomNumber = Math.floor((Math.random() * 10) + 1);
    
	return randomNumber;
}


console.log(getRandomInt(1,10));