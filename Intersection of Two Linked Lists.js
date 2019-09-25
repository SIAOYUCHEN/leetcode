var getIntersectionNode = function(headA, headB) {
    if (headA == null || headB == null) return null;
        var listA = headA, listB = headB;
        while (listA != null && listB != null) {
            if (listA == listB) return listA;
            listA = listA.next;
            listB = listB.next;
            if (listA == listB) return listA;
            if (listA == null) listA = headB;
            if (listB == null) listB = headA;
        }
        return listA;
};
