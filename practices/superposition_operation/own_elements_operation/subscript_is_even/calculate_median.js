'use strict';
var calculate_median = function(collection){
          let result = [];
          
          for(var i=0;i<collection.length; i++){
                    if( (i+1)%2 === 0){
                              result.push(collection[i]);                             
                    }
          }
                    
          return median(result);
}

function median(result){
          let len =result.length;
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
module.exports = calculate_median;
