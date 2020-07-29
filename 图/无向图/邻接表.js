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

    print () {
        const nodes = this.adjacencyList.keys();
        for (let node of nodes) {
            const neighbors = this.adjacencyList.get(node);
            const neighborsString = neighbors.join(' ');
            console.log(`节点${node}, 相邻节点${neighborsString}`);
        }
    }

    /**
     * 图的广度优先遍历
     * node 遍历的起点
     */
    bfs (node) {
        if (this.adjacencyList.has(node)) {
            const result = [];
            const hash = {};
            const queue = [];
            const nodes = this.adjacencyList.keys();
            for (let node of nodes) {
                hash[node] = false;
            }
            hash[node] = true;
            queue.push(node);
            result.push(node);
            while (queue.length > 0) {
                let q = queue.shift();
                let list = this.adjacencyList.get(q);
                for (let i = 0; i < list.length; i++) {
                    let temp = list[i]
                    if (!hash[temp]) {
                        result.push(temp)
                        hash[temp] = true
                        queue.push(temp)
                    }
                }
            }
            return result;
        }
        return null
    }

    /**
     * 图的深度优先遍历
     */
    dfs (node) {
        const result = [];
        const hash = {};
        const nodes = this.adjacencyList.keys();
        for (let node of nodes) {
            hash[node] = false;
        }
        const DFS = (node) => {
            let list = this.adjacencyList.get(node);
            for (let i = 0; i < list.length; i++) {
                let temp = list[i];
                if (!hash[temp]) {
                    hash[temp] = true;
                    result.push(temp);
                    DFS(temp);
                }
            }
        }
        if (this.adjacencyList.has(node)) {
            hash[node] = true;
            result.push(node);
            DFS(node);
            return result;
        }
        return null;
    }
}
