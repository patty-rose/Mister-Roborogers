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

Test: "It should replace all occurences of 2 in the range with "Boop!"
Code: numberSubstitute(3);
expected Output: ["1", "Boop!", "3"]; 

Test: "It should replace all occurences of 3 in the range with "Won't you be my neighbor?"
Code: numberSubstitute(3);
expected Output: ["1", "2", "Won't you be my neighbor?"];