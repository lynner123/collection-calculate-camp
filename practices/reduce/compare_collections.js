'use strict';

function compare_collections(collection_a, collection_b) {
  if(collection_a.length!=collection_b.length){
            return false;
  } 
  
  for(var i=0; i<collection_a.length; i++){
            if(collection_b[i] != collection_a[i]){
                    return false;              
            }
  }
  return true;
}


module.exports = compare_collections;


