'use strict';

function double_to_one(collection) {

  let result = expend(collection);
  let array = delemore(result);  
  return array;
}

function delemore(array){
          let result = [];
          for(let item of array){
                    if(!result.includes(item)){
                              result.push(item);
                    }
          }
          return result;
}
function expend(collection){
  let result = [];
  for(let item of collection){
          result = result.concat(item);
  }
  return result;
}
module.exports = double_to_one;
