<?php
    echo "<h1>Day 13 Task 1 PHP - If Else</h1>";
    echo "<br>";
    echo "<br>";
    // Create if else ladder using more than one elseif
    $age1 = 20;

    echo "Your age is $age1";
    echo "<br>";
    echo "<br>";
    if($age1 >= 60){
        echo "You are eligible to eat for free";
    } elseif($age1 < 12){
        echo "You are eligible for 50% discount";
    } elseif($age1 < 30 ){
        echo "You are eligible for 20% discount";
    } else{
        echo "You are not eligible for discounts";
    }
    echo "<br>";
    echo "<br>";

    // Write a program to allow a driver to drive only when his age is greater than or equal to 25 and less than or equal to 65

    $age2 = 66;

    echo "<br>";
    echo "Your age is $age2";
    echo "<br>";
    echo "<br>";
    if($age2 >= 25 && $age2 <= 65){
        echo "You are eligible to drive";
    } else{
        echo "You are not eligible to drive";
    }
    echo "<br>";

?>