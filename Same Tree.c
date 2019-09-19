bool isSameTree(struct TreeNode* p, struct TreeNode* q) {
    if (p == NULL && q == NULL) {
        return true;
    } else if (p == NULL && q != NULL) {
        return false;
    } else if (p != NULL && q == NULL) {
        return false;
    } else  {
        if (p->val == q->val){
            bool lTree=isSameTree(p->left,q->left);
            bool rTree=isSameTree(p->right,q->right);
            return (lTree && rTree);
        }
        else{
            return false;
        }
    }
}
