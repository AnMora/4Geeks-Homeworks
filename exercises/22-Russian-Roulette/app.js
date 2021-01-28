var bulletPosition = 4;

const spinChamber = () => {
	var chamberPosition = Math.floor((Math.random() * 6) + 1);
	return chamberPosition;
};

// => Funcion(asignada a una variable)

// Remove the // below and complete the commented lines
const fireGun = (spinnerPosition) => {
    if (spinnerPosition == bulletPosition) return ("You're dead!");
    else return ("Keep playing! " + "La posicion que te salvo fue: " + spinnerPosition);
    // 123(4 mueres)56 ()
};

console.log(fireGun(spinChamber()));