import { breadthFirstSearch, breadthFirstSearchArray } from "../src/breadth_first_search"
import { Graph, GraphNode } from "../src/graph"

describe("Visit each node in a graph", () => {
    it("Should go through nodes from top to botton", async () => {
        const graph: Graph = {
            sourceNode: {
                id: 0,
                neighbours: [
                    {
                        id: 1,
                        neighbours:[
                            {
                                id: 4,
                                visited: false,
                            },
                            {
                                id: 5,
                                visited: false,
                            }
                        ],
                        visited: false,
                    },
                    {
                        id: 2,
                        neighbours: [
                            {
                                id: 6,
                                visited: false
                            },
                            {
                                id: 7,
                                visited: false
                            }
                        ],
                        visited: false,
                    },
                    {
                        id: 3,
                        neighbours: [
                            {
                                id: 7,
                                visited: false
                            }
                        ],
                        visited: false,
                    }
                ],
                visited: false,
            }
        }

        const sourceNode: GraphNode = {
            id: 0,
            visited: false
        }

        breadthFirstSearch(graph, sourceNode)
        expect(graph.sourceNode.visited).toBeTruthy()
        
        expect(graph.sourceNode.neighbours[0].visited).toBeTruthy()
        expect(graph.sourceNode.neighbours[0].neighbours[0].visited).toBeTruthy()
        expect(graph.sourceNode.neighbours[0].neighbours[1].visited).toBeTruthy()
        
        expect(graph.sourceNode.neighbours[1].visited).toBeTruthy()
        expect(graph.sourceNode.neighbours[1].neighbours[0].visited).toBeTruthy()
        expect(graph.sourceNode.neighbours[1].neighbours[0].visited).toBeTruthy()

        expect(graph.sourceNode.neighbours[2].visited).toBeTruthy()
        expect(graph.sourceNode.neighbours[2].neighbours[0].visited).toBeTruthy()        
    })

    // it("Should find the layer of each node", async () => {
    //     const layers = seekLevels([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1)

    //     expect(layers).toBe([0, 1, 1, 2, 2, 2, 2, 3, 3, 3 ])
    // })
})

describe("Visit each node in a graph implemented by an array", () => {
    it("Should go through nodes from top to bottom", async () => {
        const graph: {[key: number]: number[]} = []
        graph[0] = [1, 2, 3]
        graph[1] = [4, 5]
        graph[2] = [6, 7]
        graph[3] = [7]
        graph[4] = []
        graph[5] = []
        graph[6] = []
        graph[7] = []

        const visited = breadthFirstSearchArray(graph, 0)
        expect(visited).toEqual([0, 1, 2, 3, 4, 5, 6, 7])
    })
})