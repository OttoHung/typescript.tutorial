import { Graph, GraphNode } from "./graph"

const findNode = (graph: Graph, node: GraphNode): GraphNode|undefined => {
    const currentNode = graph.sourceNode
    if (currentNode === undefined) {
        return undefined
    }

    //compare current node, if it match, return
    //else search for node in neighbours
    if (currentNode.id === node.id) {
        return currentNode
    } else if (currentNode.neighbours !== undefined) {
        for (let i = 0 ; i < currentNode.neighbours.length ; i++) {
            const result = findNode({sourceNode: currentNode.neighbours[i]}, node)
            if (result === undefined) {
                continue
            }

            return result
        }
    }

    return undefined
}

export const breadthFirstSearch = (graph: Graph, sourceNode: GraphNode) => {
    const searchQueue = []
    const source = findNode(graph, sourceNode)
    if (source === undefined) {
        return
    }

    searchQueue.push(source)
    source.visited = true

    while (searchQueue.length > 0) {
        const vertex = searchQueue.shift()

        const node = findNode(graph, vertex)
        if (node === undefined) {
            continue
        }

        if (node.neighbours === undefined) {
            continue
        }

        for (let i = 0 ; i < node.neighbours.length ; i ++) {
            if (node.neighbours[i].visited) {
                continue
            }

            searchQueue.push(node.neighbours[i])
            node.neighbours[i].visited = true
        }
    }
}

export const breadthFirstSearchArray = (graph: {[key: number]: number[]}, source: number): number[] => {
    const queue = []
    const visited: number[] = []
    queue.push(source)
    visited.push(0)

    while (queue.length > 0) {
        const node = queue.shift()

        for (let i = 0 ; i < graph[node].length ; i++) {
            if (visited.indexOf(graph[node][i]) >= 0) {
                continue
            }

            queue.push(graph[node][i])
            visited.push(graph[node][i])
        }
    }

    return visited
}

export const seekLevels = (graph: GraphNode[], sourceNode: any): number[] => {
    const layers: number[] = []

    
    return layers
}