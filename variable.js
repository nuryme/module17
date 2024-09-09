//boolean type variable
var isRich = true;
console.log(isRich);
var notHonest = false;
console.log(notHonest);
console.log(typeof isRich);

/*
//Variable Name Naming
//can't use quotation
var 'quotationname' = "quotation";   //can't
//can't start with number but except the first character number can be used in anywhere in the name
var 8number = 89; //can't
var number8 = 88; //can
//name is case sensitive
var Sensitive = 88;
var sensitive = 898; // they all are different
var senSitive =88; 
// how to write a long name
var my current home address = "khilkhet"; //can't
var my_current_home_address = "khilkhet"; //can   //snake case
var myCurrentHomeAddress = "khilkhet"; //can     //Camel case
var MyCurrentHomeAddress = "khilkhet"; //can     //Pascal case
*/

// fundamentals of js numbers
var orangePrice = 100;
var bluePrice = "100";
console.log(typeof orangePrice, typeof bluePrice);
console.log(orangePrice+bluePrice);
bluePrice = parseInt(bluePrice);
console.log(typeof bluePrice);
console.log(orangePrice+bluePrice);
bluePrice = parseFloat(bluePrice);
console.log(typeof bluePrice);
var first = .1;
var second = .2;
var total = first + second;
console.log(total);
console.log(total.toFixed(2));

// Mathematical operation shorthand
var price = 20;
// price = price + 10;
price += 10;
console.log(price);