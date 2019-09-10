var plusOne = function(digits) {
    var result = [];
    var n = digits.length -1 ;
    
    while(n >= 0)
    {
        if(digits[n] < 9)
        {
            digits[n]++;
            return digits;
        }
        else
        {
            digits[n] = 0;
            n--;
        }    
    }
    result[0] = 1;
    for(var i = 0; i<digits.length; i++)
    {
      result[i+1] = digits[i];      
    }
    return result;
};

