// JavaScript source code
//To display the date on my pages

var today = new Date();

//Display the date

    var d = new Date();
    document.getElementById("today").innerHTML = d.toDateString();

//Data Validation
function validateform() {
    var firstName;
    var lastName;
    var eMail;

    var firstName = document.forms["myForm"]["firstName"].value;
    var lastName = document.forms["myForm"]["lastName"].value;
    var eMail = document.forms["myForm"]["eMail"].value;

    if (firstName=="") {
        alert("All fields with '*' are required");
        return false;
    }
    if (lastName== "") {
        alert("All fields with '*' are required");
        return false;
    }
    if (eMail== "") {
        alert("All fields with '*' are required");
        return false;
    }
}


$( document ).ready(function() {
    $("#productsLinks").on("click", function(){
        $("#products").show();
    });
    
    
});
