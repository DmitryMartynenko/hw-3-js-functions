
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
