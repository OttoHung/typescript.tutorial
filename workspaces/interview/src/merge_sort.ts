export const sort = (list: any[]): any[] => {
    const leftLen = Math.ceil(list.length / 2)
    
    let leftPiece = list.slice(0, leftLen)
    let rightPiece = list.slice(leftLen)
    if (leftLen > 1) {
        leftPiece = sort(leftPiece)
        rightPiece = sort(rightPiece)        
    }

    return mergeList(leftPiece, rightPiece)
}

export const mergeList = (list1: any[], list2: any[]): any[] => {
    let result: any[] = []
    
    while (list1.length > 0 || list2.length > 0) {
        let left = list1[0]
        let right = list2[0]
        if (left <= right ) {
            result.push(left)
            list1.shift()
        } else if (left > right) {
            result.push(right)
            list2.shift()
        }

        if (list1.length === 0) {
            result = result.concat(list2)
            break
        } else if (list2.length === 0) {
            result = result.concat(list1)
            break
        } 
    }
    
    return result
}

export const efficientSort = (list: any[], start:number, end: number) => {
    if (start >= end) {
        return
    }

    const mid = Math.floor((start+end) / 2)
    efficientSort(list, start, mid)
    efficientSort(list, mid+1, end)

    efficientMerge(list, start, mid, end)
}

export const efficientMerge = (list: any[], start: number, mid: number, end: number): any[] => {
    let result: any[] = []

    let lp = start
    let rp = mid + 1
    for (let i = start ; i <= end ; i++) {
        if (lp > mid) {
            result.push(list[rp++])
        } else if (rp > end) {
            result.push(list[lp++])
        } else if (list[lp] < list[rp]) {
            result.push(list[lp++])
        } else {
            result.push(list[rp++])
        }
    }

    for (let i = 0 ; i < result.length ; i++) {
        list[start++] = result[i]
    }

    return result
}