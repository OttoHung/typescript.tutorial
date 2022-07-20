import exp from "constants"
import { toBalancedBST } from "../src/binary_search_tree"
import { inorder } from "../src/tree"
describe("To test insertion for a binary search tree", () => {
    test("Should add a list into tree", async() => {
        
    })
})

describe("To test balancing a BST", () => {
    test("Should returns 1, 2, 3, 4, 5 when traversing inorderly", async() => {
        const input = [3, 5, 1, 4, 2]
        input.sort((a, b) => (a - b))
        const balancedBST = toBalancedBST(input, 0, input.length)

        const result: number[] = []
        inorder(balancedBST, data => result.push(data))

        console.log(`balanced: ${JSON.stringify(balancedBST)}`)
        console.log(`inorder: ${result}`)

        expect(result).toBe([2, 1, 3, 4, 5])
    })

    test("Should returns 1, 2, 3, 4, 5, 6, 7, 8 ,9 , 10 when traversing inorderly", async() => {
        const input = [3, 5, 1, 4, 2, 10, 7, 6, 9, 8]
        input.sort((a, b) => (a - b))
        const balancedBST = toBalancedBST(input, 0, input.length)

        const result: number[] = []
        inorder(balancedBST, data => result.push(data))

        console.log(`balanced: ${JSON.stringify(balancedBST)}`)
        console.log(`inorder: ${result}`)

        expect(result).toBe([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    })
})

//          6
//      4         8 
//    2   5     7    9
//  1   3             10