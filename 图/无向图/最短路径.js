/**
 * 无向图
 */
class Graph {
    constructor () {
        // key ～ 节点
        // value ～ 相邻节点的列表
        this.adjacencyList = new Map();
    }

    /**
     * 添加节点
     */
    addNode (node) {
        if (!this.adjacencyList.has(node)) {
            this.adjacencyList.set(node, []);
        } else {
            throw new Error('节点已存在')
        }
    }

    /**
     * 添加边
     * to 节点1
     * form 节点2
     */
    addEdge (to, from) {
        if (
            this.adjacencyList.has(to) &&
            this.adjacencyList.has(from)
        ) {
            // 做一个去重
            let toAdjacent = this.adjacencyList.get(to)
            let fromAdjacent = this.adjacencyList.get(from)
            toAdjacent = [...new Set([...toAdjacent, from])];
            fromAdjacent = [... new Set([...fromAdjacent, to])];
            // 无向图，所以边是连接两边的
            this.adjacencyList.set(to, toAdjacent);
            this.adjacencyList.set(from, fromAdjacent); 
        }
    }
}

/**
 * 无向图中，查找某一个顶点，到其他顶点的最短路径
 * graph 图
 * node 起始的顶点
 * 无权重的图，边的距离默认为1
 */
const shortestPath = (graph, node) => {
    // 使用bfs
    if (
        graph &&
        graph.adjacencyList &&
        graph.adjacencyList.has(node)
    ) {
        const hash = {};
        const queue = [];
        const nodes = graph.adjacencyList.keys();
        for (let node of nodes) {
            hash[node] = false;
        }
        hash[node] = 0;
        queue.push(node);
        while (queue.length > 0) {
            let q = queue.shift();
            let list = graph.adjacencyList.get(q);
            for (let i = 0; i < list.length; i++) {
                let temp = list[i]
                if (hash[temp] !== false && hash[temp] > hash[q] + 1) {
                    hash[temp] = hash[q] + 1;
                }
                if (hash[temp] === false) {
                    hash[temp] = hash[q] + 1;
                    queue.push(temp)
                }
            }
        }
        return hash;
    }
    return -1;
}

const graph = new Graph()
// 添加节点
graph.addNode('A')
graph.addNode('B')
graph.addNode('C')
graph.addNode('D')
graph.addNode('E')
graph.addNode('F')
// 添加边
graph.addEdge('A', 'B')
graph.addEdge('A', 'D')
graph.addEdge('A', 'E')
graph.addEdge('B', 'A')
graph.addEdge('B', 'C')
graph.addEdge('C', 'B')
graph.addEdge('C', 'E')
graph.addEdge('C', 'F')
graph.addEdge('D', 'A')
graph.addEdge('D', 'E')
graph.addEdge('E', 'A')
graph.addEdge('E', 'C')
graph.addEdge('E', 'D')
graph.addEdge('E', 'F')
graph.addEdge('F', 'C')
graph.addEdge('F', 'E')

console.log(shortestPath(graph, 'C'))