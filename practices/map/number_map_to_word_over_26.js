'use strict';
var number_map_to_word_over_26 = function(collection){
   let result=[];
   
   for(let item of collection){
             let ch = numtochar(item);
             result.push(ch);
   }         
          
  return result;       
}

function numtochar(num){
          let ch;
          let numfirst = parseInt((num-1)/26);
          let numsecond = (num-1)%26;
          if(numfirst === 0){
                    ch = '';
          }else{
                    ch = String.fromCharCode(numfirst+96);
          }
          ch += String.fromCharCode(numsecond+97);
          
          return ch;
}

module.exports = number_map_to_word_over_26;