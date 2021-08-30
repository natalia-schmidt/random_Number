# random_Number
 
I made this project to practice:

* While condition
* Math.floor() method
* Math.random() method

This program gets a range of 2 numbers and delivers one random number within that range. 

First I created the HTML file. It has 3 divs, the first for the title, the second for the form and the third for the result. In the second div I created a form with double input to get the range, and a button that on the onclick() event calls the getUserNumbers() function.

The getUserNumbers() function gets the value inside the HTML inputs. These are passed as parameters to the getRandomNumber() function.

The getRandomNumber() function creates the getRandom variable. This variable gets a random number with the Math.random() method and multiplies it for the range. This way, you turn the decimal numbers that the method gave into whole numbers. 

Then, in order to get the start point of these range, we have to sum it up. This way guarantees us that the random number is always going to be bigger than the start number. However, the result of this calculation can be bigger that the range. To solve this problem, I added a while condition so that, if that happens, the program does the calculation again until the result is smaller than the range. 

Finally, using the putMessage() function, I upload the random number into the third div using the appendChild() method. 