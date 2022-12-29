// let actualTemp = 64;
// let desiredTemp = 69;
// // let actualTemp = 76;
// // let desiredTemp = 72;
// if (actualTemp > desiredTemp) {
//     console.log("Run A/C")
// } else if  (actualTemp < desiredTemp){
//     console.log("Run Heat")
// }else {
//     console.log("Standby!")
// }

// let tempCelcius = 10;
// let targetUnit = "F";
// K = tempCelcius + 273.15;
// F = (tempCelcius * 1.8)+32;
// if (targetUnit = "C") {
//     console.log(tempCelcius + " degrees Celcius");
// } else if ((targetUnit = "F")) {
//     console.log(tempCelcius * 1.8 + 32 + " degrees Fahrenheit");
// } else {
//     console.log(tempCelcius + 273.15 + " degrees Kelvin");
// }

function createPhoneNumber(numbers) {
        return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`;
    }
    const phoneNumber = createPhoneNumber([2, 4, 8, 7, 2, 1, 6, 4, 4, 1]);
    console.log(phoneNumber);

