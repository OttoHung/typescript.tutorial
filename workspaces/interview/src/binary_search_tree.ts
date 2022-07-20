import { TreeNode } from "./tree"

const insertNode = (root: TreeNode, data: number): TreeNode => {
    let result = root
    if (!root) {
        result = {
            data,
        }
    } else if (data <= root.data) {
        root.left = insertNode(result.left, data)
    } else if (data > root.data) {
        root.right = insertNode(result.right, data)
    }

    return result
}

const findMin = (root: TreeNode): number => {
    let min = root.data
    while (!root.left) {
        min = root.left.data
        root = root.left
    }

    return min
}

const deleteNode = (root: TreeNode, target: number): TreeNode => {
    if (!root) {
        return root
    }

    if (target < root.data) {
        root.left = deleteNode(root.left, target)
    } else if (target > root.data) {
        root.right = deleteNode(root.right, target)
    } else {        
        if (!root.left) {
            return root.right
        } else if (!root.right) {
            return root.left
        }

        //Find the minimum value from right hand side
        //and copy it to current node which is going
        //to be deleted. By this way, the minimum node
        //does not need to be copied by value.
        root.data = findMin(root.right)

        //Delete the original minimum value
        root.right = deleteNode(root.right, root.data)
    }

    return root
}

//Not completed yet
export const toBalancedBST = (list: number[], head: number, end: number): TreeNode => {
    if (!list) {
        return undefined
    }

    let left = undefined
    let right = undefined

    const breakPoint = Math.floor((head + end) / 2)
    const mid = Math.floor((end - head)/2)

    if ( mid > 1 ) {
        left = toBalancedBST(list, head, breakPoint - 1)
        right = toBalancedBST(list, breakPoint, end)
    } else {
        right = { data: list[breakPoint + 1] }
    }

    return {
        data: list[breakPoint],
        left,
        right,
    }
}