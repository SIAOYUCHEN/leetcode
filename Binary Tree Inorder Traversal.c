void recursive(struct TreeNode* parent, int* recursiveResult, int* recursiveSize){
    if(parent==NULL){
        return;
    }
    
    if(parent->left==NULL && parent->right==NULL){
        recursiveResult[*recursiveSize]=parent->val;
        (*recursiveSize)++;
        return;
    }
		
    if(parent->left!=NULL){
        recursive(parent->left, recursiveResult, recursiveSize);
    }
    
    recursiveResult[*recursiveSize]=parent->val;
    (*recursiveSize)++;
    
    if(parent->right!=NULL){
        recursive(parent->right, recursiveResult, recursiveSize);
    }
		
    return;
}
int* inorderTraversal(struct TreeNode* root, int* returnSize) {
    int* traversalResult=(int*)malloc(1000*sizeof(struct TreeNode));
    
    recursive(root, traversalResult, returnSize);
    return traversalResult;
}


