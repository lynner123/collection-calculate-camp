'use strict';

function median_to_letter(collection) {
   let result = 0;
   let len = collection.length;
   if(len%2 === 1){
             result = collection[(len-1)/2];
   }else{
             result = miden(collection , len)/2;
   }
   return numtochar(Math.ceil(result));
}
function miden(result , len){
     let mlen = len/2;
     return result[mlen-1] + result[mlen];
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

module.exports = median_to_letter;
