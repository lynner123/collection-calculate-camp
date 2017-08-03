'use strict';
var even_group_calculate_average = function(collection){
     let array = choose(collection);     
     let result = judge(array);
     return result;
}   

function judge(array){
     let result = [];     
     for(let item of array){
          if(item%2 === 0){
               result.push(item);
          }
     }
     
     if(result.length === 0){
               return [0];
     }else{
              let ave = average(result);
              return ave;
     }
}  

function average(array){
      let result = [];
      let ge=0,shi=0,bai=0;
      let cnt1=0,cnt2=0,cnt3=0;
      for(let item of array){
               if(item<10){
                         ge+=item;
                         cnt1++;
               }else if(item<100){
                         shi+=item;
                         cnt2++;
               }else{
                         bai+=item;
                         cnt3++;
               }
      }      
      if(cnt1){
                result.push(ge/cnt1);
      }
      if(cnt2){
                result.push(shi/cnt2);
      }
      if(cnt3){
                result.push(bai/cnt3);
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
module.exports = even_group_calculate_average;
