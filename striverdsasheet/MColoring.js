function graphColoring(graph, board, node, colors) {
    let n = graph.length;
    if (solve(node, graph, board, n, colors)) {
        return true;
    } else {
        return false;
    }
}

function isSafe(node, graph, board, color) {
    for (let neighbor of graph[node]) {
        if (board[neighbor] === color) {
            return false;
        }
    }
    return true;
}

function solve(node, graph, board, n, colors) {
    if (node === n) {
        return true;
    }

    for (let color = 1; color <= colors; color++) {
        if (isSafe(node, graph, board, color)) {
            board[node] = color;
            if (solve(node + 1, graph, board, n, colors)) {
                return true;
            }
            board[node] = 0; // Backtrack
        }
    }

    return false;
}

// Convert edge list to adjacency list
function createAdjacencyList(edges, n) {
    let graph = Array.from({ length: n }, () => []);
    for (let i = 0; i < edges.length; i += 2) {
        let u = edges[i];
        let v = edges[i + 1];
        graph[u].push(v);
        graph[v].push(u); // Because it's an undirected graph
    }
    return graph;
}

// Edge list representation of the graph
let edgeList = [1, 0, 2, 1, 3, 2, 0, 3, 2, 0];
let n = 4;
let m = 3;

let graph = createAdjacencyList(edgeList, n);
const board = Array(n).fill(0); // Initialize the board with 0
const result = graphColoring(graph, board, 0, m);
console.log(result);
