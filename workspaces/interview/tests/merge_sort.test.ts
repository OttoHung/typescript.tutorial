import { efficientSort, sort } from "../src/merge_sort"

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

describe("Sort a list of number by index", () => {
    it("should return an array in accending order from small head array", async () => {
        const list = [2,34, 5, 21, 12, 6, 77, 11,22,40]
        efficientSort(list, 0, list.length-1)

        expect(list).toEqual([2, 5, 6, 11, 12, 21, 22, 34, 40, 77])
    })

    it("should return an array in accending order from small head array", async () => {
        const list = [32, 2,34, 5, 21, 24, 6, 77]
        efficientSort(list, 0, list.length-1)

        expect(list).toEqual([2, 5, 6, 21, 24, 32, 34, 77])
    })

    it("should return an array in accending order from big head array", async () => {
        const list = [29,34, 5, 21, 24, 6, 77]
        efficientSort(list, 0, list.length-1)

        expect(list).toEqual([5, 6, 21, 24, 29, 34, 77])
    })
})