var findMin = function(nums) {
    if(nums.length==0)
        return ;
    if(nums.length==1)
        return nums[0];
    var i,j,k=0,l,r;
    for(i=1;i<nums.length;i++)
    {
        if(nums[i]<nums[i-1])
            return nums[i];
    }
    return nums[0];
};
