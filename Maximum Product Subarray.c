int maxProduct(int* nums, int numsSize) {
    int max=nums[0];
    int lastmax=nums[0];
    int lastmin=nums[0];
    int curmax,curmin;
    int temp1;
    int temp2;
    if(numsSize==1) return nums[0];
    for(int i=1;i<numsSize;i++)
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
}
