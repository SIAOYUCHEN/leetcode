int* twoSum(int* numbers, int numbersSize, int target, int* returnSize) {
    int *reval = (int*)malloc(sizeof(int)*2);
    *returnSize = 2;
    
    int left, right;
    left = 0; right = numbersSize-1;
    for(;;) {
        if(numbers[left] + numbers[right] > target)
            right--;
        else if(numbers[left] + numbers[right] < target)
            left++;
        else {
            reval[0] = left+1;
            reval[1] = right+1;
            return reval;
        }   
    } 
}
