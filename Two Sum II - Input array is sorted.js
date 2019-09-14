var twoSum = function(numbers, target) {
    var result = [];
    for(var i = 0; i<numbers.length; i++)
    {
        for(var j = i+1; j<numbers.length; j++)
        {
            if((numbers[i] + numbers[j]) == target)
            {
                result.push(i+1)
                result.push(j+1)
                return result;
            }
        }
    }
};

