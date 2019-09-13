var maxProduct = function(nums) {
    var max=nums[0];
    var lastmax=nums[0];
    var lastmin=nums[0];
    var curmax,curmin;
    var temp1;
    var temp2;
    if(nums.length==1) return nums[0];
    for(var i=1;i<nums.length;i++)
    {
        temp1=lastmax*nums[i];
        temp2=lastmin*nums[i];
        curmax=temp1>temp2?temp1:temp2;
        curmax=curmax>nums[i]?curmax:nums[i];
        curmin=temp1>temp2?temp2:temp1;
        curmin=curmin>nums[i]?nums[i]:curmin;
        max=max>curmax?max:curmax;
        lastmax=curmax;
        lastmin=curmin;
    }
    return max;
};

