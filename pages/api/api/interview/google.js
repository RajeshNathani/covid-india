const google_ins = [
    {
      id : 1,
      problem : 'Minimum Domino Rotations For Equal Row',
      url : 'https://leetcode.com/problems/minimum-domino-rotations-for-equal-row'
    },
    {
      id : 2,
      problem : 'Guess the word',
      url : 'https://leetcode.com/problems/guess-the-word'
    },
    {
      id : 3,
      problem : 'String Transforms Into Another String',
      url : 'https://leetcode.com/problems/string-transforms-into-another-string'
    },
    {
      id : 4,
      problem : 'Confusing Numner II',
      url : 'https://leetcode.com/problems/confusing-number-ii'
    },
    {
      id : 5,
      problem : 'Expressive Words',
      url : 'https://leetcode.com/problems/expressive-words'
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
      problem : '	Split Array into Consecutive Subsequences',
      url : 'https://leetcode.com/problems/split-array-into-consecutive-subsequence'
    },
    {
      id : 9,
      problem : '	Minimum Window Subsequence',
      url : 'https://leetcode.com/problems/minimum-window-subsequence'
    },
    {
      id : 10,
      problem : 'Compare Strings by Frequency of the Smallest Character',
      url : 'https://leetcode.com/problems/compare-strings-by-frequency-of-the-smallest-character'
    },

]
export default (req, res) => {
    res.status(200).json(google_ins)
  }