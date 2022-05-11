export interface GraphNode {
    id: any
    visited: boolean
    neighbours?: GraphNode[]
}

export interface Graph {
    sourceNode: GraphNode
}

export interface GraphArray<T> {
    [key: number]: T[]
}

export interface NodeVisitStatus {
    [key: number]: boolean
}