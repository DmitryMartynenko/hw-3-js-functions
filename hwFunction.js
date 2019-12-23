
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
// 9) Write function countDown. Function expects number and logs values one by one till zero with one second delay.
//     Example:
// countDown(3); // 3 2 1 0

z = function countDown(x) {
    for(i=x;i>=0;i--) {
        console.log(i);
    }}
//countDown(5);



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


///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////