var isSameTree = function(p, q) {    
    if (p == null && q == null) {
        return true;
    } else if (p == null && q != null) {
        return false;
    } else if (p != null && q == null) {
        return false;
    } else  {
        if (p.val == q.val){
            var lTree=isSameTree(p.left,q.left);
            var rTree=isSameTree(p.right,q.right);
            return (lTree && rTree);
        }
        else{
            return false;
        }
    }
};
