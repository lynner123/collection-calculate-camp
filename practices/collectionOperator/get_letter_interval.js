'use strict';

function get_letter_interval(number_a, number_b) {
  let result = [];
  
  if(number_a < number_b){
            result = makeuparray(number_a,number_b);            
  }else if(number_a > number_b){
            let array= makeuparray(number_b,number_a);
            result = array.reverse();            
  }else{
           result.push(String.fromCharCode(96+number_a));
  }
  
  return result;
}

function makeuparray(number1,number2){
          let result = [];
          
          for(var i=number1; i<=number2; i++){
                let letter = String.fromCharCode(96+i);
                result.push(letter);     
          }
          
          return result;
}

module.exports = get_letter_interval;
