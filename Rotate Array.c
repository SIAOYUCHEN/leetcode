void rotate(int* nums, int numsSize, int k) {
    int tem;
    for(int j=0;j<k;j++)
    {
        tem=nums[numsSize-1];
        for(int i=numsSize-2;i>=0;i--)
            nums[i+1]=nums[i];
        nums[0]=tem;
    }
}
