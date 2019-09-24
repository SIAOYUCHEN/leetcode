var hasCycle = function(head) {
    if(head == null || head.next == null){
        return false; 
    }
    var node = head;
    while(node != null ){
        if(node.flag){
            return true;
        }    
        node.flag = true;   
        node = node.next;
    }
    return false;
};
