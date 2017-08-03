'use strict';
var single_element = function(collection){
      let array = choose(collection);
      return choosesingle(array);
}

function choosesingle(array){
      let result = [];
      
      for(var i=0; i<array.length; i++){
           inner:{    
               for(var j=0; j<array.length; j++){                     
                    if(i!=j && array[i] === array[j]){
                           result = result;
                           i++;
                           break inner;
                    }                    
               }              
               result.push(array[i]);
          }

      }
      
      return result;
}

function choose(collection){
     let result = [];
        
     for(var i=0;i<collection.length; i++){
         if( (i+1)%2 === 0){
               result.push(collection[i]);                              
         }
     }
          
     return result;        
}
module.exports = single_element;
