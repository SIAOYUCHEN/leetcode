var rotate = function(nums, k) {
    for (var rounds = 0; rounds < k; rounds++) {
        var last = nums[0];
        for (var i = 0; i < nums.length - 1; i++) {
            var tmp = nums[i + 1];
            nums[i + 1] = last;
            last = tmp;
        }
        nums[0] = last;
    }
};

