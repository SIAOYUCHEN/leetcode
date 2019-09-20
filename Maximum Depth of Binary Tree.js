var maxDepth = function(root) {
    var l_num=0,r_num=0;
    if(root == null)
        return 0;
    if(root.right == null && root.left == null)
        return 1;
    if(root.left != null)
    {
        l_num = 1+maxDepth(root.left);
    }
    if(root.right != null)
    {
        r_num = 1+maxDepth(root.right);
    }
    return l_num > r_num ? (l_num) : (r_num);
};
