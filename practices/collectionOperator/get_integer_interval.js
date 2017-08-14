'use strict';

function get_integer_interval(number_a, number_b) {
  if(number_a < number_b){
         return makeuparray(number_a,number_b);
  }else if(number_a > number_b){
         return  makeuparray(number_b,number_a).reverse();
  }
  return [number_a];
}

function makeuparray(number1,number2){
          let result = [];
          
          for(var i=number1; i<=number2; i++){
                result.push(i);     
          }
          
          return result;
}
module.exports = get_integer_interval;