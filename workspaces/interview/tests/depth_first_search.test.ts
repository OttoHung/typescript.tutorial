import {depthFirstSearchArray, depthFirstSearchArrayRec} from "../src/depth_first_search"

describe("Depth First Search in an array", () => {
    it("Should visit all nodes by depth first", async () => {
        const graph = []
        graph[1] = [2, 3]
        graph[2] = [4, 5]
        graph[3] = []
        graph[4] = []
        graph[5] = []

        const visited = depthFirstSearchArray(graph, 1)
        expect(visited[1]).toBeTruthy()
        expect(visited[2]).toBeTruthy()
        expect(visited[3]).toBeTruthy()
        expect(visited[4]).toBeTruthy()
        expect(visited[5]).toBeTruthy()

    })
})

describe("Depth First Search in an array - Recursive", () => {
    it("Should visit all nodes by depth first", async () => {
        const graph = []
        graph[1] = [2, 3]
        graph[2] = [4, 5]
        graph[3] = []
        graph[4] = []
        graph[5] = []

        const visited = depthFirstSearchArrayRec(graph, 1)
        expect(visited[1]).toBeTruthy()
        expect(visited[2]).toBeTruthy()
        expect(visited[3]).toBeTruthy()
        expect(visited[4]).toBeTruthy()
        expect(visited[5]).toBeTruthy()

    })    
})