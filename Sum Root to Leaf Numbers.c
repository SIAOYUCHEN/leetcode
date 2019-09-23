int sumNumbers(struct TreeNode* root) {
    return helper(root, 0);
}

int helper(struct TreeNode* root, int sum)
{
    if(root == NULL)
        return 0;
    if(root -> left == NULL && root -> right == NULL)
        return sum*10 + root -> val;
    return helper(root -> left,sum*10+root -> val) + helper(root -> right,sum*10+root -> val);
}
