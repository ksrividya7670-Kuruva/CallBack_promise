## Promise Chaining with Error Handling in javascript
Overview

This project demonstrate  the use of javascript Promises, Promise chaining, and error handling using .then() and .catch().

The program performs the following tasks:
1.Divides 10 by 2 and displays the result.
2.Attemps to divide 10 by 0 and handles the error.
3. Continues execution by performing another division calculation.
4.Display multiple values returned from a Promise.

## Concepts Used

1.Javascript Promises
2.Asynchronous Programming. 
3.setTimeout()
4.Promeise chaining
5.Error Handling with .catch()
6.Returning Objects from Promises

## Functions

# division()

Performs the division of 10 by 2 and resolves the result after a delay

# divcheck()

Attempts to divide 10 by 0. If the result is not finite (Infinity), the promise rejected with an error message.

# calculate()

Calculates 30 divided by 10 and returns object containing.
--res;

## Sample Output
Dividing 10 by 2...
Result: 5

Dividing 10 by 0..
Error occured: Division by zero is not allowed

A: 30
B: 10
Result: 3


## Learning Outcomes
Understand how Promises work in JavaScript.
Learn how to chain multiple asynchronous operations.
Handle errors using .catch().
Pass data between Promise handlers.
Return and access multiple values using objects.
## How to Run
1.Clone the folder
2.open the folder in vs code
3.Make sure index.html and style.css are in the same folder.
4.Open index.html in any browser.
5.After that Right click on output and click on inspect
6.we can get the output in console