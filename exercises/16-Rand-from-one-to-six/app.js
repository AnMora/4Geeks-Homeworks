function getRandomInt(a,b)
{
	var randomNumber = Math.floor((Math.random() * 6) + 1);
	return randomNumber;
}
console.log(getRandomInt(1,6));