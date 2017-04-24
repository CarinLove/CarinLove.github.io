// JavaScript source code

var slideIndex = 0;
      showSlides();

    function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = "block"; 
    setTimeout(showSlides, 4500); 
}
//To display the date on my pages

var today = new Date();

//Display the date

    var d = new Date();
    document.getElementById("today").innerHTML = "Today is: " + d.toDateString();

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
    $("#productsLinks").click(function(){
        $("#products").slideToggle();
    });
    
    
});
