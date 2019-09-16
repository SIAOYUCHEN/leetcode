var swapPairs = function(head) {
    if (head == null || head.next == null )
     return head;
    var p1 = new ListNode(0);
    var p2 = new ListNode(0);
    var result = new ListNode(0);
    var temp = new ListNode(0);
    
    p1 = head;
    p2 = head.next;
    result = p2;
    temp = null;
    
    while (p1 != null && p2 != null )
    {
        p1.next = p2.next;
        p2.next = p1;
        
        if (temp != null )
            temp.next = p2;
        temp = p1;
        if (p1.next != null && p1.next.next != null )
            {
                p1 = p1.next;
                p2 = p1.next;
            }
            else 
                break ;
    }
    return result;
};

