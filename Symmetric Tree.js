var isSymmetric = function(root) {
    if (!root) return true
  
    const stack = []
    stack.push(root.left, root.right)
  
    while (stack.length) {
        const left = stack.pop()
        const right = stack.pop()
    
    if (left === right) continue
    if (!left || !right || left.val !== right.val) return false
    
    stack.push(left.left, right.right)
    stack.push(left.right, right.left)
  }
  return true
};
