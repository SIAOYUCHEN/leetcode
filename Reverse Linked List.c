struct ListNode* reverseList(struct ListNode* head) {
    struct ListNode* post = head;
    struct ListNode* pre = NULL;
    struct ListNode* cur = NULL;
    
    while(post != NULL)
    {
        pre = cur;
        cur = post;
        post = post -> next;
        cur -> next =pre;
    }
    
    return cur;
}
