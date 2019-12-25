
/////////////////////////////////////////////////////////////////////////////////////////
//   1) Write a function splitAndMerge
// Function accept 2 parameters:str and sp. str is a sentence. sp is a char as separator. First we need to divide the sentence into words(Use separator space); and then divide each word into characters(Use separator empty string); and then merge each characters with the specified sp; at last merge all the words(Use separator space) and return it.
// Example:
// splitAndMerge("My name is John"," ") should return "M y n a m e i s J o h n"
// splitAndMerge("Hello World!",",") should return "H,e,l,l,o W,o,r,l,d,!"

 function splitAndMerge (s,l) {
     var b = (s.split(' ').join(''));
     console.log(b)
     var n = (b.split('').join(l));
     return n;
 }

// console.log(splitAndMerge("My name is Obi Wan Kenobi "," "))



/////////////////////////////////////////////////////////////////////////////////////////
// 2) Write a function convert
// Convert a hash into an array. Nothing more, Nothing less.
// {name: 'Jeremy', age: 24, role: 'Software Engineer'}
// should be converted into
// [ // ["name", "Jeremy"], ["age", 24], ["role", "Software Engineer"] //   ]

var q = {
    name: 'Jeremy',
    age: 24,
    role: 'Software Engineer'
};

var arrResult = []
for(key in q) {
    var arr = [];
    arr.push(key);
    arr.push(q[key]);
    arrResult.push(arr);
}
//console.log(arrResult)




/////////////////////////////////////////////////////////////////////////////////////////
///////////////////////works with "-" or with "_" in the one string////////////////////////////////////////////////////
// 3) Complete the method/function so that it converts dash/underscore delimited words into camel casing.
// The first word within the output should be capitalized only if the original word was capitalized.
//     Example:
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"
/////////////////////////////////////////////////////////////////////////////////////////

var str = "the-stealth-warrior";
console.log (str);

for (i=0; i<str.length; i++) {
    var check = str[i];
    if (check == "-") {
        var re = str.split("-");
        markus();
        if (check == "-") break;
    }
    if (check == "_") {
        var re = str.split("_");
        markus();
        if (check == "_") break;
    }
}

function markus(){   // The Main Function
// console.log(re);  // For checking that all right
    var arraySize = re.length;
//console.log(re.length); // For checking that all right

    var arrayEmpty = [];
    var arraySum = [];

    for (i=0; i<arraySize; i++){
        var arrayEmpty = re[i].split("");
        arrayEmpty[0]=arrayEmpty[0].toUpperCase();
        var arraySum = arraySum.concat(arrayEmpty);
    }
    arraySum[0]=arraySum[0].toLowerCase();
//console.log(arraySum) // For checking that all right
    var result = arraySum.join("");
    console.log(result)}




//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////works with "-" and "_" in the one string/////////////////////////////////
// 3) Complete the method/function so that it converts dash/underscore delimited words into camel casing.
// The first word within the output should be capitalized only if the original word was capitalized.
//     Example:
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"
///////////////////////////////////////////////////////////////////////////////////////////////////

var str = "the-stealth-warrior";
console.log (str);

var re2 = str.split("");
function markusUpd() {
//console.log (re2);
    for (i=0; i<re2.length; i++) {

        var check = re2[i];
        if (check == "-"){
            re2[i+1]=re2[i+1].toUpperCase();
            re2.splice(i, 1);
        }
        if (check == "_"){
            re2[i+1]=re2[i+1].toUpperCase();
            re2.splice(i, 1);
        }
    } var result2 = re2.join("");
    console.log(result2);
}
markusUpd();


///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
// 4) Write a function that takes a sentence (string) and reverses each word in the sentence.
// Example:
// " A fun little challenge! " => " A nuf elttil !egnellahc "
///////////////////////////////////////////////////////////////////////////////////////////////////



var strFun = " A fun little challenge! ";

function funLittle() {
    String.prototype.reverse = function () {
        return this.split('').reverse().join('');
    };
    console.log(strFun)
    var strFunSplited = strFun.split(" ");
    var funReversed = [];

    var count = strFunSplited.length;

    for (i=0;i<count;i++){
        x = strFunSplited[i].reverse();
        funReversed = funReversed.concat(x);
    }
    var final = funReversed.join(" ");
    console.log(final);
}

funLittle()


// ///////////////////////////////////////////////////////////////////////////////////////////////////
// 5) Write a function stringExpansion
// Given a string that includes alphanumeric characters ('3a4B2d') return the expansion of that string:
// The numeric values represent the occurance of each letter preceding that numeric value.
// There should be no numeric characters in the final string. Empty strings should return an empty string.
//     The first occurance of a numeric value should be the number of times each character behind it is repeated,
//     until the next numeric value appears.
// stringExpansion('3D2a5d2f') === 'DDDaadddddff'
// If there are two consecutive numeric characters the first one is ignored.
// stringExpansion('3d332f2a') === 'dddffaa'
// If there are two consecutive alphabetic characters then the first character has no effect on the one after it.
// stringExpansion('abcde') === 'abcde'
// Your code should be able to work for both lower and capital case letters.
// ///////////////////////////////////////////////////////////////////////////////////////////////////

function stringExpansions(str) {
    var result = "";
    var charMultiplier = 1;
    for (var i = 1; i<str.length;i++) {
        if (isNumber(str.charAt(i))) {
            charMultiplier = str.charAt(i);
        } else {
            result = appendCharacter(result, str.charAt(i), charMultiplier);
            charMultiplier = 1;
        }
    }
    return result;
}

function isNumber(character) {
    return character >= "0" && character <= "9";
}

function appendCharacter(string, character, n) {
    var tmpString = string;
    for (var i = 0; i < n; i++) {
        tmpString = tmpString + character;
    }
    return tmpString;
}
var x = "Ok, i`m w8ing you here";
stringExpansions(x);

// ///////////////////////////////////////////////////////////////////////////////////////////////////
// 6) Write largest and smallest functions that returns the largest and smallest number passed like a argument.
// Example:
// largest(2, 0.1, -5, 100, 3) // 100
// smallest(2, 0.1, -5, 100, 3) // -5
// ///////////////////////////////////////////////////////////////////////////////////////////////////

function largest(...args){
    for (var i = 0; i < args.length; i++) {
        if (args[i] > args[i+1]) {
            args[i+1]=args[i];
        } else {
            var largest = (args[i]);
        }
    }
    return largest;
}
console.log (largest(5,4,3,1,2,0.5,12,7,5,10,-20,0.5,17))


function smallest(...args){
    for (var i = 0; i < args.length; i++) {
        if (args[i] < args[i+1]) {
            args[i+1]=args[i];
        } else {
            var smallest = (args[i]);
        }
    }
    return smallest;
}
console.log (smallest(5,4,3,1,2,0.5,12,7,5,10,-20,0.5,17))
// ///////////////////////////////////////////////////////////////////////////////////////////////////
// 8) Write function sum. Function expects arbitrary number of digit arguments and returns compound value of them.
// Note: function should use recursion
// Example:
// sum(1,3,5,7); //should return 16
// ///////////////////////////////////////////////////////////////////////////////////////////////////

function sum(...args) {
    var result = 0;
    for (var i = 0; i < args.length; i++){
        var result = result + args [i];
    }
    return result;
}

console.log (sum(1,2,3,5,4,7,8,1,2));

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // 9) Write function countDown. Function expects number and logs values one by one till zero with one second delay.
// //     Example:
// // countDown(3); // 3 2 1 0

function countDown(x) {
    for ( var i = x; i >= 0; i--) {
        (function(i) {
            setTimeout(function() {
                console.log(x-i);
            }, 50 * (i));
        })(i);
    }}
countDown(16);

// //countDown(5);
