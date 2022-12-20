# Instructions  

In this assignment, you will show your understanding of writing and calling a procedure with two parameters. You must also include a conditional statement, a list, and a loop. Show us all you have learned so far!

You can choose between 3 topics as the focus of your program
1. Dice Game
2. Bank Account 
3. Online Shopping Cart

  ## Steps to Complete the Assignment
  1. Pick one of the three topics
  2. Open the starter code in replit.  Follow the section below on what your program should include and read the comments in the code.
  3. When you have completed adding the code to your program, run it to test that it works correctly and then submit the assignment in replit
  4. In the student comments section, tell your teacher which topic you chose
  
  ## Your Program Should Include:
  1. Input
  2. List
  3. Procedure with Parameters
  4. Loop/Iteration
  5. Conditional statement/Selection

 ## Suggestions on ways to include the requirements by topic: 
These are merely suggestions and if you have your own idea on how to code a topic, and incorporate all the items that need to be included, that's fine too.
### Dice Game
Create a game where the program rolls a die and the user tries to guess what the number will be. Here are some ideas for incorporating the required elements: 
<ul><li>Loop/Iteration - create a loop to repeat any # of times</li>
  <ul><li>Input - Ask the user for their dice roll guess</li>
  <li>Call the procedure that rolls the dice.  Send your guess as a parameter.</li></ul>
 <li>Procedure with Parameters - create a procedure to roll the dice and record the random value picked.  Your parameter can be the guessed number the user makes.</li>
     <ul><li>List - add each number rolled to a list</li>
     <li>Conditional statement/Selection - keep score and add a point if the  user guesses the number rolled</li></ul></ul>

### Bank Account
Create a program that tracks deposits and withdrawals from an account.  Keep a running balance/total in account. Here are some ideas for incorporating the required elements: 
<ul><li>Loop/Iteration - create a loop to continue asking if they want to make a deposit, withdrawal, or are done.</li>
  <ul><li>Input - Are you making a deposit or withdrawal and for how much</li>
  <li>Call the procedure that keeps track of deposits and withdrawals.</li></ul>
 <li>Procedure with Parameters - create a procedure to add the amount to a deposit or withdrawal list. Your parameter can be the type of transaction and the amount.</li>
     <ul><li>Conditional statement/Selection - determines if it is a deposit or withdrawal and adds to the appropriate list</li>
       <li>List - add each amount to a deposit or withdrawal list</li>
</ul>
<li>When there is nothing else being entered, figure out how much is in the account by adding all the values in each list (this can be a loop too) and subtracting withdrawals from deposits.  </li></ul>

### Online Shopping Cart
Create a program that allows users to add items to a shopping cart.  Calculate the total with shipping. Here are some ideas for incorporating the required elements: 
<ul><li>Loop/Iteration - create a loop to continue asking the cost of what they are purchasing  Call the procedure that will track purchases.</li>
  <ul><li>Input - Item being purchased and item cost.</li>
  <li>Call the procedure that keeps track of purchases.</li></ul>
 <li>Procedure with Parameters - create a procedure to add the item names to one list and the cost to another. Your parameter would be the input of both.</li>
  <ul><li>List - add each cost or item to their respectbive list</li>
</ul>
<li>Calculate the total of all items in the cart</li>
<li>Conditional statement/Selection - check the total cart and add shipping based on the amount spent.  For example, if you spend over $50 you get free shipping.</li>
</ul>

## Reflection Questions:
These will be answered in another assignment

  ## Reference
  ```javascript
//concatenating strings and variables
console.log("This is a string " + variableName);
```
```javascript
//collecting input
var name = prompt("What is your name?");
```
```javascript
//collecting numeric (integer) input
var numInput = parseInt(prompt("Enter a whole number"));

//collecting numeric (floating point/decimal) input
var numInput = parseFloat(prompt("Enter a number with a decimal"));
```
```javascript
//assign the value of 0 to numeric variables initially
//that will establish they are numbers and not strings
var answer = 0;
var answer = (num1 + num2);
``` 
```javascript
//compound conditional statements
if ((age >= 18) && (age <= 20)){
  console.log("You are a young adult");
}
```
```javascript
//evaluating multiple conditions
if (grade >= 90){
  console.log("Grade = A");
} else if (grade >= 80){
  console.log("Grade = B");
} else {
  console.log("Not an A or B");
}
```
```javascript
//for loop repeats 5 times
for (var  i= 0;i < 5;i++){
  //displays the value of the counter variable
  console.log(i);
}
```
```javascript
//loop repeats while num is less than or equal to 5
var num = 1;
while (num <= 5) {
    console.log(num);
    num++;
}
```
```javascript
//initialize a list
var donutList = ["Frosted","Chocolate","Glazed","Powdered"];
```
```javascript
//determine the length of a list
var donutListLength = donutList.length;
```
```javascript
//changes an item in a list
donutList[2]= "Plain";
```
```javascript
//removes item from a list 
//parameters are (start index to remove, num of items to remove)
donutList.splice(2,1);
```
```javascript
//adds item to a list
//parameters are (index to add, ALWAYS 0, item being added)
donutList.splice(2,0,"Plain");
```
```javascript
//picks a random number from 0 to 10, including 0 and 10
Math.floor(Math.random( ) * 11); 

//picks a random number from 1 to 10, including 1 and 10
Math.floor(Math.random( ) * 10) + 1; 
```
```javascript
//creating a procedure/function
function doSomething(var1,var2) {
  //do something
}

//calling a procedure/functon
doSomething(var1,var2);
```