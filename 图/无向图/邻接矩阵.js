/**
 * 无向图
 */
class Graph {
    constructor () {
        this.matrix = [];
    }

    /**
     * 添加节点
     */
    addNode () {
        this.matrix.push([]);
        const L = this.matrix.length;
        for (let i = 0; i < L; i++) {
            let start = this.matrix[i].length;
            while (start < L) {
                this.matrix[i][start] = 0;
                start += 1
            }
        }
    }

    /**
     * 添加边
     */
    addEdge (to, from) {
        if (
            (to < this.matrix.length && to >= 0) && 
            (from < this.matrix.length && from >= 0)
        ) {
            this.matrix[to][from] = 1;
            this.matrix[from][to] = 1;
        }
    }

    print () {
        const L = this.matrix.length;
        for (let i = 0; i < L; i++) {
            const current = i;
            let neighbors = this.matrix[i].map((m, index) => {
                if (
                    index !== i &&
                    m === 1
                ) {
                    return index;
                }
                return null;
            });
            neighbors = neighbors.filter(n => n !== null);
            const neighborsString = neighbors.join(' ');
            console.log(`节点${current}, 相邻节点${neighborsString}`);
        }
    }

    bfs (node) {
        if (node >= 0 && node < this.matrix.length) {
            const result = [];
            const hash = {};
            const queue = [];
            for (let i = 0; i < this.matrix.length; i++) {
                hash[i] = false;
            }
            hash[node] = true;
            result.push(node);
            queue.push(node);
            while(queue.length > 0) {
                let q = queue.shift();
                let list = this.matrix[q];
                for (let i = 0; i < list.length; i++) {
                    if (
                        list[i] === 1 &&
                        !hash[i]
                    ) {
                        result.push(i);
                        hash[i] = true;
                        queue.push(i);
                    }
                }
            }
            return result;
        }
        return -1;
    }

    dfs (node) {
        if (node >= 0 && node < this.matrix.length) {
            const result = [];
            const hash = {};
            for (let i = 0; i < this.matrix.length; i++) {
                hash[i] = false;
            }
            hash[node] = true;
            result.push(node);
            const DFS = (node) => {
                let list = this.matrix[node];
                for (let i = 0; i < list.length; i++) {
                    if (
                        list[i] === 1 &&
                        !hash[i]
                    ) {
                        result.push(i);
                        hash[i] = true;
                        DFS(i);
                    }
                }
            };
            DFS(node);
            return result;
        }
        return -1;
    }
}

let graph = new Graph();
graph.addNode();
graph.addNode();
graph.addNode();
graph.addNode();

graph.addEdge(0,1)
graph.addEdge(1,2)
graph.addEdge(0,3)

console.log(graph.dfs(0))