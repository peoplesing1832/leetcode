/**
 * 加权图
 */
class Graph {
    constructor () {
        this.adjacencyList = new Map();
    }

    addNode (node) {
        if (!this.adjacencyList.has(node)) {
            this.adjacencyList.set(node, []);
        } else {
            throw new Error('节点已存在')
        }
    }

    addEdge (to, from, weight) {
        if (
            this.adjacencyList.has(to) &&
            this.adjacencyList.has(from) &&
            typeof weight === 'number'
        ) {
            let toAdjacent = this.adjacencyList.get(to);
            let fromAdjacent = this.adjacencyList.get(from);
            toAdjacent = [...toAdjacent, [from, weight]];
            fromAdjacent = [...fromAdjacent, [to, weight]];
            this.adjacencyList.set(to, toAdjacent);
            this.adjacencyList.set(from, fromAdjacent); 
        }
    }
}

/**
 * 优先队列
 */
class PriorityQueue {
    constructor () {
        this.priorityQueue = []
    }

    enqueue (element) {
        this.priorityQueue.push(element);
        // 对优先队列进行排序，权重越低（距离短）的优先级越高
        this.priorityQueue.sort((a, b) => {
            // node 节点， weight 节点的权重
            const [node1, weight1] = a;
            const [node2, weight2] = b;
            return weight1 - weight2;
        });
    }

    dequeue () {   
        return this.priorityQueue.shift();
    }

    isEmpty () {
        return this.priorityQueue === 0;
    }
}


// 创建加权图
const graph = new Graph();
// 添加节点
graph.addNode('start')
graph.addNode('A')
graph.addNode('B')
graph.addNode('C')
graph.addNode('D')
graph.addNode('finish')
// 添加边以及权重
graph.addNode('start', 'A', 5)
graph.addNode('start', 'B', 2)
graph.addNode('A', 'B', 8)
graph.addNode('A', 'C', 4)
graph.addNode('A', 'D', 2)
graph.addNode('B', 'D', 7)
graph.addNode('C', 'D', 6)
graph.addNode('C', 'finish', 3)
graph.addNode('D', 'finish', 1)

const Dijkstra = (graph, node) => {
    if (this.adjacencyList.has(node)) {
        const hash = {};
        const nodes = this.adjacencyList.keys();
        for (let node of nodes) {
            // 默认距离为无限大
            hash[node] = Number.POSITIVE_INFINITY
        }
        hash[node] = 0;

        return hash;
    }
    return null
}