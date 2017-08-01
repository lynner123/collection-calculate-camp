'use strict';

function get_letter_interval_2(number_a, number_b) {
  var con =[];
  var asc_a = 96;
  if(number_a < number_b){
            for(var i=number_a; i<=number_b; i++){                      
                      con.push(printchar(i));                     
            }            
  }else if(number_a > number_b){
            for(var i=number_a; i>=number_b; i--){
                      con.push(printchar(i));
            }            
  }else{
           con.push(printchar(number_a));
  }
  return con;
} 

function printchar(number) {
     var cnt1 = parseInt((number-1)/26);
     var cnt2 = (number-1)%26+1;
     var ch1;
     var ch2;     
     if(cnt1 == 0){
            ch1='';
     }else{
            ch1=String.fromCharCode(cnt1+96);   
     }
     ch2=String.fromCharCode(cnt2+96);   
   
     return ch1+ch2;
 }

module.exports = get_letter_interval_2;

