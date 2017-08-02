'use strict';

function compute_average(collection) {
  let result = 0;
  for(var i=0 ;i<collection.length; i++){
            result += collection[i];
  }
  return result/collection.length;
}

module.exports = compute_average;

