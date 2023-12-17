<?php
echo "<h2>Day 13 Task 2 PHP - Switch</h2>";
echo "<br>";
// Declare a variable $dayOfWeek.
$dayOfWeek = "Saturday";

// Use a switch statement to display a message based on the day.
switch ($dayOfWeek) {
    case "Monday":
        echo "Today is " . $dayOfWeek . " and it's a weekday.";
        break;
    case "Tuesday":
        echo "Today is " . $dayOfWeek . " and it's a weekday.";
        break;
    case "Wednesday":
        echo "Today is " . $dayOfWeek . " and it's a weekday.";
        break;
    case "Thursday":
        echo "Today is " . $dayOfWeek . " and it's a weekday.";
        break;
    case "Friday":
        echo "Today is " . $dayOfWeek . "and it's a weekday.";
        break;
    case "Saturday":
        echo "Today is " . $dayOfWeek . " and It's the weekend.";
        break;
    case "Sunday":
        echo "Today is Sunday and It's the weekend.";
        break;
    
    default:
        echo "Invalid day.";
        break;
}

?>
