var reverseList = function(head) {
    var post = head;
    var pre = null;
    var cur = null;
    
    while(post != null)
    {
        pre = cur;
        cur = post;
        post = post.next;
        cur.next = pre; 
    }
    return cur;
};
