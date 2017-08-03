'use strict';
var even_asc_odd_desc = function(collection){
        
          let even = [];
          let odd = [];
          for(let item of collection){
              if(item%2 === 0){
                  even.push(item);      
              }else{
                  odd.push(item);  
              }
          }
         
          let result =  (even.sort(compare)).concat(odd.sort().reverse());
          
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


module.exports = even_asc_odd_desc;
