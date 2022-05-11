import { GraphArray, NodeVisitStatus } from "./graph";

/**
 * Accoring to [Depth-first search - Wiki](https://en.wikipedia.org/wiki/Depth-first_search),
 * This implementation works as BFS and there may be some duplicated nodes which will be represented
 * in the stack with Time complexity O(|E|).
 * 
 * @param graph 
 * @param sourceNode 
 * @returns 
 */
export const depthFirstSearchArray = (graph: GraphArray<number>, sourceNode: number): NodeVisitStatus => {
    const stack: number[] = []
    const visited: NodeVisitStatus = []

    stack.push(sourceNode)

    while (stack.length > 0) {
        const vertex = stack.pop()
        if (visited[vertex]) {
            continue
        }

        visited[vertex] = true
        for (let i = 0 ; i < graph[vertex].length ; i++) {
            if (visited[graph[vertex][i]]) {
                continue
            }

            stack.push(graph[vertex][i])
        }
    }

    return visited
}

const visited: NodeVisitStatus = []
/**
 * The recursive version would be the best practice for DFS
 * @param graph 
 * @param node 
 * @returns 
 */
export const depthFirstSearchArrayRec = (graph: GraphArray<number>, node: number): NodeVisitStatus => {    
    visited[node] = true

    for (let i = 0 ; i < graph[node].length ; i++) {
        if (visited[graph[node][i]]) {
            continue
        }

        depthFirstSearchArrayRec(graph, graph[node][i])
    }

    return visited
}