'use strict';



//
function sum(a,b){
  return a+b;
}

function calculate(x,y,operationalFunction){
  console.log('The first vlaue is .. '+x);
  console.log('The second vlaue is .. '+y);
  console.log(operationalFunction(x,y));
}

calculate(5,11,sum);



// arrow functions
function sum(a,b){
  return a+b;
}

var sum = (a,b) => a+b;

sum(1,5);