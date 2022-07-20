export enum NodeColour {    
    Black,
    Red,
}

interface TreeNode {
    data: number
    parent: TreeNode
    left: TreeNode
    right: TreeNode
    colour: NodeColour
}

const preorderTraversal = (root: TreeNode, predicate: (node: TreeNode) => TreeNode) => {
    if (!root) {
        return
    }

    predicate(root)
    preorderTraversal(root.left, predicate)
    preorderTraversal(root.right, predicate)
}

const inorderTraversal = (root: TreeNode, predicate: (node: TreeNode) => TreeNode) => {    
    if (!root) {
        return
    }

    inorderTraversal(root.left, predicate)
    predicate(root)
    inorderTraversal(root.right, predicate)
}

const postorderTraversal = (root: TreeNode, predicate: (node: TreeNode) => TreeNode) => {
    if (!root) {
        return
    }

    postorderTraversal(root.left, predicate)
    postorderTraversal(root.right, predicate)
    predicate(root)
}

const find = (root: TreeNode, key: number): TreeNode => {
    if (!root || key === root.data) {
        return root
    }

    if (key < root.data) {
        return find(root.left, key)
    }

    return find(root.right, key)
}

const leftRotate = (root: TreeNode, target: TreeNode) => {

}

const rightRotate = (root: TreeNode, target: TreeNode) => {

}

const transplant = (root: TreeNode, toBeReplaced: TreeNode, newOne: TreeNode) => {
    if (!toBeReplaced.parent) {
        root = newOne
    } else if (toBeReplaced === toBeReplaced.parent.left) {
        toBeReplaced.parent.left = newOne
    } else {
        toBeReplaced.parent.right = newOne
    }

    newOne.parent = toBeReplaced.parent
}

export const insertNode = () => {

}

//Doing this when the colour of parent of new node is RED
export const fixInsertion = () => {

}

export const deleteNode = (root: TreeNode, key: number) => {
    const target = find(root, key)
    if (!target) {
        return
    }


}

//Doing this when the colour of removed node or the replacement node is BLACK
export const fixDeletion = (root: TreeNode, childOfTarget: TreeNode) => {
    let sibling
    while (root !== childOfTarget && childOfTarget.colour == NodeColour.Black) {
        if (childOfTarget === childOfTarget.parent.left) {
            sibling = childOfTarget.parent.right
            if (sibling.colour == NodeColour.Red) {
                sibling.colour = NodeColour.Black
                childOfTarget.parent.colour = NodeColour.Red

                //Different than parent.right
                leftRotate(root, childOfTarget.parent)
                sibling = childOfTarget.parent.right
            }

            if (sibling.left.colour == NodeColour.Black && sibling.right.colour == NodeColour.Black) {
                sibling.colour = NodeColour.Red
                childOfTarget = childOfTarget.parent
            } else {
                if (sibling.right.colour == NodeColour.Black) {
                    sibling.left.colour = NodeColour.Black
                    sibling.colour = NodeColour.Red

                    //Different than parent.right
                    rightRotate(root, sibling)
                    sibling = childOfTarget.parent.right
                }

                sibling.colour = childOfTarget.parent.colour
                childOfTarget.parent.colour = NodeColour.Black
                sibling.right.colour = NodeColour.Black

                leftRotate(root, childOfTarget.parent)
                childOfTarget = root
            }
        } else {
            sibling = childOfTarget.parent.left

            if (sibling.colour == NodeColour.Red) {
                sibling.colour = NodeColour.Black
                childOfTarget.parent.colour = NodeColour.Red

                //Different than parent.right
                rightRotate(root, childOfTarget.parent)
                sibling = childOfTarget.parent.left
            }

            if (sibling.left.colour == NodeColour.Black && sibling.right.colour == NodeColour.Black) {
                sibling.colour = NodeColour.Red
                childOfTarget = childOfTarget.parent
            } else {
                if (sibling.left.colour == NodeColour.Black) {
                    sibling.right.colour = NodeColour.Black
                    sibling.colour = NodeColour.Red

                    //Different than parent.right
                    leftRotate(root, sibling)
                    sibling = childOfTarget.parent.left
                }

                sibling.colour = childOfTarget.parent.colour
                childOfTarget.parent.colour = NodeColour.Black
                sibling.left.colour = NodeColour.Black

                //Different than parent.right
                rightRotate(root, childOfTarget.parent)
                childOfTarget = root
            }
        }        
    }

    childOfTarget.colour = NodeColour.Black
}
