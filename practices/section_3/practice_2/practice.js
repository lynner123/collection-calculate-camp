function create_updated_collection(collection_a, object_b) {
          let result = [];
          
          for(let item of collection_a){
                    let key = item.key;
                    let count = item.count;
                    if(compare(object_b.value , item.key)){
                              count -= parseInt(count/3);
                    }
                    result.push({key: key , count: count});
          }
          return result;
}

function compare(array , ch){
          for(let item of array){
                    if(item === ch){
                              return true;
                    }
          }
          return false;
}

module.exports = create_updated_collection;
