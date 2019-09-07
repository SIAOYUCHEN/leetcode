var removeElement = function(nums, val) {
    var temp = [];
    for(var i = 0; i<nums.length; i++)
    {
        if(nums[i] != val)
            temp.push(nums[i]);
    }
    return temp.length;
};

