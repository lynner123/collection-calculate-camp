function collect_same_elements(collection_a, object_b) {
  let result = [];
  
  for(let item of collection_a){
            if(object_b.value.includes(item.key)){
                      result.push(item.key);
            }
  }

  return result;
}

module.exports = collect_same_elements;
