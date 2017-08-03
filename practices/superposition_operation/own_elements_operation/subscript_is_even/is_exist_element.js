'use strict';
var is_exist_element = function(collection,element){
          let result = [];
       
          for(var i=0;i<collection.length; i++){
                    if( i%2 === 0){
                              result.push(collection[i]);                             
                    }
          }
          
          if(result.includes(element)){
                    return true;
          }
          if(!result.includes(element)){
                    return false;
          }

}

module.exports = is_exist_element;
