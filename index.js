/*
let country='India';
let continet='Asia';
let Population= 150 
console.log(country);
console.log(continet);
console.log(Population + ' crores');
*/

// Code 2

/*
let javascriptIsFun=true; //we can store boolian in variable
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Vaibhav');

javascriptIsFun='Yes';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

console.log(typeof null); //Bug in typeof 

*/

// let age=23;
// age=24;          //Mutated the variable

/*
var now=2023
const ageVaibhav= now-2004;
const ageKanishka=now-2008;
console.log(ageVaibhav, ageKanishka);

console.log(ageVaibhav*2, ageVaibhav/10, 2**3)  // 2**3 means 2 to the power 3

/*
// coding challenge
let markMass=78;
let markheight=1.69;
let johnMass=92;
let johnHeight=1.95;
let markBMI=markMass/(markheight*markheight);
let johnBMI=johnMass/(johnHeight*johnHeight);
markHeigherBMI = markBMI>johnBMI
console.log("BMI of Mark is "+markBMI , "BMI of John is "+johnBMI ,markHeigherBMI);


//string and Template Literals....
const firstName='Vaibhav';
const job='Developer';
const birthYear=2004
const year=2023 // year with var is not woring in jonesNew as no age is comming.

const jones ="I'm "+ firstName +',a '+job
console.log(jones)

const jonesNew=`I'm ${firstName} ,a ${year - birthYear}  year old ${job}`; //here we have used back ticks instead of inverted comma and here we have written variable in different format

console.log(`hi my 
name is 
vaibhav`) //Multiline string by using Backticks....



const age= 15;
const isOldEnough = age>=18;

if(isOldEnough){
    console.log("Vaibhav can apply for driving Lisance but pehle chalani seekh le!!")
}
else{
    const yearsLeft=18-age;
    console.log(`Vaibhav is too younf, wait another ${yearsLeft} years :)`);
}

const birthYear=2004;

let century;
if(birthYear <= 2000){
    century=20;
}else{
    century=21;
}
console.log(century);




const inputYear='2004'; //It is in the form of string
console.log(inputYear + 18); //It will not add these two bcz one is in the form of string and other is in the form of number (output will be 200418)
console.log(Number(inputYear) + 18); //this will return string into number

console.log(Number('jonas')); // output NaN, Now what is NaN ?
console.log(typeof NaN); //output Number, NaN is number but not a number.

console.log(String(23),23); //Output -- string is in white; but the number is in blue format

console.log('I am ' + 23 + ' years old') //integer 23 got converted into string
console.log('I am ' + String(23) + ' years old')
console.log('23' - '10' - 3) // when we use - string gets converted into integer
console.log('23' + 10 - 3) //when we use + string remains string int with + gets converted into string (output--> 2307)
console.log('23' + 10 ) //get converted into string (Output-->2310)
console.log('10'-'3') // string gets converted into integer ( Output--> 7 )
console.log('23' * '2') //output will be integer not string (Output--> 46)
console.log('23' / '2') //output will be integer not string(Output-> 11.5)
console.log(23 / 2) //Integer as output;

let n = '1' + 1 // 11
n=n-1
console.log(n)
console.log('10'-'4'-'3'-3+'5') // output will be a string 05
console.log('10'-'4'-'3'-2+'5') // output will be a integer 15





// 5 falsy values: 0, '' , undefined, null , NaN,,,,, everything elseis truthy value

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));
const money =0; // 0 is a falasy value here.
if(money){
    console.log("Don't spend it all ;");
} else{
    console.log('you should get a job!');
}

let height;
if (height){
    console,log('YAY! height is defined');

}else{
    console.log("Height is UNDEFINED")
}


const age =18;
if(age==18){
    console.log("You just became an adult :D ") //== is the loose equality operator that does type coversion i.e. '18' == 18
} //=== do not do type conversion.

const favourite = prompt("what is your favourite number");
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23){
    console.log('cool! 23 is an amazing number')
}
*/

