//Step ONE - controller accept requests
function getValues() {

    // First get the fizz anb buzz values from the user
    let fizzValue = document.getElementById("fizzNum").value;
    let buzzValue = document.getElementById("buzzNum").value;

    // check if the user entered numbers
    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);


    if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {
        //Call display values and pass fizz buzz values to the function
        //calculate fizzbuzz
        let fbValues = fizzBuzzA(fizzValue, buzzValue);
        //
        displayValues(fbValues);
    } else {
        alert("You must enter integers!")
    }

}

//business logic layer - Model
function fizzBuzzA(fizz, buzz) {

    // create an array
    let fbValues = [];

    for (let i = 1; i < 100; i++) {

        if (i % fizz == 0 && i % buzz == 0) {
            fbValues.push('FizzBuzz');
        } else if (i % fizz == 0) {
            fbValues.push('Fizz');
        } else if (i % buzz == 0) {
            fbValues.push('Buzz');
        } else {
            fbValues.push(i);
        }

    }

    return fbValues;

}

//Final Step - view
function displayValues(fbValues) {

    // display a list of numbers from 1 to 100

    let element = document.getElementById("results");

    element.innerHTML = "";


    // write a foor loop to display from 1 to 100
    for (let i = 0; i < fbValues.length; i++) {

        let item = document.createElement("div");
        item.classList.add("col");
        item.innerHTML = fbValues[i];

        if (fbValues[i] == "FizzBuzz") {
            item.classList.add("purpleItem")
        } else if (fbValues[i] == "Fizz") {
            item.classList.add("redItem")
        } else if (fbValues[i] == "Buzz") {
            item.classList.add("blueItem")
        }

        element.appendChild(item);
    }



}