var invertTree = function(root) {
    if(root == null)
        return null;
    var temp;
    temp = root.left;
    root.left = root.right;
    root.right = temp;
    invertTree(root.left);
    invertTree(root.right);
    return root;
};
