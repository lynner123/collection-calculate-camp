'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  var con = [];
  for(var i=0; i<collection_b.length; i++){
            if(collection_a.includes(collection_b[i])){
                      con.push(collection_b[i]);
            }
  }
  return con;
}

module.exports = get_intersection;
