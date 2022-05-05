export interface ListNode {
    data: any,
    next?: ListNode
}

export const findNode = (head: ListNode, data: any) => {
    if (head === undefined) {
        return undefined
    }

    let current = head
    while (current.data !== data){
        current = current.next
    }

    return current
}

export const insertNode = (data: any, head?: ListNode, isSorted: boolean = false): ListNode => {
    if (head === undefined || (isSorted && data <= head.data)) {
        head = {
            data,
            next: head,
        }
    } else {
        let current = head
        while (current.next !== undefined) {
            if (isSorted && current.next.data >= data) {
                break
            }
            
            current = current.next
        }

        current.next = { 
            data,
            next: current.next
        }
    }

    return head
}

export const deleteNode = (head: ListNode, data: any): ListNode => {
    if (head !== undefined) {
        let current = head
        let previous
        while (current !== undefined && current.data !== data) {
            previous = current
            current = current.next
        }

        previous.next = current.next
    }

    return head
}

export const fromString = (str: string, isSorted: boolean = false): ListNode => {
    const list = str.split("")

    return fromArray(list, isSorted)
}

export const fromArray = (list: any[], isSorted: boolean = false): ListNode => {
    let rtn: ListNode
    list.forEach( ch => {
        rtn = insertNode(ch, rtn, isSorted)
    })

    return rtn
}

export const compareNodes = (list1: ListNode, list2: ListNode): number => {
    let current1 = list1
    let current2 = list2

    while (current1 !== undefined && current2 !== undefined && current1.data === current2.data) {
        current1 = current1.next
        current2 = current2.next
    }

    if (current1 !== undefined && current2 !== undefined){
        return current1.data > current2.data ? 1 : -1
    }else if (current1 !== undefined && current2 === undefined) {
        return 1
    }else if (current1 === undefined && current2 !== undefined) {
        return -1
    }else{
        return 0
    }
}
