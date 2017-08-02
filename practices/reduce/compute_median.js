'use strict';

function compute_median(collection) {
   let len = collection.length;
   if(len%2 === 1){
             return collection[(len-1)/2];
   }else{
             return median(collection , len);
   }
}

function median(collection , len){
          let mid = miden(collection , len);
          if(len<5){                   
                    return mid/2;
          }else{
                    return (mid-2)/2;
          }
}
function miden(collection , len){
     let mlen = len/2;
     return collection[mlen-1] + collection[mlen];
}

module.exports = compute_median;


