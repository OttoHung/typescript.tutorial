
/**
 * Before calling this function, please ensure the items in an incremental order
 * @param list 
 * @param target 
 * @returns 
 */
export const binarySearch = (list: any[], target: number): number => {
    let lowerBound = 0
    let upperBound = list.length-1 

    while (lowerBound <= upperBound) {
        const mid: number = Math.floor((lowerBound + upperBound)/2)

        if (list[mid] > target) {            
            upperBound = mid - 1
        } else if (list[mid] < target) {
            lowerBound = mid + 1
        } else {
            return mid
        }
    }

    return -1
}