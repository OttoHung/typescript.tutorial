import {binarySearch} from "../src/binary_search"

describe("Binary Search from small to large", () => {
    it("Should find number at left hand side", async () => {
        const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

        const result = binarySearch(list, 5)
        expect(result).toEqual(4)
    })

    it("Should find number at right hand side", async () => {
        const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

        const result = binarySearch(list, 12)
        expect(result).toEqual(11)
    })

    it("Should find number at head", async () => {
        const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

        const result = binarySearch(list, 1)
        expect(result).toEqual(0)
    })

    it("Should find number at rear", async () => {
        const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

        const result = binarySearch(list, 15)
        expect(result).toEqual(14)
    })

    it("Should find number at middle - even numbers in list", async () => {
        const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

        const result = binarySearch(list, 7)
        expect(result).toEqual(6)
    })

    it("Should find number at middle - even numbers in list", async () => {
        const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

        const result = binarySearch(list, 8)
        expect(result).toEqual(7)
    })

    it("Should find number at middle - odd numbers in list", async () => {
        const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

        const result = binarySearch(list, 6)
        expect(result).toEqual(5)
    })

    it("Should find number at middle - odd numbers in list", async () => {
        const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

        const result = binarySearch(list, 7)
        expect(result).toEqual(6)
    })
})