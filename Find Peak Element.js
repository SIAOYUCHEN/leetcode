var findPeakElement = function(nums) {
    var len=nums.length;
    if(len == 1)
        return 0;
    for(var i=1;i<len-1;i++){
        if(nums[i]>nums[i+1]&&nums[i]>nums[i-1]){
            return i;
        }
    }
    if(nums[0]>nums[1]) return 0;
    if(nums[len-1]>nums[len-2]) return len-1;
};
