export interface GraphNode {
    id: any
    visited: boolean
    neighbours?: GraphNode[]
}

export interface Graph {
    sourceNode: GraphNode
}

export interface GraphArray {
    [key: number]: number[]
}