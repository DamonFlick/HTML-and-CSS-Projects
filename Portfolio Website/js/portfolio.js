$(function() {
    $('body').removeClass('fade-out');
});

function validateForm() {
    var x = document.forms["contact"]["full-name"].value;
    if (x == "") {
        alert("Please enter your name.");
        return false;
    }
}

function openForm() {
    document.getElementById("login").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("login").style.display = "none";
  }