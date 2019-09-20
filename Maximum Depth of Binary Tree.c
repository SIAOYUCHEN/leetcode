int maxDepth(struct TreeNode* root) {
    int l_num=0,r_num=0;
    if(root == NULL)
        return 0;
    if(root -> right == NULL && root -> left == NULL)
        return 1;
    if(root -> left != NULL)
    {
        l_num = 1+maxDepth(root -> left);
    }
    if(root -> right != NULL)
    {
        r_num = 1+maxDepth(root -> right);
    }
    return l_num > r_num ? (l_num) : (r_num);
}
