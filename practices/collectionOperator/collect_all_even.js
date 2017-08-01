'use strict';

function collect_all_even(collection) {
  //在这里写入代码
  var con = [];
  for(var i=0; i<collection.length; i++)
  {
            if(collection[i]%2 == 0){
                      con.push(collection[i]);
            }
  }
  
  return con;
}

module.exports = collect_all_even;
