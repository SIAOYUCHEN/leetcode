int findMin(int* nums, int numsSize){
    int i = 0;
    if(numsSize == 0)
        return;
    if(numsSize == 1)
        return nums[0];
    for(i = 1; i<numsSize;i++)
    {
        if(nums[i]<nums[i-1])
            return nums[i];
    }
    return nums[0];
}
