'use strict';

function collect_min_number(collection) {
    let num = Math.min(...collection);
    
    return num;
}

module.exports = collect_min_number;

