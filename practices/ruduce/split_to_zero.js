'use strict';

function spilt_to_zero(number, interval) {
  let result = [];
  let icnt = Math.ceil(number/interval);
  let subed = number;
  for(var i=0; i<=icnt; i++){
        result.push(subed);
        subed = parseFloat((subed-interval).toFixed(1));       
  }
 
  return result;
  
}

module.exports = spilt_to_zero;
