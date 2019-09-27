var removeElements = function(head, val) {
    while(head != null && head.val == val)
        head = head.next;
    
    if(head == null)
        return null;
    var post = head.next;
    var cur = head;
    
    while(post)
    {
        if(post.val != val)
        {
            cur.next = post;
            cur = post;
        }
        else
        {
            cur.next = null;
        }
        post = post.next;
    }
    return head;
};
