/*for (i=44; i < 67; i++){
    console.log(i);
}*/
/*console.log("hello Nadia".length);
console.log(42);
console.log(6.28);
console.log(true);
console.log("hello".toUpperCase());
console.log("NADIA".toLowerCase());
console.log(Math.floor(Math.random()*10));
console.log("aaaabbbaaaa".substr(4,3));
console.log("mr Blue has a blue house".search("blue"));
console.log("mr blue has a blue house".lastIndexOf("blue"));
console.log("   |   |   ");
console.log("   |   |   ");
console.log("   |   |   ");
console.log("-----------");
console.log("   |   |   ");
console.log("   |   |   ");
console.log("   |   |   ");
console.log("-----------");
console.log("   |   |   ");
console.log("   |   |   ");
console.log("   |   |   ");
console.log("mr blue has a blue house".substring(3,5));
/*String s1="mr blue has a blue house";
String replaceString=s1.replace("blue","red");
//replaces all occurrences of "blue" to "red"*

console.log("mr blue has a blue house".concat(" and a red car"));
console.log ("All around the world".toUpperCase().charAt(7))
let name = "Sam";
console.log(name);
name = "Ham";
console.log(name);
let age = 29;
console.log (age)
age +=3;
console.log(age);
age --;
console.log (age);
age ++;
console.log(age);
age ++;
console.log(age);
let favouriteDrink = "water";
console.log (`My favourite drink is ${favouriteDrink}`)
let firstName = "Nadia";
let currentAge = 21;
let favouriteColour = "Red";
console.log (`My name is ${firstName}.I am ${currentAge} old.My favourite colour is ${favouriteColour}.`);*/

/*
let space1 = "x";
let space2 = "x";
let space3 = "x";
let space4 = "x";
let space5 = "x";
let space6 = "0";
let space7 = "x";
let space8 = "x";
let space9 = "0";
console.log("   |   |   ");
console.log( `${space2}  | ${space1} | ${space3}  `);
console.log("   |   |   ");
console.log("-----------");
console.log("   |   |   ");
console.log( `${space2}  | ${space2} |   `);
console.log("   |   |   ");
console.log("-----------");
console.log("   |   |   ");
console.log( `${space1}  |   |   `);
console.log("   |   |   ");
if (space1 =='o' && space2 == 'o' && space3 == 'o')
{
    console.log ("o wins")
}
if (space1 =='x' && space2 == 'x' && space3 == 'x')
{
    console.log ("x wins")
};

/* IF.... ELSE IF... ELSE...*/

/*let age = 17;
let country = "UK";

if (age > 17 && country == "UK"){
    console.log("Yes I can serve you")
}
else {console.log ("You aren't old enough")};*/

/*Challenge 1*/
/* 
let password = "DogsandCats";
if (password.length < 8 ) {
    console.log ("Your password is too short")
}
else {console.log (`${password}`)};
/*Challenge 2*/
/*
let num = 15 ;
if ( num % 3 == 0 && num % 5 == 0) {
    console.log ("This number is divisible by 3 or 5")
}

else {console.log ("This number is not divisible by 3 or 5")
};
*/
/*Challenge 3*/
/* 
let nuk = 9;
if ( nuk % 3 == 0) {
    console.log ("Fizz")
}
if  ( nuk  % 5 == 0) {
    console.log ("Buzz")
};
if  ( nuk % 3 == 0 && nuk % 5 == 0) {
    console.log ("Fizz and Buzz")
}
else {console.log (`${nuk}`)};


/*Challenge 4*/
/*var nnumber = "1001";
var items = nnumber.split( "" );
var isPalindrome = items.join( "" ) === items.reverse().join( "" );
if(isPalindrome) {
    console.log("number is a palindrome");
}
else {
    console.log("number is not a palindrome");
} 
*/
/*Challenge 5*/
/*
let time = 10;
let placeOfWork = "office" ;
let townOfHome = "Novoros";
if (time == 7) 
{console.log  (`At ${time} I’m at home`)};
if (time == 9 )
{console.log (`At ${time} I’m commuting`)}
if (time == 10) 
{console.log  (`At ${time} I’m at work`)}
*/
/*Challenge 7*/
/*
let kod = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";
let kod1=kod.lastIndexOf ("o");
let kod2=kod.lastIndexOf ("i");
let kod3=kod.lastIndexOf ("u");
let kod4=kod.lastIndexOf ("e");
let kod5=kod.lastIndexOf ("a");
console.log(Math.max(kod1, kod2, kod3, kod4,kod5)); */

/*Challenge 8 */
//let word  = " ";
//word.substr(last,1)

//Functions
/*
const coffeeOrder = (size, type) => {
    console.log(`Please make ${size} ${type}`)
};
coffeeOrder("large","latte");
coffeeOrder("small","latte");


const addUp = (num1, num2) => {
    return num1 + num2
}
let answer = addUp (4,5)
console.log (addUp(answer,5); */

/*const factorial (n) => {
    if ((n === 0) || (n === 1)) { 
        return 1;
    } else {
        return (n * factorial(n-1));
    } 
}
    console.log(factorial(33)); */
/*
const boardG (space1,space2,space3,space4,space5,space6,space7,space8,space9) => {
    return (space1,space2, space3, space4, space5, space6, space7, space8, space9)
};
 console.log (boardG (x,o,x,o,x,o,x,o,x));
*/
// ATM challenge
/*let JoeValidPin = 2019;
let JoeBalance = 50;

const checkPin = (enteredPin, validPin) =>{
if (enteredPin ===validPin){
    return true
    }
else {return false
    }
};
const avlbFunds = (withdrAmount, balance) =>{
if (withdrAmount <= balance){
    return true
    }
else {return false
    }
};

const JoeGetCash = (JoeEnteredPin, JoeWithdrAmount) =>{
if ((checkPin (JoeEnteredPin,JoeValidPin)) && 
    (avlbFunds (JoeWithdrAmount, JoeBalance)) == true){

console.log(`Joe here is your cash £${JoeWithdrAmount}`)
    }
else 
    console.log (`Insufficient funds or wrong pin!`)
}

JoeGetCash (2019,40);*/


/*const multiply = (num1,num2) =>{
    return num1 * num2
}
console.log (multiply (4,5));*/
/*
let coffeeOrder = [`Sam - Hot Chocolate`,`Stuart - Cortado`, `Dan - Latte`];
console.log (coffeeOrder);
//to add an item to the list, add Andy -Tea
coffeeOrder.push ("Andy - Tea")
console.log (coffeeOrder);
// remove the last item, remove Andy -Tea

coffeeOrder.pop ()
console.log (coffeeOrder);

//The shift() method removes the first element and returns that removed element.
coffeeOrder.shift();
console.log (coffeeOrder);
//unshift()
//The unshift() method adds new items to the beginning & returns the new length.
coffeeOrder.unshift();
console.log (coffeeOrder);
//slice()

//The slice() method returns a shallow copy of a portion of an array 
//into a new array object selected from begin to end 
//(end not included). The original array will not be modified.

/*let animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log (animals);
console.log(animals.slice(2));
console.log(animals.slice(2, 4));
console.log(animals.slice(1, 5));*/

//splice()
//changes the contents of an array by removing or replacing existing 
//elements and/or adding new elements in place.

/*let months = ['Jan', 'March', 'April', 'June'];
console.log (months);
months.splice(1, 0, 'Feb');
// inserts at 1st index position
console.log(months);
// expected output: Array ['Jan', 'Feb', 'March', 'April', 'June']
months.splice(4, 1, 'May');
// replaces 1 element at 4th index
console.log(months);
// expected output: Array ['Jan', 'Feb', 'March', 'April', 'May']

/*let favSongs = [`songName1`,`songName2`, `songName3`];
console.log (favSongs[2]);
favSongs[1] = [`songName1`,`songName2.1`, `songName3`];
console.log (favSongs.length);*/
/*

const numberToString = (Number) => {
    return Number.toString();
}
console.log ((numberToString (1111)));

const increaseNumber = (Number1) => {
    return (Number1 ++);
}
console.log ((increaseNumber(5) ));

const decreaseNumber = (Number2) => {
    return (Number2 -1)  ;
}
console.log ((decreaseNumber(8) ));
*/
/*
const SumNumbers = (x, y) => {
    return (x + y)  ;
}
console.log ((SumNumbers(1,3) ));

const SubstrNumbers = (x, y) => {
    return (x - y)  ;
}
console.log ((SubstrNumbers(13,3) ));

const multiplyNumbers = (x, y) => {
    return (x * y)  ;
}
console.log ((multiplyNumbers(3,5) ));

const divideNumbers = (x, y) => {
    return (x / y)  ;
}
console.log ((divideNumbers(30,5) ));

const calculat = (operation, x, y) =>{
    if(operation==SumNumbers){
    console.log(`${x} + ${y} = ${operation(x,y)}`)
    return operation(x,y)
    }
    else if(operation==SubstrNumbers){
    console.log(`${x} - ${y} = ${operation(x,y)}`)
    return operation(x,y)
    }
    else if(operation==multiplyNumbers){
    console.log(`${x} * ${y} = ${operation(x,y)}`)
    return operation(x,y)
    }
    else if(operation==divideNumbers){
    console.log(`${x} / ${y} = ${operation(x,y)}`)
    return operation(x,y)
    }
    else {
    console.log(`Input Error`)
    }
};
calculat (multiplyNumbers,3,5);
calculat (SumNumbers,33,5);

/*
const squareNumber = (x) => {
    return (x * x )  ;
}
console.log ((squareNumber(5) ));

/*const calculate = (operation, x, y) => {
    return "x operation y";
}
console.log ((calculate("add",5,8) ));

const  isGreaterThan = (a, b) => {
if (a>b){
    return true
    }
else {return false
    }
}
console.log ((`${isGreaterThan (4,5)}, a is bigger than b`));

const  isLessThan = (a, b) => {
    if (a<b){
        return true
        }
    else {return false
        }
    }
console.log (`${isLessThan (1,5)}, a is smaller than b`);

const  areEqual = (a, b) => {
    if (a===b){
        return true
        }
        else {return false
        }
}
console.log (`${areEqual (5,5)}, a and b are equal`);
//
const  minimum = (a, b) => {
    return Math.min (a,b)
}
console.log (`${minimum (15,4)} is the smallest number`);
//
const  maximum = (a, b) => {
    return Math.max (a,b)
}
console.log (`${maximum (15,4)}, the lagest number`);
//
const  isEven = (a) => {
    if ( a % 2 == 0) 
        return true;
}
console.log (`${isEven (4)}, the number is Even `);

//
const  isOdd = (a) => {
    if ( a % 2 != 0) {
        return true;
    }
    else {return false
    }
};
console.log (`${isOdd (4)}, the number is odd `);*/
//
//*const letterGrade = (score, total) =>{
   /* if (total >=90 && total <=100){
        return "A"
    }
    "A": 90-100% "B": 80-89% "C": 70-79% "D": 60-69% "F": 0-59% 
    const PrintNumber = (Number1) => {
        return (Number1 ++);
    }
    if 
    console.log ((PrintNumber(5) ))*/
//iteration in coding
    /*for (i=0; i<10; i++){
        console.log(i)
    };*/

/*let favouriteNames = [`Anne`,'Bob','Ted','Bill'];
favouriteNames.push (`Tom`,`Matt`);
console.log (favouriteNames);

for (NameIndex = 0; NameIndex < favouriteNames.length; NameIndex ++) {
    console.log (favouriteNames[NameIndex])
};*/


/*
//Problem1 
let sum = 0;
for (num =1; num < 1000; num ++){
if (num % 3 === 0 || num % 5 === 0){
    sum = sum + num;
    }
}
console.log(`the sum is ${sum}`);
*/
/*
//Problem 6
const WordCount =(str)=> { 
    return str.split(" ").length;

}
//console.log(WordCount("This is a paragraph from Harry Potter "));
console.log(WordCount("Non-magic people (more commonly known as Muggles) were particularly afraid of magic in medieval times, but not very good at recognizing it. On the rare occasion that they did catch areal witch or wizard, burning had no effect whatsoever. The witch or wizard would perform a basic Flame Freezing Charm and then pretend to shriek with pain while enjoying a gentle, tickling sensation. Indeed, Wendelin the Weird enjoyed being burned so muchthat she allowed herself to be caught no less than forty seven times in various disguises."));
*/
/*
//Problem 5

const check = (nnumber) => {
    let textnumber = nnumber.toString();
    let items = textnumber.split("" );
    let isPalindrome = items.join("" ) === items.reverse().join("" );

    return isPalindrome;
}
    for (i=90283743503594; i > 0; i--){
    //for (i=9000; i > 0; i--){
    if (check(i) ==true){
        console.log (i);
            break;
    }
    }
*/
// Problem 2
/*
let str = "Pjrfndklhgfndjkjlkgperfijfhidknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhiejkdsoiufghedjwsh";
let firstPos = str.indexOf("hi");
let lastPos = str.lastIndexOf("hi");
console.log (`${firstPos} and ${lastPos}`);
*/
// Problem 3
/*
let givenText = "Pjrfndklhgfndjkjlkgperfijfhidknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhiejkdsoiufghedjwsh";
let newString = "";
for (i = 0; i < givenText.length; i ++){
    newString = newString + " ";
    newString =newString.concat(givenText.charAt(i));  
};
console.log(newString);  
*/
//Problem 4
/*
let givenText1 = "Pjrfndklhgfndhihi";
//let givenText1 = "Pjrfndklhgfndjkjlkgperfijfhidknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhiejkdsoiufghedjwsh";
let countOfHi = 0;
for (i = 0; i < givenText1.length; i ++){
    if (givenText1.substr(i,2) == 'hi') {
        countOfHi = countOfHi + 1;
    }
}  
console.log(countOfHi);

*/

/*
const orderDrink = (size, drinkType) => {

console.log (`please make ${size} ${drinkType}`)

};

orderDrink ("large", "latte");

orderDrink ("small", "tea");
*/

/*

let JoeValidPin = 2019;

let JoeBalance = 50;

const checkPin = (enteredPin, validPin) =>{

    if (enteredPin === validPin){
    return true
    }
    else {return false
    }
};

const avlbFunds = (withdrAmount, balance) =>{
    if (withdrAmount <= balance){
    return true
    }
    else {return false
    }
};

const JoeGetCash = (JoeEnteredPin, JoeWithdrAmount) =>{

if ((checkPin (JoeEnteredPin,JoeValidPin)) && (avlbFunds (JoeWithdrAmount, JoeBalance)) == true){

console.log(`Joe here is your cash £${JoeWithdrAmount}`)

}

else console.log (`Insufficient funds or wrong pin!`)

}

JoeGetCash (2019,40); */



//Challenge 8

/*let word = "andre";

console.log (word)

let lastLtr=word.charAt(word.lenght-1);

let firstLtr = word.substr(0,1);



console.log(`${lastLtr}`);

console.log(`${firstLtr}`);



/*if (word.charAt(word.length-1) === word.substring(0,1)){

return true;

};

else {(return false)}*/

//problem 1

/*let sum = 0;

for (num = 1; num < 1000; num ++) {

if (num % 3 === 0 || num % 5 === 0){

sum = sum + num;

}

}

console.log(sum);
*/

/*
const letterGrade = (score, total) =>{
let mark=100*score/total;
if (mark >=90 && mark <=100){
grade = "A";
}
if (mark >= 80 && mark < 90) {
grade = "B";
}
if (mark >= 70 && mark < 80) {
grade = "C";
}
if (mark >= 60 && mark < 70) {
grade = "D";
}
if (mark < 60) {
grade = "F";
}
console.log(`Your grade is "${grade}"`);
}
letterGrade(50,50);*/

/*
// Problem 4
let str = "jrfndklhgfndjkjlkgperfijfhidknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhiejkdsoiufghedjwsh";
let count = 0 ;
    for (i=0; i<str.length; i++){
        if (str.startsWith(`hi`,i)==true) {
        count = count + 1 ;
        console.log (`"hi" at i=${i}`)
        }
    }
console.log (`"hi" appears ${count} times`)
*/

/*
// Problem 3
let newStr = " ";
let str = "jrfndklhgfndjkjlkgperfijfhidknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhiejkdsoiufghedjwsh";
    for (i=0; i<str.length; i++){
        newStr = newStr.concat (" ");
        newStr = newStr.concat (str.charAt(i));
        //console.log (str.charAt(i));
    }
    console.log (`${newStr}`);
*/ 
//Problem 1 
/*
let sum = 0;
function multiplesOf3and5(number)
{
for(var i = 1; i < number; i++){
if((i % 3 === 0 )||(i % 5 === 0))
{
sum=sum+i
let arrmul=[i]
console.log(arrmul)
}
}
console.log(sum)
}
*/
//Problem 6
/*
const WordCount =(str)=> { 

return str.split(" ").length;

}

//console.log(WordCount("This is a paragraph from Harry Potter "));

console.log(WordCount("Non-magic people (more commonly known as Muggles) were particularly afraid of magic in medieval times, but not very good at recognizing it. On the rare occasion that they did catch a
 real witch or wizard, burning had no effect whatsoever. The witch or wizard would perform a basic Flame Freezing Charm and then pretend to shriek with pain while enjoying a gentle, tickling sensation. Indeed, Wendelin the Weird enjoyed being burned so much
 that she allowed herself to be caught no less than forty seven times in various disguises."));

*/

/*
//Problem 5

const check = (nnumber) => {
    let textnumber = nnumber.toString();
    let items = textnumber.split( "" );
    let isPalindrome = items.join( "" ) === items.reverse().join( "" );
    return isPalindrome;

}
    for (i=90283743503594; i > 0; i--){
    //for (i=9000; i > 0; i--){
    if (check(i) == true){
    console.log (i);
    break;
    }

}
*/

/*
//Problem 7 Fibonacci - what is the index of first sequence of 50 digits
    let fibA=1;
    let fibB=1;
    let fib=0;
    let N = 50;

for (i = 3; ; i++){ 
    fib = fibA+fibB;
    fibA=fibB;
    fibB=fib;
if (fib >= Math.pow(10,(N-1))) {
    console.log (i);
    console.log (fib); 
    break;
    }
}
*/

/*
//Problem 7 doesn't work from n = 23
    let fibA=1;
    let fibB=1;
    let n = 23; // number of digits
    for (i = 3; ; i++){
        fib = fibA+fibB;
        fibstring=fib.toString();
        //console.log (fibstring.length);
        fibA=fibB;
        fibB=fib;
        if (fibstring.length >= n) {
        console.log (i); // 
        console.log (fib); 
        break;
        }
    }
*/

/*
//Problem 8// 
//Smallest number evenly divisible by all num 1-20

const checkDiv = (number,maxDiv)   =>{
    let answer = true;
    for (d=2; d <= maxDiv; d++){
        if (number % d !== 0) {
        answer=false;
        break;
        }
    }
    return answer;
}

for (i=1; ;i++){
    if (checkDiv(i,20) ==true) {
    console.log(i);
    break;
    }
}
*/
/*
//Problem 9

//let numchar = "19082 "; // declared given number as a string
let numchar = "371072875339021027987979982208375902465101357402504637693767749000971264812489697007805041701826053874324986199524741059474233309513058123726617309629919422133635741615725224305633018110724061549082502306758820753934617117198031042104751377806324667689261670696623633820136378418383684177343617267572811287981284997940806548193159262169127588983273844274228917432520321923589422876796487670272189318474514457360013064390911672168568445887116031532767038648610584302543993961982891759366568675793495162176457141856560629502157223196586755079324193331"
let sumnum = 0;
let onenum=0;

    for (i=0;i < numchar.length; i++){
        onenum = +numchar.charAt(i) //convert each char to the digit
        sumnum = sumnum + onenum;
    }
    console.log(sumnum);
*/

//Problem 10 Fibonacci - sum of even valued terms if fib < 4000000
/*
let fibA = 1;
let fibB = 2;
let fib = 0;
let sumi = 0;
    for (i = 3; fib < 240; i++){ 
    fib = fibA+fibB;
    fibA=fibB;
    fibB=fib;
    if (i % 2 ===0) {
    sumi = sumi + i;
    }
}
console.log (sumi);
*/
//Problem 11

let originalText = " Non-magic people (more known as Muggles) were particularly afraid of magic in medieval times, but not very good at recognizing it. On the rare occasion that they did catch areal witch or wizard, burning had no effect whatsoever. The witch or wizard would perform a basic Flame Freezing Charm and then pretend to shriek with pain while enjoying a gentle, tickling sensation. Indeed, Wendelin the Weird enjoyed being burned so muchthat she allowed herself to be caught no less than forty seven times in various disguises."
//create an array 
let ar = originalText.split(" ");
console.log (ar);

//remove punctuation 
let noPunct = originalText.match(/[^_\W]+/g).join(' ');
console.log (noPunct);

//the longest word
let arNoPunctuation = noPunct.split(" "); //create an array from noPunct string
console.log(arNoPunctuation.sort((a,b)=>b.length-a.length)[0])
//console.log(noPunct.sort((a,b)=>b.length-a.length)[0])

// the index of first "witch"
let firstWitchPosition = originalText.indexOf("witch")
console.log(firstWitchPosition);







// OBJECTS // 4 April
/*
let person = {

    name: "Nadia",
    age: 44,
    likesSun: true,
    favouriteDrinks:["Wine", "Juice", "Water"]
};
console.log(person.name)
console.log(person['name']) //more flexible to use

person['favFood'] = ['carrots', 'soup','veg'];//add to an object new key favFood
console.log(person)
//add to an object new key favSongs
person['favSongs'] = ['love', 'hope','joy'];
console.log(person)

//Functions within Objects
let person1 = {

    name: "Bob",
    age: 21,
    favouriteDrinks:["Wine", "Juice", "Water"],
    mood:"bad",
    greeting (){
        if (this.mood == "good"){
            return "hi, nice to see you!"
        }
        else {
        return "hi, now go away!"
        }
    },
    sayHi (){
        return `hello, my name is ${this.name}`
    }
}
console.log(person1.greeting())
console.log(person1.sayHi())

let rabbit = {
    name: "Sherlock",
    colour: "black",
    whiteears: "uppy",
    bunHop (){
        return `Sherlock is hopping!`
    },
    bunChew (){
        return `Sherlock is chewing!`
    }
}
console.log(rabbit.bunHop())
console.log(rabbit.bunChew())*/
