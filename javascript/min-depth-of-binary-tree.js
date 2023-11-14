// Create node class
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// Main function
const minDepth = function(root) {

  // Check for edge case (no root node)
  if (!root) {
    return 0;
  }

  // If no left node, examine right; return minDepth(root.right) + 1 (recursive)
  if (!root.left) {
    return 1 + minDepth(root.right);
  }

  // if no right node, examine
  if (!root.right) {
    return 1 + minDepth(root.left);
  }

  // Declare left and right depth
  const leftDepth = minDepth(root.left);
  const rightDepth = minDepth(root.right);

  // Min depth is the min of rightDepth and leftDepth + 1 for the root node
  return (1 + Math.min(rightDepth, leftDepth));
    
};

/*
Example usage:

Construct sample binary tree:
      1
     / \
    2   3
   /
  4
  
In javascript:
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);

console.log(minDepth(root));
*/