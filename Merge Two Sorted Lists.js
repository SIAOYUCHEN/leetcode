var mergeTwoLists = function(l1, l2) {
    var temp = new ListNode(0);
    var result = new ListNode(0);
    
    if(l1 == null && l2 == null)
    {
        return null;
    }
    else if(l1 == null && l2 != null)
    {
        return l2;
    }
    else if(l1 != null && l2 == null)
    {
        return l1;
    }
    
    if(l1.val <= l2.val)
    {
        temp = l1;
        l1 = l1.next;
    }
    else
    {
        temp = l2;
        l2 = l2.next;
    }
    
    result = temp;
    while(l1 != null && l2 != null)
    {
        if (l1.val<=l2.val) {
            temp.next = l1;
            l1 = l1.next;
        }
        else {
            temp.next = l2;
            l2 = l2.next;
        }  
        temp=temp.next;
    }
    if(l1) {
        temp.next = l1;
    }
    else if(l2){
        temp.next = l2;
    }
    
    return result;
};

