struct ListNode *getIntersectionNode(struct ListNode *headA, struct ListNode *headB) {
    if (headA == NULL || headB == NULL) return NULL;
        struct ListNode * listA = headA, *listB = headB;
        while (listA != NULL && listB != NULL) {
            if (listA == listB) return listA;
            listA = listA->next;
            listB = listB->next;
            if (listA == listB) return listA;
            if (listA == NULL) listA = headB;
            if (listB == NULL) listB = headA;
        }
        return listA;
}
