struct ListNode* swapPairs(struct ListNode* head) {
    
    if (head == NULL || head -> next == NULL )
     return head;
    
    struct ListNode *p1 = head;
    struct ListNode *p2 = head -> next;
    struct ListNode *result = p2;
    struct ListNode *temp = NULL ;
    while (p1 != NULL && p2 != NULL )
    {
        p1 -> next = p2 -> next;
        p2 -> next = p1;
        
        if (temp != NULL )
                temp -> next = p2;
        temp = p1;
        if (p1 -> next != NULL && p1 -> next -> next != NULL )
            {
                p1 = p1 -> next;
                p2 = p1 -> next;
            }
            else 
                break ;
    }
    return result;
}
