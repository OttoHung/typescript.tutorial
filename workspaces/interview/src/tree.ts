
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

export const preorder = (root: TreeNode) => {
    
    if (root) {
        console.log(root.data)
        preorder(root.left)
        preorder(root.right)
    }
}

export const inorder = (root: TreeNode) => {
    if (root) {       
        preorder(root.left)
        console.log(root.data)
        preorder(root.right)
    }
}

export const postorder = (root: TreeNode): any[] => {
    const result = []
    if (root) {        
        preorder(root.left)
        result.push(root.data)
        preorder(root.right)
    }

    return result
}