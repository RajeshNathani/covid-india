const apple_ins = [
    {
      id : 1,
      problem : 'Find in Mountain Array',
      url : 'https://leetcode.com/problems/find-in-mountain-array'
    },
    {
      id : 2,
      problem : 'Perfect Rectangle',
      url : 'https://leetcode.com/problems/perfect-rectangle'
    },
    {
      id : 3,
      problem : 'LRU Cache',
      url : 'https://leetcode.com/problems/lru-cache'
    },
    {
      id : 4,
      problem : 'Flatten Nested List Iterator',
      url : 'https://leetcode.com/problems/flatten-nested-list-iterator'
    },
    {
      id : 5,
      problem : 'Serialize and Deserialize N-ary Tree',
      url : 'https://leetcode.com/problems/serialize-and-deserialize-n-ary-tree'
    },
    {
      id : 6,
      problem : 'Delete Nodes And Return Forest	',
      url : 'https://leetcode.com/problems/delete-nodes-and-return-forest'
    },
    {
      id : 7,
      problem : 'Two Sum',
      url : 'https://leetcode.com/problems/two-sum'
    },
    {
      id : 8,
      problem : 'Split Array into Consecutive Subsequences',
      url : 'https://leetcode.com/problems/split-array-into-consecutive-subsequence'
    },
    {
      id : 9,
      problem : 'Interleaving String',
      url : 'https://leetcode.com/problems/interleaving-string'
    },
    {
      id : 10,
      problem : 'Median of Two Sorted Arrays',
      url : 'https://leetcode.com/problems/median-of-two-sorted-arrays'
    },

]
export default (req, res) => {
    res.status(200).json(apple_ins)
  }