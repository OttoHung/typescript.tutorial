import { breadthFirstSearch, breadthFirstSearchArray, seekLevelsArray, seekLevels } from "../src/breadth_first_search"
import { Graph, GraphArray, GraphNode } from "../src/graph"

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

    it("Should find the layer of each node", async () => {
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

        const levels = seekLevels(graph, sourceNode)
        expect(levels[0]).toEqual(0)
        expect(levels[1]).toEqual(1)
        expect(levels[2]).toEqual(1)
        expect(levels[3]).toEqual(1)
        expect(levels[4]).toEqual(2)
        expect(levels[5]).toEqual(2)
        expect(levels[6]).toEqual(2)
        expect(levels[7]).toEqual(2)
    })
})

describe("Visit each node in a graph implemented by an array", () => {
    it("Should go through nodes from top to bottom", async () => {
        const graph: GraphArray = []
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

    it("Should list the level of nodes in a graph", async () => {
        const graph: GraphArray = []
        graph[0] = [1, 2]
        graph[1] = [3, 4, 5]
        graph[2] = [6]
        graph[3] = []
        graph[4] = []
        graph[5] = []
        graph[6] = [7]
        graph[7] = []

        const levels = seekLevelsArray(graph, 0)
        expect(levels[0]).toEqual(0)
        expect(levels[1]).toEqual(1)
        expect(levels[2]).toEqual(1)
        expect(levels[3]).toEqual(2)
        expect(levels[4]).toEqual(2)
        expect(levels[5]).toEqual(2)
        expect(levels[6]).toEqual(2)
        expect(levels[7]).toEqual(3)
    })
})