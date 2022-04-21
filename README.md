# _title_

#### By _**Patty Otero**_

#### _description_

## Github pages site: 

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_

## Description

_more detailed description_

## Setup/Installation Requirements

* View at Github pages site:  or follow next steps
* Clone this repository to your desktop
* Get into your file explorer and go to the top of the directory
* Open index.html in your browser

## Known Bugs

* _No known bugs._

## License

_MIT_

Copyright (c) _2022_ _Patty Otero_

## Tests

Describe: zeroToInput()

Test: "It should return an array of numbers from 0 to the user's inputted number"
Code: zeroToInput(5);
Expected Output: const numRange = [0, 1, 2, 3, 4, 5]

Describe: numberSubstituter(numRange);

Test: "It should replace all occurences of 1 in the range with "Beep!"
Code: numberSubstituter(3);
expected Output: ["Beep!", "2", "3"]; 

Test: "It should replace the entire number in the range if any digit within it is 1 with "Beep!"
Code: numberSubstituter(13);
expected Output: ["Beep!", "2", "3", "4", "5", "6", "7", "8", "9", "Beep!", "Beep!", "Beep!", "Beep!"]; 

Test: "It should replace all occurences of 2 in the range with "Boop!"
Code: numberSubstitute(3);
expected Output: ["1", "Boop!", "3"]; 

Test: "It should replace the entire number in the range if any digit within it is 2 with "Boop!"
Code: numberSubstituter(13);
expected Output: ["1", "Boop!", "3", "4", "5", "6", "7", "8", "9", "10", "11", "Boop!", "13"]; 

Test: "It should replace all occurences of 3 in the range with "Won't you be my neighbor?"
Code: numberSubstitute(3);
expected Output: ["1", "2", "Won't you be my neighbor?"];

Test: "It should replace the entire number in the range if any digit within it is 3 with "Won't you be my neighber?"
Code: numberSubstituter(13);
expected Output: ["1", "2", "Won't you be my neighber?", "4", "5", "6", "7", "8", "9", "10", "11", "12", "Won't you be my neighber?"];

Test: "It should substitue 1s with "Beep!" and 2s with "Boop!" as before but prioritzing 2s over 1s with numbers that contain both 1s and 2s"
Code: numberSubstituter(13);
expected Output: ["Beep!", "Boop!", "3", "4", "5", "6", "7", "8", "9", "Beep!", "Beep!", "Boop!", "13"];

Test: "It should substitue 2s with "Boop!" and 3s with "Won't you be my neighbor?" as before but prioritzing 3s over 2s with numbers that contain both 2s and 3s"
Code: numberSubstituter(23);
expected Output: ["1", "Boop!", "Won't you be my neighbor?", "4", "5", "6", "7", "8", "9", "10", "11", "Boop!", "Won't you be my neighbor?", "14", "15", "16", "17", "18", "19", "Boop!", "Boop!", "Boop!", "Won't you be my neighbor?"];