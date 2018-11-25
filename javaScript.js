//JavaScript is case sensitive!
// In HTML, JavaScript code must be inserted between <script> and </script> tags:
<script>
    var text="My First Javascript"
document.getElementById("demo").innerHTML = "text";
</script>

//java script can get place in body, head, and in external place;
//external linking:
<script src="myScript.js"></script>
// External scripts cannot contain <script> tags

// JavaScript can "display" data in different ways:
//1) innerhtml, 2)document.write(), 3)window.alert(), 4)console.log()
<script>
document.getElementById("demo").innerHTML = 5 + 6;
document.write(5 + 6);
window.alert(5 + 6);
console.log(5 + 6);
</script>
// Using document.write() after an HTML document is loaded,
// will delete all existing HTML!
// The document.write() method should only be used for testing.

//If you put a number in quotes, 
// the rest of the numbers will be treated as strings, and concatenated:
<script>
var x = 2 + 3 + "5";
</script>
// this will be "55"

//Special operators:
<script>
    var pow = a**b; {/*equals to pow= Math.pow(x,2) */}
    if (a===b)
        var c="equal value and equal type"
    if (a!==b)
        var c="not equal value or not equal type"
    typeof : Returns the type of a variable
    instanceof : Returns true if an object is an instance of an object type
</script>

//javascript variables can hold objects:
var x = {firstName:"John", lastName:"Doe"};    // Object
//variables are dynamic:
x=5;
//java script arrays (arrays are zero based):
var cars = ["Saab", "Volvo", "BMW"];
//java script objects:
var person = {
    firstName:"John",
    lastName:"Doe",
    age:50,
    eyeColor:"blue"
};

//typeof:
typeof 3.14                // Returns "number"
//undifined variable:
var car;                // Value is undefined, type is undefined
car = undefined;        // Value is undefined, type is undefined

//You can empty an object by setting it to null:
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
person = null;        // Now value is null, but type is still an object

// You can also empty an object by setting it to undefined:
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
person = undefined;   // Now both value and type is undefined

//**Undefined and null are equal in value but different in type!:
typeof undefined           // undefined
typeof null                // object
null === undefined         // false
null == undefined          // true

// The typeof operator returns "object" for arrays 
// because in JavaScript arrays are objects.
typeof {name:'John', age:34} // Returns "object"
typeof [1,2,3,4]             // Returns "object" (not "array", see note below)
typeof null                  // Returns "object"
typeof function myFunc(){}   // Returns "function"

//function declearation:
function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
}
document.getElementById("demo").innerHTML = toCelsius(77);  //result: 25
//Accessing a function without () will return the function definition instead of the function result:
document.getElementById("demo").innerHTML = toCelsius;      //result: function toCelsius(f) { return (5/9) * (f-32); }

// Objects:
var person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
        return this.firstName + " " + this.lastName;
    }
};
//accessing object properties (two ways):
//1:
objectName.propertyName;
//2:
objectName["propertyName"]

//event handling: HTML allows event handler attributes, 
//with JavaScript code, to be added to HTML elements:
//by id:
<button onclick="document.getElementById('demo').innerHTML = Date()">The time is?</button>
//by this:
<button onclick="this.innerHTML = Date()">The time is?</button>
//by function:
<button onclick="displayDate()">The time is?</button>
//common html events: onchange, onclick, onmousover , onmouseout, onkeydown, onload.

//string functions:like java
var txt = "new text";
txt.length;
//special characters:
// \b	Backspace
// \f	Form Feed
// \n	New Line
// \r	Carriage Return
// \t	Horizontal Tabulator
// \v	Vertical Tabulator
//x as a string and y as String Object:
var x = "John";             
var y = new String("John");
// (x == y) is true because x and y have equal values
// (x === y) is false because x and y have different types (string and object)
// There are 3 methods for extracting a part of a string:
//  slice(start, end)
//  substring(start, end)
//  substr(start, length)
// If a parameter is negative, the position is counted from the end of the string.
var str = "Apple, Banana, Kiwi";
var res = str.slice(-12, -6);
//      result: banana
// Note: Negative positions do not work in Internet Explorer 8 and earlier.
//replace: 
var n = str.replace("Microsoft", "W3Schools");
//replace case insensitive:
var n = str.replace(/MICROSOFT/i, "W3Schools");
// Note: regular expressions are written without quotes.
//replace all matches:
var n = str.replace(/Microsoft/g, "W3Schools");
var str = "       Hello World!        ";
alert(str.trim());  // removes whitespace from both sides of a string. (not support in ie8)
alert(str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ''));   // supportable in 1e8
str.charCodeAt(0);         // returns unicode of char
//note: property access like str[0] is read only. str[0] = "A" gives no error (but does not work!)

//Global javascript methods: 
//  Number()	    Returns a number, converted from its argument.
//  parseFloat()	Parses its argument and returns a floating point number
//  parseInt()	    Parses its argument and returns an integer

//Number() can also convert a date to a number:
Number(new Date("2017-09-30"));    // returns 1506729600000
//The Number() method above returns the number of milliseconds since 1.1.1970.

//Nan:
var x = 100 / "Apple";  // x will be NaN (Not a Number)

//array declearation:
var arr=[];
//is array:
Array.isArray(arr);
arr instanceof Array;

//array.forEach():
var fruits, text;
fruits = ["Banana", "Orange", "Apple", "Mango"];

text = "<ul>";
fruits.forEach(myFunction);
text += "</ul>";

function myFunction(value) {
    text += "<li>" + value + "</li>";
}
//adding array element:
fruits.push("Lemon"); 