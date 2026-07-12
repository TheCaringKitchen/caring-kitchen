// Caring Kitchen 2026
//-------------------------------------------------------
//GET THE HTMLs AS JS OBJECTS:
//-------------------------------------------------------

//The entire form
let formObj = document.getElementById("form2");

//Array of fields so we can use them in a single function 
let filledArray = [ //all the fields that must be filled 
    document.getElementById("fName"),
    document.getElementById("lName"),
    document.getElementById("msg")
];
let fNameErr = document.getElementById("fNameErr");
let lNameErr = document.getElementById("lNameErr");
let msgNameErr = document.getElementById("msgNameErr");

//Changable contact field starts as email
let contactFieldObj = document.getElementById("email");

//Label visible front end
let contactLabelObject = document.getElementById("contactLabel")

//Get buttons as objects
let emailObj = document.getElementById("emailRadio");
let callObj = document.getElementById("callRadio");

// Reset
let resetObj = document.getElementById("cancel");

//--------------------------------------------------------
//VALICATION FUNCTIONS (run t/f for final validation):
//--------------------------------------------------------

//Validate first, last, and msg fields
function ValidateNames(fieldId) {
    // This is still hard to wrap my head around - the function is taking the ID to find that element and check if it's empty
    var names = document.getElementById(fieldId);
    var errSpan = document.getElementById(fieldId + "Err");
    // check if input is empty and trim spaces
    if (names.value.trim() === "") {
        names.style.border = "2px solid red";
        errSpan.textContent = "This field cannot be empty";
        return false;
    } else {//Clear error styling if true/valid
        names.style.border = "";
        errSpan.textContent = "";
        return true;
    }
}

function Change2email() {
    contactFieldObj.type = "email";
    contactFieldObj.placeholder = "you@gmail.com";
    contactLabelObject.innerHTML = "Email";
}

function Change2phone() {
    contactFieldObj.type = "tel";
    contactFieldObj.placeholder = "2345678910";
    contactLabelObject.innerHTML = "Phone";
}

//--------------------------------------------------------
//REGISTER FUNCTION TO EVENT
//--------------------------------------------------------

emailObj.addEventListener("click", Change2email);
callObj.addEventListener("click", Change2phone);

//--------------------------------------------------------
//FINAL VALIDATION ON SUBMIT EVENT:
//--------------------------------------------------------

function HandleSubmit(event) {
    event.preventDefault(); //stop auto submit

    //Internal variables for the validation  
    var fnameVal = ValidateNames("fName");
    var lnameVal = ValidateNames("lName");
    var msgVal = ValidateNames("msg");


    // If it's all valid, submit the form 
    if (fnameVal && lnameVal && msgVal) {
        // Show success message
        const successBox = document.getElementById("formSuccess");
        successBox.style.display = "block";
        // Actually submit to Formspree
        formObj.requestSubmit();
    } else { //Otherwise block and ask to correct
        alert("Please correct the highlighted fields.");
    }
}

//--------------------------------------------------------
// RESET BUTTON
//--------------------------------------------------------

function ResetFormStyles() {
    var allInputs = formObj.querySelectorAll("input");
    var textInput = formObj.querySelector("textarea");
    var allErrors = formObj.querySelectorAll(".error");

    console.log(allInputs);

    allInputs.forEach(el => {
        el.style.border = "";
        el.placeholder = "";
    });

    allErrors.forEach(err => {
        err.textContent = "";
    });

    textInput.placeholder = "";
    textInput.style.border = "";

    document.getElementById("formSuccess").style.display = "none";
}

//--------------------------------------------------------
// REGISTER SUBMIT EVENT 
//--------------------------------------------------------
formObj.addEventListener("submit", HandleSubmit);
resetObj.addEventListener("click", ResetFormStyles);

