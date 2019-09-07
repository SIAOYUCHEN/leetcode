int removeElement(int* nums, int numsSize, int val) {
    int m=0;
    for(int i=0; i<numsSize; i++)
    {
        if(nums[i] != val)
        {
            nums[m] = nums[i];
            m++;
        }
    }
    return m;
}
