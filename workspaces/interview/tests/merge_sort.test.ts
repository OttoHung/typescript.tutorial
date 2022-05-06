import { sort } from "../src/merge_sort"

describe("Sort a list of number", () => {
    it("should return an array in accending order from small head array", async () => {
        const result = sort([2,34, 5, 21, 6, 77])
        expect(result).toEqual([2, 5, 6, 21, 34, 77])
    })

    it("should return an array in accending order from small head array", async () => {
        const result = sort([2,34, 5, 21, 24, 6, 77])
        expect(result).toEqual([2, 5, 6, 21, 24, 34, 77])
    })

    it("should return an array in accending order from big head array", async () => {
        const result = sort([29,34, 5, 21, 24, 6, 77])

        expect(result).toEqual([5, 6, 21, 24, 29, 34, 77])
    })
})