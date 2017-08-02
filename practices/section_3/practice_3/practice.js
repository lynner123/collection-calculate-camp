function create_updated_collection(collection_a, object_b) {
          let collectionC = summarize(collection_a);
          return subcount(collectionC,object_b);
 }
 
function subcount(collectionC,objectB){
          let result = [];
          
          for(let item of collectionC){
                    let key = item.key;
                    let count = item.count;
                    if(compare(objectB.value , item.key)){
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

function summarize(collectionA){
          let result = [];
          
          for(let item of collectionA){
                    let obj = finds(result,item);
                    if(obj){
                              obj.count++;
                    }else{
                              result.push({key: item, count: 1});
                    }
          }
          
          return result;
}
function finds(collection,ch){
          for(let item of collection){
                    if(item.key === ch){
                              return item;
                    }
          }
          
          return null;
}          

module.exports = create_updated_collection;
