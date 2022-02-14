class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def maxDepth(self, root) -> int:
        if root is None:
            return 0

        lDepth = self.maxDepth(root.left)
        rDepth = self.maxDepth(root.right)

        if (lDepth > rDepth):
            return lDepth+1
        return rDepth+1

root = TreeNode(3)
root.left = TreeNode(9)
root.right = TreeNode(20)
root.right.left = TreeNode(15)
root.left.right = TreeNode(7)

solu = Solution()

print(solu.maxDepth(root))