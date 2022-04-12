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
        let fbValues = fizzBuzzC(fizzValue, buzzValue);
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

function fizzBuzzB(fizz, buzz) {
    let fbValues = [];

    let isFizz = false;
    let isBuzz = false;

    for (let i = 1; i < 101; i++) {
        
        isFizz = (i%fizz == 0);
        isBuzz = (i%buzz == 0);

        switch(true) {
            case isFizz && isBuzz: {
                fbValues.push("FizzBuzz");
                break;
            }
            case isFizz: {
                fbValues.push("Fizz");
                break;
            }
            case isBuzz: {
                fbValues.push("Buzz");
                break;
            }
            default: {
                fbValues.push(i);
                break;
            }
        }
        
    }

    return fbValues;
}


function fizzBuzzC(fizz, buzz) {
    let fbValues = [];

    for (let i = 1; i < 101; i++) {
        let value = ( (i%fizz == 0 ? "Fizz" : "") + ( i%buzz == 0 ? "Buzz" : "") || i  );
        fbValues.push(value);
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