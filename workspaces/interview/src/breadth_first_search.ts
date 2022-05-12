import { Edge, Graph, GraphArray, GraphNode } from "./graph"

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

export const seekLevels = (graph: Graph, sourceNode: any): number[] => {
    const layers: number[] = []

    const searchQueue = []
    const source = findNode(graph, sourceNode)
    if (source === undefined) {
        return
    }

    searchQueue.push(source)
    source.visited = true
    layers[source.id] = 0

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
            layers[node.neighbours[i].id]=layers[node.id] + 1
        }
    }
    
    return layers
}

export const breadthFirstSearchArray = (graph: GraphArray<number>, source: number): number[] => {
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

export const seekLevelsArray = (graph: GraphArray<number>, sourceNode: any): {[key: number]: number} => {
    const visited: {[key: number]: boolean} = []
    const queue: number[] = []
    const levels: {[key: number]: number} = []

    queue.push(sourceNode)
    visited[sourceNode] = true
    levels[sourceNode] = 0

    while (queue.length > 0) {
        const vertex = queue.shift()
        
        for (let i = 0 ; i < graph[vertex].length ; i++) {
            const neighbour = graph[vertex][i]
            if (visited[neighbour]) {
                continue
            }

            levels[neighbour] = levels[vertex] + 1
            visited[neighbour] = true
            queue.push(neighbour)
        }
    }

    return levels
}

export const zeroOneBFS = (edges: Edge[][], source: number): number[] => {
    const queue = []
    const distance = new Array(edges.length).fill(100000, 0)    

    queue.push(source)
    distance[source] = 0

    while (queue.length > 0) {
        const vertex = queue.shift()        
        for (let i = 0 ; i < edges[vertex].length ; i++) {
            if (distance[edges[vertex][i].node] > distance[vertex] + edges[vertex][i].weight) {
                distance[edges[vertex][i].node] = distance[vertex] + edges[vertex][i].weight

                if (edges[vertex][i].weight === 0) {
                    queue.splice(0, 0, edges[vertex][i].node)
                } else {
                    queue.push(edges[vertex][i].node)
                }
            }
        }
    }

    return distance
}