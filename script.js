// string 
var intro= "srinu .v";
console.log(typeof intro , intro);

// number
var a = 10;
console.log(typeof a, a);

// boolean
var conf = true;
console.log(typeof conf,conf);

// null
var object = null;
console.log(typeof object,object);

// undefined 
var prog = undefined;
console.log(typeof prog ,prog)

// symbol
var texture =Symbol();
console.log(typeof texture,texture)

// corceian
var Name = "sai";
var  a = 10;
var sum = Name+a;
console.log(typeof sum,sum);

// calculations
// add
var a = 20 ;
var b = 10;
var sum = a+b;
console.log( sum );

// sub
var a = 20;
var b = 10;
var sub = a-b;
console.log(sub);

// mul
var a = 20;
var b = 10;
var mul = a*b;
console.log(mul);

// division
var a = 20;
var b = 10;
var div = a/b;
console.log(div);


// conditional statements
 
//if condition
 var a = true;
 if (a){
    console.log("it's true statement");
 }

 //if, else condition
 var a = 20;
 var b = 10;
 if (a<b){
    console.log("true statement");
 }
else{
    console.log("false statement");
}
 
// if,else if,else

var a = 10;
var b = 20;
var c = 30;
if (c<b) {
    console.log("this is true");
}
else if (a+b) {
    console.log("sum is equal to a");
} 
else{
        console.log("this is false");
}

//  operations
 //  arithematic operations
 //addition (+)
 var a = 19;
 var b = 1;
 console.log(a+b);

//sub (-)
 var a = 19;
 var b = 5;
 console.log(a-b);

// multiplication(*)
 var a = 10;
 var b = 5;
 console.log(a*b);

 //division(/)
var a = 10;
var b = 2;
console.log(a/b);

//remainder of division (%)
var a = 5;
var b = 30;
console.log(a%b);

//increment (++)
// pre increment
var a = 10;
console.log(++a);

//post increment(++)
var a = 10;
console.log(a++);
console.log(a);

// decrement (--)
//pre decrement
var a = 10;
console.log(--a);

//post decrement
var a = 10;
console.log(a--);
console.log(a);

//comperison operator
// 1. logical operator 
// a. (&&)and operator
 var a = 10;
 var b = 5;
 console.log(a < 20 && b < 10);
//b.(||) or operator
   var a = 10;
   var b = 15;
   console.log(a < 15 || b < 5 );
//c.(!) not operator
var a = 10 ;
var b = 15 ;
console.log(!(a==b));  
 

// 2. relational operator
// <,>,<=,>=
 var a = 10;
 var b = 15;
 console.log(a<b);

 var a = 20;
 var b = 15;
 console.log(a>b);
 
 var a = 10;
 var b = 10;
 console.log(a<=b);
 
 var a = 10;
 var b = 9;
 console.log(a>=b);

 //3. equality operator
 // 1. lose equality (==) 
  var a = 5;
  var b = 20;
  console.log(a==b);

// 2. strict equality(===) 
   var a ="string";
   var b = 5;
   console.log(a===b);

//4. conditional operator
var score = 90;
    score > 80 ? 
    console.log("allowed to interview");
    console.log("not allowed to interwiew");