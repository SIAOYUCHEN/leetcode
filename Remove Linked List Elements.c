struct ListNode* removeElements(struct ListNode* head, int val) {
        while(head!=NULL && head->val == val)
            head = head->next;
        if(head == NULL)
            return NULL;
        struct ListNode * p = head->next;
        struct ListNode * q = head;
        while(p)
        {
            if(p->val != val)
            {
                q->next = p;
                q = p;
            }
            else
            {
                q->next = NULL;
            }
            p = p->next;
        }
        return head;
}
