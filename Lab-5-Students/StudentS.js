let submissions = [
    { name: "Jane", score: 95, date: "2020-01-24", passed: true },
    { name: "Joe", score: 77, date: "2018-05-14", passed: true },
    { name: "Jack", score: 59, date: "2019-07-05", passed: false },
    { name: "Jill", score: 88, date: "2020-04-22", passed: true },
];
// 2
function addSubmission(array, newName, newScore, newDate) {
    let newStudent = {
        name: newName,
        score: newScore,
        date: newDate,
    };

    newStudent.score >= 60 ? (newStudent.passed = true) : false;
    array.push(newStudent);
    console.log(array);
}
addSubmission(submissions, "Phil", 68, "2020 - 01 - 01");
//  3   /////////////////////////////////////////////
function deleteSubmissionByIndex(array, index) {
    return array.splice(index, 1);
}
console.log(deleteSubmissionByIndex(submissions, 2));

// 4 ////////////////////

function deleteSubmissionByName(array, name) {
    let index = array.findIndex((i) => i.name === name);
    if (index > -1) {
        array.splice(index, 1);
    }
    console.log(array);
}
console.log(deleteSubmissionByName(submissions, "Jill"));

//////////////////////////////////////////////////////
// 5.Declare a function named editSubmission
// Parameter(s): array, index, score
// Functionality: update an object’s score in the array at the specified index. Use conditional statements to set the value for the passed property to true if the score is greater than or equal to 60 and false otherwise.
//
function editSubmission(array, index, score) {
    array[index].score = score;
    // update score at specifiec index
    // console.log(array[index])

    score >= 60 ? (array[index].passed = true) : array[(index.passed = false)];
    console.log(editSubmission(submissions, 1, 75));
    console.log(editSubmission(submission, 0, 75))
    



    ///////////////////////////////////////////////
    // 6. Declare a function named findSubmissionByName
    // Parameter(s): array, name
    // Functionality: return the object in the array that has the provided name. Use the find method.
    
    function findSubmissionByName(array, name) {
        return array.find((element) => element.name === name);
    }
    const foundName = findSubmissionByName(submisssions, "Jack");
    console.log(foundName);




//////////////////////////////////////
// 7. Declare a function named findLowestScore
// Parameter(s): array
// Functionality: return the object in the array that has the lowest score. Use the forEach method to loop through the whole array.

function findLowestScore(array) {
    let lowestScoreObject = array[0];
    array.forEach((element) => {
        if (element.score < lowestScoreObject.score) {
            lowestScoreObject = element;
        }
    });
    return lowestScoreObject;
    // console.log(lowestScoreObject);
 }
console.log(findLowestScore(submissions));

// // console.log(lowestScore);
/////////////////////////////////////
// 8. Declare a function named findAverageScore
// Parameter(s): array
// Functionality: return the average quiz score.  Use a for...of loop.
function findAverageScore(array) {
    let total = 0;
    for (let element of array) {
        total += element.score;
    }
    return total / array.length;
}
console.log(findAverageScore(submissions));
//     /////////////////////////////////////////////
//     // 9. Declare a function named filterPassing
//     // Parameter(s): array
//     // Functionality: return a new array using the filter method. The filter method should find objects in the array that have passing scores.
function filterPassing(array) {
    return submissions.filter((element) => element.score >= 60);
}
// (f=> f.passed (boolean element))default true implied
// return array.filter(f => !f.passed)
console.log(filterPassing(submissions));
//     ///////////////////////////////////////////////
//     // 10. Declare a function named filter90AndAbove
//     // Parameter(s): array
//     // Functionality: return a new array using the filter method. The filter method should find objects in the array that have scores greater than or equal to 90.
function filter90AndAbove(array) {
    return array.filter((f) => f.score >= 90);
    // (element) => element.score >= 90);
}

console.log(filter90AndAbove(submissions));
