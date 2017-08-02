'use strict';

function hybrid_operation_to_uneven(collection) {

  let result = 0;
  
  for(let item of collection){
      if(item%2 === 1){
            result += item*3+5;
      }       
  }
  
  return result;
}

module.exports = hybrid_operation_to_uneven;

