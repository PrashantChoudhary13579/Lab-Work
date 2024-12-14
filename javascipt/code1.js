// Q 4 . i ) factorial using while loop 
// Here is the javascript code written by Prashant Choudhary on 10-10-2024 
 /*
var m = prompt("Enter the number ");

let f = 1;
var n = m;
while (n != 0) {
    f = f*n;
    n--;
}
console.log("Factorial of " + m + " is "+ f);


// ii) vowels using switch case 
let vowels = prompt("Enter the alphabet");
switch (vowels) {
    case vowels = 'a':
        console.log(vowels + " is vowel");
        break;
   case vowels ='e':
        console.log(vowels + " is vowel");
        break;
    case vowels = 'i':
        console.log(vowels + " is vowel");
        break;
    case vowels ='o':
        console.log(vowels + " is vowel");
        break;
    case vowels ='u':
        console.log(vowels + " is vowel");
        break;
    default:
        console.log("It is consonant");
        break;
}


// fabonacci series
let t = prompt('Enter the place upto which you want the series') ;
var f0=0, f1 =1, fn ;
console.log(f0 );
console.log(f1 );
for(let i = 3; i <=t ; i++)
{
    fn = f0+f1;
    f0 = f1;
    f1 = fn;
    console.log(fn );
}
    */

// function related greatest common division / hcf 
var a = prompt ("Enter the 1st number");
var b = prompt ("Enter the 2nd number");
function hcf( b,  a)
{
    var c =b%a;
    if(c == 0)
    {
        console.log( a+ " is hcf");
    }
    else{
        return hcf(a,c);
    }
}
hcf(b,a);
/*
function click()
{
    var username = document.getElementById('username2').value;

var pass = document.getElementById('password2').value;

console.log(username);
console.log(pass);
}

*/