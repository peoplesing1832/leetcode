/**
 * 无向图
 */
class Graph {
    constructor (noOfNode) {
        // key ～ 节点
        // value ～ 相邻节点的列表
        this.adjacencyList = new Map();
        // 节点的数量
        this.noOfVertices = noOfNode;
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
            // 无向图，所以边是连接两边的
            this.adjacencyList.get(to).push(from);
            this.adjacencyList.get(from).push(to);
        }
    }

    print () {
        const nodes = this.adjacencyList.keys();
        for (let node of nodes) {
            const neighbors = this.adjacencyList.get(node);
            const neighborsString = neighbors.join(' ');
            console.log(`节点${node}, 相邻节点${neighborsString}`);
        }
    }
}
