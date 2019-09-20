var sortedArrayToBST = function(nums) {
    return traveler(nums, 0, nums.length)
};

var traveler = function(temp, start, end)
{
    if(start >= end)
        return null
    else
    {
        var mid = Math.floor((start+end) / 2);
        var result = new TreeNode(temp[mid]);
        result.left = traveler(temp, start, mid)
        result.right = traveler(temp, mid+1, end)
        return result;
    }    
};
