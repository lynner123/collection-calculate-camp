'use strict';

function compute_chain_median(collection) {
  let result = [];
  let array = collection.split("->");
  for(let item of array){
            result.push(parseInt(item),10);
  }
  
  let len = result.length;
   if(len%2 === 1){
             return result[(len-1)/2];
   }else{
             return miden(result , len)/2;
   }
}
function miden(result , len){
     let mlen = len/2;
     return result[mlen-1] + result[mlen];
}
module.exports = compute_chain_median;
