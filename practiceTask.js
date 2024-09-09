/*
// practice task 1
var taka = 1000;
var appleOrange = 700;
console.log(taka-appleOrange);

// practice task 2
var mt = 75.25;
var bio = 65;
var chem = 35.45;
var phy = 99.50;
var bang = 80;
var average =( mt + bio + chem + phy + bang) /5
console.log(average.toFixed(2));

// practice task 3
var remainder = 119;
console.log(remainder%5);

// practice task 4
var a = isNaN("11");
console.log(a);
var b = isNaN("2-10");
console.log(b);     */

//----------------------------    string practice task ----------------------------
//practice task 1
let letterA = "Count how mAny times a string has the letter a"
console.log(letterA.split("a").length-1);
//practice task 2
let letterCount = 'Count how mAny times a string has the letter a or A'
console.log(letterCount.split(new RegExp('a', 'gi')).length-1)
//practice task 3
const vowelcheck = 'Check whether a string contains all the vowels a, e, i, o, u'
function containsVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    str = str.toLowerCase();
    return vowels.every(vowels => str.includes(vowels));
}
console.log(containsVowels(vowelcheck));
//practice task 4
const replace = 'If a given string has either x, replace x by y, if the given string has X, replace it by Y'
console.log(replace.replace(/x/g, 'y'));
console.log(replace.replace(/X/g, 'Y'));
 //practice task 5
 const capitalize = 'Capitalize Every first Letter of each word in a String'
function capitalizeFirst(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
}
console.log(capitalizeFirst(capitalize))