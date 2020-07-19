class MinHeap {
    constructor () {
        this.heap = [null]
    }

    getMin () {
        return this.heap[1]
    }

    getParentNode (index) {
        return this.heap[Math.floor(index / 2)]
    } 

    insert (node) {
        this.heap.push(node)
        if (this.heap.length > 1) {
            let currentIndex = this.heap.length - 1
            // 需要依次向上查找
            while (
                currentIndex > 1 &&
                this.getParentNode(currentIndex) > this.heap[currentIndex]
            ) {
                // 最小堆，如果父节点大于子节点，父节点和子节点需要互相交换
                // 父节点的索引
                const parentIndex = Math.floor(currentIndex / 2)
                let temp = this.heap[parentIndex]
                this.heap[parentIndex] = this.heap[currentIndex]
                this.heap[currentIndex] = temp
                currentIndex = parentIndex
            }
        }
    }

    remove () {
        let min = this.getMin()

        if (this.heap.length > 2) {
            this.heap[1] = this.heap[this.heap.length - 1]
            this.heap.splice(this.heap.length - 1)

            // 如果只有两个节点的情况下，直接比较两个节点即可, 不需要依次比较所以的子节点
            if (this.heap.length === 3) {
                if (this.heap[1] > this.heap[2]) {
                    let temp = this.heap[1]
                    this.heap[1] = this.heap[2]
                    this.heap[2] = temp
                }
                return min
            }

            let currentIndex = 1
            // 首位是null，所以不加1
            let leftChildIndex = currentIndex * 2
            let rightChildIndex = currentIndex * 2 + 1

            // 如果有大于2个节点，父节点需要比较左右两个子节点
            while (
                this.heap[leftChildIndex] &&
                this.heap[rightChildIndex] &&
                (this.heap[currentIndex] > this.heap[leftChildIndex] || this.heap[currentIndex] > this.heap[rightChildIndex])
            ) {
                if (this.heap[leftChildIndex] < this.heap[rightChildIndex]) {
                    let temp = this.heap[currentIndex]
                    this.heap[currentIndex] = this.heap[leftChildIndex] 
                    this.heap[leftChildIndex] = temp
                    currentIndex = leftChildIndex
                } else {
                    let temp = this.heap[currentIndex]
                    this.heap[currentIndex] = this.heap[rightChildIndex]
                    this.heap[rightChildIndex] = temp
                    currentIndex = rightChildIndex
                }

                leftChildIndex = currentIndex * 2
                rightChildIndex = currentIndex * 2 + 1
            }
        } else if (this.heap.length === 2) {
            // 当前只有一个节点的情况下，直接删除root节点
            this.heap.splice(1, 1)
        } else {
            return null
        }

        return min
    }
}
