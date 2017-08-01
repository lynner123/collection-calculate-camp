'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
  var con = collection_a;
  for(var i=0; i<collection_b.length; i++){
            while(!con.includes(collection_b[i])){
                    con.push(collection_b[i]);
            }
  }
  return con;
}

module.exports = get_union;

