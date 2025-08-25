<?php
    $errors = [];
    $name = $_POST["name"];
    $email = $_POST["email"];
    $website = $_POST["website"];
    $comment = $_POST["comment"];
    $gender = $_POST["gender"];
    $file = $_FILES["file"];
	
	if (empty($gender)) 
	{
        $errors[] = "Please select a gender.";
    }

    $validName = true;
    for ($i = 0; $i < strlen($name); $i++) {
        $char = $name[$i];
        if (!($char >= 'A' && $char <= 'Z') && !($char >= 'a' && $char <= 'z') && $char != ' ') {
            $validName = false;
            break;
        }
    }
    if (empty($name) || !$validName) 
	{
        $errors[] = "Invalid name. Only alphabets and spaces are allowed.";
    }

    $validEmail = true;
    $atCount = 0;
    $dotCount = 0;
    for ($i = 0; $i < strlen($email); $i++) 
	{
        $char = $email[$i];
        if ($char == '@') {
            $atCount++;
        } 
		elseif ($char == '.') 
		{
            $dotCount++;
        }

        if (!($char >= 'A' && $char <= 'Z') && !($char >= 'a' && 
		$char <= 'z') && !($char >= '0' && $char <= '9') && 
		$char != '@' && $char != '.' && $char != '-' && $char != '_') 
		{
            $validEmail = false;
            break;
        }
    }
    if (empty($email) || $atCount != 1 || $dotCount < 1 || !$validEmail) 
	{
        $errors[] = "Invalid email. Please check the email format.";
    }

    
	$validWebsite = false;
    if (strpos($website, "www.") !== false && strpos($website, ".") !== false) 
	{
        $validWebsite = true;
    }
    if (empty($website) || !$validWebsite) 
	{
        $errors[] = "Invalid website. It should contain 'www.' and a domain.";
    }


    if (empty($comment)) 
	{
        $errors[] = "Comment cannot be empty.";
    }

    

    $allowedTypes = ["image/jpeg", "image/png", "application/pdf"];
    $fileTypeValid = false;
    for ($i = 0; $i < count($allowedTypes); $i++) 
	{
        if ($file['type'] == $allowedTypes[$i]) 
		{
            $fileTypeValid = true;
            break;
        }
    }
    if (!$fileTypeValid) 
	{
        $validFile = false;
        $errors[] = "Invalid file type. Only JPG, PNG, and PDF files are allowed.";
    }

    if (empty($errors)) 
	{
        echo "<p style='color: green;'>Form submitted successfully!</p>";
    } 
	else 
	{
        echo "<div style='color: red;'>";
        foreach ($errors as $error) 
		{
            echo "<p>$error</p>";
        }
        echo "</div>";
    }
?>

