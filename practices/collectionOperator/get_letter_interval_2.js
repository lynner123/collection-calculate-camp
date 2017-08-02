'use strict';

function get_letter_interval_2(number_a, number_b) {
  let result = [];
  
  if(number_a < number_b){
            result = makeuparray(number_a,number_b);            
  }else if(number_a > number_b){
            let array= makeuparray(number_b,number_a);
            result = array.reverse();            
  }else{
           result.push(printchar(number_a));
  }
  
  return result;
}

function makeuparray(number1,number2){
     let result = [];
          
     for(var i=number1; i<=number2; i++){
         let letter = printchar(i);
         result.push(letter);     
     }
          
     return result;
}

function printchar(number) {
     let letterfirst = parseInt((number-1)/26);
     let lettersecond = (number-1)%26+1;
     let ch = '';
     if(letterfirst === 0){
            ch = '';
     }else{
            ch = String.fromCharCode(letterfirst+96);   
     }
     ch += String.fromCharCode(lettersecond+96);   
   
     return ch;
 }

module.exports = get_letter_interval_2;

