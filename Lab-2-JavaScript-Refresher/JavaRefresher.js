// let firstName = "Robert";
// let lastName = "Hochstadt";
// let fullName = (`${firstName} ${lastName}`);
// //let fullName = firstName + " " + lastName;

// let popDet = 639111;

// let tripDet = (popDet * 3);

// let JavScriptIscool = true;

// let colors = ["red","orang","yellow","green","blue","indigo","violet"]

// console.log(fullName);
// console.log(popDet);
// console.log(tripDet);

function createPhoneNumber(numbers) {
    function createPhoneNumber(numbers) {
        return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]})`;
    }
    const phoneNumber = createPhoneNumber([2, 4, 8, 7, 2, 1, 6, 4, 4, 1]);
    console.log(phoneNumber);
}
