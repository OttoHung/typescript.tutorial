import { inorder, insertNode, TreeNode } from "../src/tree"

describe("Insert data into tree", () => {
    it("Should return a balance tree", async () => {
        const list = [5, 10, 23, 21, 1, 49, 2, 3, 4]

        let tree: TreeNode
        list.forEach(item => {
            tree = insertNode(tree, item)
        })

    //      5
    // 1         10
    //    2            23
    //       3      21     49
    //          4
        expect(tree.data).toEqual(5)
        expect(tree.left.data).toEqual(1)
        expect(tree.right.data).toEqual(10)
    })
})
