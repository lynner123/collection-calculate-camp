'use strict';

function amount_even(collection) {

  let result = 0;
  
  for(let item of collection){
        if(item%2 === 0){
            result += item;
      }
  }
  
  return result;
}

module.exports = amount_even;
