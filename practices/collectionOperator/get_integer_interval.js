'use strict';

function get_integer_interval(number_a, number_b) {
  let result = [];
  
  if(number_a < number_b){
            result = makeuparray(number_a,number_b);
  }else if(number_a > number_b){
            let array= makeuparray(number_b,number_a);
            result = array.reverse();
  }else{
            result.push(number_a);
  }
  
  return result;
}

function makeuparray(number1,number2){
          let result = [];
          
          for(var i=number1; i<=number2; i++){
                result.push(i);     
          }
          
          return result;
}
module.exports = get_integer_interval;