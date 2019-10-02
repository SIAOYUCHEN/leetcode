while(root != null) {  
   if(root.left != null) {  
      var ptr = root.left
      while(ptr.right != null) 
        ptr = ptr.right;  
        ptr.right = root.right;  
        root.right = root.left;  
        root.left = null;  
      }  
      root = root.right;  
}
