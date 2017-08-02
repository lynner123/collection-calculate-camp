'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
  let result = collection_a;
  
  for(let item of collection_b){
            if(!result.includes(item)){
                      result.push(item);
            }
  }
  
  return result;
}

module.exports = get_union;

