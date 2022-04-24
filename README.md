# _Mister Roborogers_

#### By _**Patty Otero**_

#### _a simple Mister Rogers themed webpage to practice javascript loops. User inputs a number and the number range is returned complete with "malfunctions"._

## Github pages site: https://patty-rose.github.io/Mister-Roborogers/ 

## Technologies Used

* _HTML_
* _CSS_
* _Javascript_
* _JQuery_

## Description

_When a user inputs a number the response will follow these rules: *Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
For example, all digits of the number 109 would be replaced with "Beep!"
*Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
For example, all digits of the number 2099 would be replaced with "Boop!"
*Numbers that contain a 3: all digits are replaced (all digits) with "Won't you be my neighbor?"
For example, all digits of the number 32 would be replaced with "Won't you be my neighbor?"

There's an easter egg if 143 is entered into the field-- displaying a fact about Mister Rogers' favorite number._

## Setup/Installation Requirements

* View at Github pages site: https://patty-rose.github.io/Mister-Roborogers/ or follow next steps:
* Clone this repository to your desktop
* Get into your file explorer and go to the top of the directory
* Open index.html in your browser

## Known Bugs

* _No known bugs._

## License

_MIT_

Copyright (c) _2022_ _Patty Otero_

## Tests

_Describe: zeroToInput()_

Test: "It should return an array of numbers from 0 to the inputted number"
Code: zeroToInput(5);
Expected Output: const numRange = [0, 1, 2, 3, 4, 5]

Test: "It should return an array of strings with numbers from 0 to the inputted number"
Code: zeroToInput(5);
Expected Output: const numRange = ["0", "1", "2", "3", "4", "5"]

_Describe: numberSubstituter(number);_

Test: "It should replace the entire number in the range if any digit within it is 1 with "Beep!"
Code: numberSubstituter(13);
expected Output: ["0", "Beep!", "2", "3", "4", "5", "6", "7", "8", "9", "Beep!", "Beep!", "Beep!", "Beep!"]; 

Test: "It should replace the entire number in the range if any digit within it is 2 with "Boop!"
Code: numberSubstituter(13);
expected Output: ["0", "1", "Boop!", "3", "4", "5", "6", "7", "8", "9", "10", "11", "Boop!", "13"]; 

Test: "It should replace the entire number in the range if any digit within it is 3 with "Won't you be my neighber?"
Code: numberSubstituter(13);
expected Output: ["0", "1", "2", "Won't you be my neighber?", "4", "5", "6", "7", "8", "9", "10", "11", "12", "Won't you be my neighber?"];

Test: "It should substitue 1s with "Beep!" and 2s with "Boop!" as before but prioritzing 2s over 1s with numbers that contain both 1s and 2s"
Code: numberSubstituter(13);
expected Output: ["0", "Beep!", "Boop!", "3", "4", "5", "6", "7", "8", "9", "Beep!", "Beep!", "Boop!", "13"];

Test: "It should substitue 2s with "Boop!" and 3s with "Won't you be my neighbor?" as before but prioritzing 3s over 2s with numbers that contain both 2s and 3s"
Code: numberSubstituter(23);
expected Output: ["0", "1", "Boop!", "Won't you be my neighbor?", "4", "5", "6", "7", "8", "9", "10", "11", "Boop!", "Won't you be my neighbor?", "14", "15", "16", "17", "18", "19", "Boop!", "Boop!", "Boop!", "Won't you be my neighbor?"];

Test: "It should substitue 1s, 2s, and 3s as before but prioritzing 3s over 2s and 2s over 1s with numbers that contain all substituter digits"
Code: numberSubstituter(23);
expected Output: ["0", "Beep!", "Boop!", "Won't you be my neighbor?", "4", "5", "6", "7", "8", "9", "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Boop!", "Boop!", "Boop!", "Won't you be my neighbor?"];