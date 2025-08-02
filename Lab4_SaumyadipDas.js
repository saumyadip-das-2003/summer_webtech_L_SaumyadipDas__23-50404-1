var count ;

function incrementCounter() 
{
  count = document.getElementById("counterBox").value;
  count++;
  document.getElementById("counterBox").value = count;
}

function decrementCounter() 
{
  count = document.getElementById("counterBox").value;
  count--;
  document.getElementById("counterBox").value = count;
}

function calculateBMI() 
{
  var height = parseFloat(document.getElementById("height").value);
  var weight = parseFloat(document.getElementById("weight").value);
  var bmiResult = document.getElementById("bmiResult");
  if (height > 0 && weight > 0) {
    var bmi = weight / ((height / 100) * (height / 100));
    bmiResult.innerText = bmi.toFixed(2);
  } else {
    bmiResult.innerText = "Please enter valid height and weight!";
  }
}

function changeTextColor() 
{
  var color = document.getElementById("colorInput").value;
  document.getElementById("colorBox").style.backgroundColor = color;
}

function isUsernameValid(username) 
{
  if (username.length < 1 || username.length > 8) 
  {
    return false;
  }
  
  return true;
}

function isPasswordValid(password)
{
  return password.length >= 6;
}

function calcScore(password) 
{
  var specialChars = "!@#$%&*";
  var hasAlpha = false;
  var hasNumber = false;
  var hasSpecial = false;
  var score = 0;

  if (password.length >= 6) score++;
  for (var i = 0; i < password.length; i++) 
  {
    var ch = password.charAt(i);
    if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')) 
		hasAlpha = true;
    if (ch >= '0' && ch <= '9') 
		hasNumber = true;
    if (specialChars.indexOf(ch) !== -1) 
		hasSpecial = true;
  }
  if (hasAlpha) 
	  score++;
  if (hasNumber) 
	  score++;
  if (hasSpecial) 
	  score++;

  return score;
}

function formAuth() 
{
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var Cpassword = document.getElementById("Cpassword").value;
  var resultDiv = document.getElementById("authResult");


  if (!isUsernameValid(username)) 
  {
    resultDiv.innerText = "Invalid username! Only lowercase letters (a-z), max 8 characters.";
    return;
  }
  if(password == Cpassword)
  {

  var passValid = isPasswordValid(password);
  var score = calcScore(password);

  if (!passValid) 
  {
    resultDiv.innerText = "Invalid password!";
	document.getElementById("username").value="";
	document.getElementById("password").value="";
	 document.getElementById("Cpassword").value="";
  } 
  else 
  {
    resultDiv.innerText = "Login Success! Password Score: " + score + "/4";
	document.getElementById("username").value="";
	document.getElementById("password").value="";
	 document.getElementById("Cpassword").value="";
  }
  } 
  else 
  {
    resultDiv.innerText = "Password dont Match. ";
  }
  
}

window.onload = function() {
  document.getElementById("plusBtn").onclick = incrementCounter;
  document.getElementById("minusBtn").onclick = decrementCounter;
  document.getElementById("bmiBtn").onclick = calculateBMI;
  document.getElementById("colorBtn").onclick = changeTextColor;
  document.getElementById("btn1").onclick = formAuth;
};
