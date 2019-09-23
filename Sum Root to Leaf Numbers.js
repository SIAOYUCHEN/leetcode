var sumNumbers = function(root) {
    let total = 0, sum = 0;
    helper(root, sum);
    return total;
    
    function helper(node, sum) {
        if (!node) 
return;
        sum = sum*10 + node.val;
        
        if (!node.left && !node.right) {
            total += sum;
        }
        helper(node.left, sum);
        helper(node.right, sum);
    }
};
