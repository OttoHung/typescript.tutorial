
export interface TreeNode {
    data: any,
    left?: TreeNode,
    right?: TreeNode
}

export const insertNode = (root: TreeNode, data: number): TreeNode => {
    if (root === undefined) {
        return {
            data,
        }
    } else {
        if (data <= root.data) {
            root.left = insertNode(root.left, data)
        } else {
            root.right = insertNode(root.right, data)
        }
        return root
    }
}

export const preorder = (root: TreeNode, predicate: (data: any) => void) => {    
    if (root) {
        predicate(root.data)
        preorder(root.left, predicate)
        preorder(root.right, predicate)
    }
}

export const inorder = (root: TreeNode, predicate: (data: any) => void) => {
    if (root) {       
        inorder(root.left, predicate)
        predicate(root.data)
        inorder(root.right, predicate)
    }
}

export const postorder = (root: TreeNode, predicate: (data: any) => void) => {
    if (root) {        
        postorder(root.left, predicate)
        postorder(root.right, predicate)
        predicate(root.data)
    }
}