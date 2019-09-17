struct ListNode* mergeTwoLists(struct ListNode* l1, struct ListNode* l2) {
    struct ListNode *temp;
    struct ListNode *result;
    
    if(l1 == NULL && l2 == NULL)
    {
        return NULL;
    }
    else if(l1 == NULL && l2 != NULL)
    {
        return l2;
    }
    else if(l1 != NULL && l2 == NULL)
    {
        return l1;
    }
    
    if(l1 -> val <= l2 -> val)
    {
        temp = l1;
        l1 = l1 -> next;
    }
    else
    {
        temp = l2;
        l2 = l2 -> next;
    }
    
    result = temp;
    while(l1 != NULL && l2 != NULL)
    {
        if (l1->val<=l2->val) {
            temp->next=l1;
            l1=l1->next;
        }
        else {
            temp->next=l2;
            l2=l2->next;
        }  
        temp=temp->next;
    }
    if(l1) {
        temp->next=l1;
    }
    else if(l2){
        temp->next=l2;
    }
    
    return result;
}
