'use strict';
function rank_by_two_large_one_small(collection){
     let array = collection.sort(compare);
     let result = generate(array);     
     return result;
}
function compare(a, b) {
    if (a < b ) {
       return -1;
    }
    if (a > b) {
       return 1;
    }
    return 0;
}
function generate(array){
    let result = [];
    let len = array.length;
    let num = Math.floor(len/3);
    for(var i=0; i<num; i++){
              let arr1 = [array[i*3+1],array[i*3+2],array[i*3]];
              result = result.concat(arr1);
    }
    for(var i=num*3; i<array.length; i++){
              result.push(array[i]);
    }
    
    return result;   
}

module.exports = rank_by_two_large_one_small;
