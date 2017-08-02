'use strict';

function calculate_elements_sum(collection) {
  let result = 0;
  for(var i=0 ;i<collection.length; i++){
            result += collection[i];
  }
  return result;
}

module.exports = calculate_elements_sum;

