# _Ping Pong_

#### _A web application that takes a number from a user and returns a range of numbers from 1 to the chosen number with the certain exceptions, March 31, 2017_

#### By _**Asia Kane**_

## Description

This is a web application that takes a number from a user and returns a range of numbers from 1 to the chosen number with the following exceptions:

* Numbers divisible by 3 are replaced with "ping"
* Numbers divisible by 5 are replaced with "pong"
* Numbers divisible by 15 are replaced with "ping-pong"

A user can enter a new number and see new results over and over again.

## Specifications
| behavior |  input   |  output  |
|----------|:--------:|:--------:|
|The program takes a number from the user and stores this as a variable| 5 | userInput = 5 |
|The program checks if user input is an integer greater than 0, if not the program returns Invalid | -2 | Invalid Input |
|The program returns an array with the range of numbers from 1 to the user input number | 3 | [1, 2, 3] |
|DIVISIBLE BY THREE SECTION|||
|The program loops through the array to find the first number divisible by three, if none identified the program does nothing | 3 | 3 |
|The program takes the identified number and replaces it with "ping" in the original array | 3 | [1, 2, "ping"] |
|The program loops through all elements in the array to replace all numbers divisible by three with "ping"| 6 | [1, 2, "ping", 4, 5, "ping"] |
|DIVISIBLE BY FIVE SECTION|||
|The program loops through the array to find the first number divisible by five, if none identified the program does nothing | 5 | 5 |
|The program takes the identified number and replaces it with "pong" in the original array | 5 | [1, 2, "ping", 4, "pong"] |
|The program loops through all elements in the array to replace all numbers divisible by five with "pong"| 10 | [1, 2, "ping", 4, "pong", "ping", 7, 8, "ping", "pong"] |
|DIVISIBLE BY FIFTEEN SECTION|||
|The program loops through the array to find the first number divisible by fifteen, if none identified the program does nothing | 15 | 15 |
|The program takes the identified number and replaces it with "ping-pong" in the original array | 15 | [1, 2, "ping", 4, "pong", "ping", 7, 8, "ping", "pong", 11, "ping", 13, 14, "ping-pong"] |
|The program loops through all elements in the array to replace all numbers divisible by fifteen with "ping-pong"| 15 | [1, 2, "ping", 4, "pong", "ping", 7, 8, "ping", "pong", 11, "ping", 13, 14, "ping-pong"] |
|The user should be able to enter a new number and see new results over and over again.| 3 (assuming previous results already displayed) | [1, 2, "ping"] |


## Setup/Installation Requirements

* _View the project at akane0915.github.io/ping-pong_
* _Clone this repository_
* _Open files in text editor of your choice_
* _Make changes as desired_
* _Make frequent commits with detailed comments_
* _Submit changes as pull request to Asia Kane on Github_

## Known Bugs

_N/A_

## Support and contact details

_I encourage you to update/make suggestions/refactor this code as you see fit. I am always open to improvement! Please contact Asia Kane at asialkane@gmail.com with questions._

## Technologies Used

_HTML, CSS, Bootstrap, JavaScript (including looping), jQuery, BDD_

### License

*This software is licensed under the MIT license*

Copyright (c) 2017 **Asia Kane**
