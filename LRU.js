/**
 * @param {number} capacity
 */
 var LRUCache = function(capacity) {
    this.capacity = capacity
    this.db = new Map()
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (this.db.has(key)) {
        const value = this.db.get(key)
        // 更新位置
        this.db.delete(key)
        this.db.set(key, value)
        return value
    } else {
        return -1
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    const size = this.db.size
    if (this.db.has(key) || size < this.capacity) {
        if (this.db.has(key)) {
            this.db.get(key)
            // 更新位置
            this.db.delete(key)
        }
        this.db.set(key, value) 
    } else {
        const keys = [...this.db.keys()]
        // 不经常使用的key
        const lastKey = keys[0]
        this.db.delete(lastKey)
        this.db.set(key, value)
    }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

//  ["LRUCache","put","put","put","put","get","get"]
//  [[2],[2,1],[1,1],[2,3],[4,1],[1],[2]]

const lru = new LRUCache(2)
lru.put(2, 1)
lru.put(1, 1)
lru.put(2, 3)
