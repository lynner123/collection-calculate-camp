'use strict';

function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码
  var con =[];
  if(number_a < number_b){
            for(var i=number_a; i<=number_b; i++){
                      if(i%2 == 0){
                              con.push(i);  
                      }                     
            }            
  }else if(number_a > number_b){
            for(var i=number_a; i>=number_b; i--){
                       if(i%2 == 0){
                              con.push(i);  
                      } 
            }            
  }else{
          if(number_a%2 == 0){
                     con.push(number_a);  
          } 
  }
  return con;
}

module.exports = get_integer_interval_2;
