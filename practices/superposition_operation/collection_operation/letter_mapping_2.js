'use strict';

function average_to_letter(collection) {

  let result = 0;
  let len = collection.length;
  
  for(let item of collection){
        result += item;
  }
  let aver = Math.ceil(result/len);
  
  return String.fromCharCode(aver+96);
}

module.exports = average_to_letter;

