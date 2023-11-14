class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
const hasPathSum = function (root, targetSum) {

    if (!root) {
      return false;
    }

  if (!root.left && !root.right && root.val === targetSum) {
    return true;
  }

  // Recursively check the left and right subtrees
  const leftResult = hasPathSum(root.left, targetSum - root.val);
  const rightResult = hasPathSum(root.right, targetSum - root.val);

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



