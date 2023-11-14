// Create TreeNode class
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// Main function
const hasPathSum = function(root, targetSum) {

  // Return false if no root node
  if (!root) {
    return false;
  }

  // If there are no left and right nodes and the value of the leaf is equal to the reduced target sum, return true
  if (!root.left && !root.right && root.val === targetSum) {
    return true;
  }

  // Recursively check the left and right subtrees and reduce the target sum by the value of the node value
  const leftResult = hasPathSum(root.left, targetSum - root.val);
  const rightResult = hasPathSum(root.right, targetSum - root.val);

  // Return true if either left or right path's nodes are equal to the reduced target sum
  return leftResult || rightResult;
  
};

/*
Example usage:
Construct a sample binary tree
    5
   / \
  4   8
 /   / \
11  13  4
/  \      \
7   2      1
const root = new TreeNode(5);
root.left = new TreeNode(4);
root.right = new TreeNode(8);
root.left.left = new TreeNode(11);
root.left.left.left = new TreeNode(7);
root.left.left.right = new TreeNode(2);
root.right.left = new TreeNode(13);
root.right.right = new TreeNode(4);
root.right.right.right = new TreeNode(1);

const targetSum = 22;

Output: true
console.log(hasPathSum(root, targetSum));
*/



