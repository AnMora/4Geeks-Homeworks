var colorname = prompt('What color do you want? Red, Green or Blue');

var isAvailable = getColor(colorname);

function getColor(selection) {
    switch (selection) {
        case "red":
            return true;
            break;
        case "green":
            return true;
            break;
        case "blue":
            return true;
            break;
        default:
            return false;  //returns false because the user picked an unavailable color
            break;
    }
}

if (isAvailable == true) {
    console.log('Good news! That color is available');
} else if(isAvailable == false){
    console.log('We are sorry, that color is not available');
}