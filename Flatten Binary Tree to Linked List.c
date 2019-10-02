void flatten(struct TreeNode* root) {
    while(root != NULL) {  
            if(root->left != NULL) {  
                struct TreeNode* ptr = root->left;  
                while(ptr->right != NULL) 
                    ptr = ptr->right;  
                ptr->right = root->right;  
                root->right = root->left;  
                root->left = NULL;  
            }  
            root = root->right;  
        }  
}
