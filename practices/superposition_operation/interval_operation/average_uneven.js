'use strict';

function average_uneven(collection) {

  let result = 0;
  let len= 0;
  
  for(let item of collection){
        if(item%2 === 1){
            result += item;
            len++;
      }
  }
  
  return result/len;
}

module.exports = average_uneven;
