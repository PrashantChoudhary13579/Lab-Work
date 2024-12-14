// learning loops in javascript 
// for(let i = 0 ; i <5 ;i++){
//     console.log("Hello World");
// }



// let x;
// for(x = 2; x<=4; x++)
// {
//     console.log("Value of x : " + x);   
// }



// let val = 1;
// while (val<=6) {
//     console.log("Value of val :" + val);
//     val++;
// }

// do {
//     console.log("Value of val : "+ val);
//     val++;
// } while (val<=6);

let day = 3;
let dayname;
switch (day) {
    case 1:
        dayName ="Monday";
        break;
    case 2:
        dayName ="Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName ="Thrusday";
        break;
    case 5:
        dayName ="Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    
    default:
        break;
}
console.log(dayName);