class Node{
   
    int val;
    Node left;
    Node right;
    Node(){}
    
    Node(int val){
        this.val = val;
    }
    
    Node(int val, Node left, Node right){
        this.val = val;
        this.left = left;
        this.right = right;
    }
}



class Solution{
    public int maxDepth(Node root){
        if (root == null){
            return 0;
        }

        int lDepth = maxDepth(root.left);

        int rDepth = maxDepth(root.right);

        if (lDepth > rDepth){
            return (++lDepth);
        }
        
        return (++rDepth);
    }

}