'use strict';

function choose_common_elements(collection_a, collection_b) {

  let result = [];
  
  for(let item of collection_a){
            if(collection_b.includes(item)){
                      result.push(item);
            }
  }
  
  return result;
}

module.exports = choose_common_elements;
