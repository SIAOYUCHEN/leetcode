var reverse = function(x) {
    var y = Math.abs(x);
    var result = 0;
    while(y > 0){
        result = result * 10 + y % 10;
        y = parseInt(y / 10);
    }
    result = x < 0 ? -result : result;
    return result >= -Math.pow(2,31) && result <= Math.pow(2,31) - 1 ? result : 0;
};



