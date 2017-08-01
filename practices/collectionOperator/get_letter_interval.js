'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  var con =[];
  var asc_a = 96;
  if(number_a < number_b){
            for(var i=number_a; i<=number_b; i++){                      
                      con.push(String.fromCharCode(asc_a+i));
                      
            }            
  }else if(number_a > number_b){
            for(var i=number_a; i>=number_b; i--){
                      con.push(String.fromCharCode(asc_a+i));
            }            
  }else{
           con.push(String.fromCharCode(asc_a+number_a));
  }
  return con;
}

module.exports = get_letter_interval;
