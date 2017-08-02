'use strict';

function choose_divisible_integer(collection_a, collection_b) {

  let result = [];
  
  for(let item of collection_a){
            let bool = divide(collection_b,item);
            if(bool){
                      result.push(item);
            }
  }
  
  return result;
}
function divide(collection_b,num){
          for(let item of collection_b){
                    if( num%item === 0){
                              return true;
                    }
          }
          return false;
}

module.exports = choose_divisible_integer;
