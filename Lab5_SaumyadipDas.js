var fname, email, age, course;

function validateForm() 
{
  fname = document.getElementById("fname").value;
  email = document.getElementById("email").value;
  age = document.getElementById("age").value;
  course = document.getElementById("course").value;

  var errors = [];

  if (fname == "") 
  {
    errors.push("Full name is required.");
  }
  

  if (email == "") 
  {
    errors.push("Email is required.");
  }

  if (isNaN(age) || age < 18) 
  {
    errors.push("Please enter a valid age (18 or older).");
  }

  if (course == "Select Course") 
  {
    errors.push("Please select a course.");
  }

  if (errors.length > 0) 
  {
    alert(errors.join("\n"));
  } 
  else 
  {
    alert("Form submitted successfully!");
    document.getElementById("fname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("age").value = "";
    document.getElementById("course").value = "Select Course";
  }
}

function showImage() 
{
  document.getElementById("image").style.visibility = "visible";  
}

function hideImage() 
{
  document.getElementById("image").style.visibility = "hidden"; 
}


window.onload = function() {
  document.getElementById("submit").onclick = validateForm;
  document.getElementById("showbtn").onclick = showImage;  
  document.getElementById("hidebtn").onclick = hideImage;  
};
