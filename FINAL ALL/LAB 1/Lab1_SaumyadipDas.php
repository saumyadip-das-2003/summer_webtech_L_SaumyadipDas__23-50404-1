<!DOCTYPE html>
<html>
<body>


<?php

$arr = Array(5,4,6,8,7);
$sum =0;
print_r($arr);
echo "<br>";
echo "<br>";

for ($x = 0; $x < count($arr); $x++) 
{
  $sum=$sum+$arr[$x];
}

echo "Sum of Array = $sum <br>";
echo "<br>";
echo "<br>";

rsort($arr);

echo "Second Maximum Number = $arr[1] <br>";
echo "<br>";
echo "<br>";
echo "<br>";

for ($i = 1; $i < 6; $i++) 
{
   for ($j = 0; $j < $i; $j++) 
   {
      echo "* ";
   }
   echo "<br>";
}
echo "<br>";
echo "<br>";

$str = "Hello World!";
echo strrev($str);
echo "<br>";
echo "<br>";
echo "<br>";

$vowel = "";
$consonent = "";

$str1 = "saumyadip";


for ($i = 1; $i < strlen($str1); $i++) 
{
   if($str1[$i] == 'a' || $str1[$i] == 'e' || $str1[$i] == 'i' ||
      $str1[$i] == 'o' || $str1[$i] == 'u' || $str1[$i] == 'A' ||
	  $str1[$i] == 'E' || $str1[$i] == 'I' || $str1[$i] == 'O' ||
	  $str1[$i] == 'U' )
	  {
		  $vowel = $vowel.$str1[$i];
	  }
	  else
	  {
		  $consonent = $consonent.$str1[$i];
	  }
}

echo "Word: $str1 <br>";
echo "Vowels: $vowel <br>";
echo "Consonent: $consonent <br>";




?>


</body>
</html>