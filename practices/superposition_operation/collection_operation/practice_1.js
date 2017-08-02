'use strict';

function hybrid_operation(collection) {
  let result = 0;
  
  for(let item of collection){
        result += item*3+2;
  }
  
  return result;
}

module.exports = hybrid_operation;

