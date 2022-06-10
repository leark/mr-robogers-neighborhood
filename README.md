# Mr. Roboger's Neighborhood

#### By Seung Lee

#### A web application that takes a number from the user and returns a range of numbers from 0 to the user inputted number with substituted text

## Technologies Used

* HTML
* CSS
* Bootstrap
* JavaScript
* jQuery

## [GitHub Pages Link](https://leark.github.io/mr-robogers-neighborhood)

## Description

Mr. Roboger's Neighborhood webpage asks the user to fill in a number and optionally a name and prints numbers from 0 to the number user put in going up by 1. Among the numbers printed if it contains 3, 2, or 1 in any of the digits, it will be replaced with text "Won't you be my neighbor?", "Boop!", or "Beep!".

## Setup/Installation Requirements

1. Open Git Bash if on Windows and terminal if on Mac
2. Run the command

    ``Git clone https://github.com/leark/mr-robogers-neighborhood``

3. Go inside mr-robogers-neighborhood directory
4. Open index.html

## Known Bugs

No known bugs

## License

[GNU](/LICENSE-GNU)

Copyright (c) 2022 Seung Lee

## TDD

```text
Describe: beepBoop()

Test1: "It should return the number user inputted"
Code: beepBoop(5);
Expected Output: 5

Test2: "It should return an array of numbers from 0 to the user's inputted number"
Code: beepBoop(5);
Expected Output: [0, 1, 2, 3, 4, 5]

Test3: "It should return an array of numbers from 0 to the user's inputted number but 3 should be replaced with 'Won't you be my neighbor?'"
Code: beepBoop(5);
Expected Output: [0, 1, 2, "Won't you be my neighbor?", 4, 5]

Test4: "It should return an array of numbers from 0 to the user's inputted number but any number with 3 should be replaced with 'Won't you be my neighbor?'"
Code: beepBoop(14);
Expected Output: [0, 1, 2, "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, 10, 11, 12, "Won't you be my neighbor?", 14]

Test5: "It should return an array of numbers from 0 to the user's inputted number but any number with 2 should be replaced with 'Boop!'"
Code: beepBoop(14);
Expected Output: [0, 1, "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, 10, 11, "Boop!", "Won't you be my neighbor?", 14]

Test6: "It should return an array of numbers from 0 to the user's inputted number but any number with 1 should be replaced with 'Beep!'"
Code: beepBoop(14);
Expected Output: [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, 10, "Beep!", "Boop!", "Won't you be my neighbor?", "Beep!"]

Test7: "It should return nothing if non number gets passed in"
Code: beepBoop('fourteen');
Expected Output: 

Test8: "It should return "Won't you be my neighbor, x?" where x is the name that was inputted for numbers with 3 in it"
Code: beepBoop(5, "Roger");
Expected Output: [0, "Beep!", "Boop!", "Won't you be my neighbor, Roger?", 4, 5]

Test9: "It should return 'Won't you be my neighbor?' for numbers including 3 if no name is put in"
Code: beepBoop(5);
Expected Output: [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5]

Test10: "It should return reversed array if reverse is true"
Code: beepBoop(5, "", true);
Expected Output: [5, 4, "Won't you be my neighbor?""Boop!", "Beep!", 0]

```

