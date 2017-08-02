'use strict';

function find_first_even(collection) {
  for(let item of collection){
            if(item%2 === 0){
                      return item;
            }
  }
  return -1;
}

module.exports = find_first_even;

