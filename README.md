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

_{This is a detailed description of your application. Give as much detail as needed to explain what the application does as well as any other information you want users or other developers to have.}_

## Setup/Installation Requirements

* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this application depends on? We recommend deleting the project from your desktop, re-cloning the project from GitHub, and writing down all the steps necessary to get the project working again.}_

## Known Bugs

* _Any known issues_
* _should go here_

## License

_{Let people know what to do if they run into any issues or have questions, ideas or concerns.  Encourage them to contact you or make a contribution to the code.}_

[GNU](/LICENSE-GNU)

Copyright (c) 2022 Seung Lee

## TDD

```
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

Test7: "It should return an nothing if non number gets passed in"
Code: beepBoop('fourteen');
Expected Output: 

```

