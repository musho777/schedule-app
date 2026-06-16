export const CATEGORIES = [
  {
    id: 'dsa',
    title: 'Data Structures & Algorithms',
    tasks: [
      {
        id: 'iv_dsa_1',
        title: 'Arrays & Strings — two pointers, sliding window, prefix sum',
        time: '20 min',
        tag: 'study',
        details: {
          keyConcepts: `• Two Pointers: Use left and right pointers to scan from both ends or same direction
• Sliding Window: Maintain a window that expands/contracts based on conditions
• Prefix Sum: Precompute cumulative sums for O(1) range queries`,
          questions: `• Remove duplicates from sorted array
• Container with most water
• Longest substring without repeating characters
• Minimum window substring`,
          codeExample: `// Two Pointers Pattern
function twoSum(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === target) return [left, right];
    if (sum < target) left++;
    else right--;
  }
  return [-1, -1];
}

// Sliding Window
function maxSubarraySum(arr, k) {
  let maxSum = 0, windowSum = 0;
  for (let i = 0; i < arr.length; i++) {
    windowSum += arr[i];
    if (i >= k - 1) {
      maxSum = Math.max(maxSum, windowSum);
      windowSum -= arr[i - k + 1];
    }
  }
  return maxSum;
}`,
          complexity: 'Time: O(n) | Space: O(1)',
          resources: `• LeetCode 167: Two Sum II
• LeetCode 3: Longest Substring Without Repeating Characters
• LeetCode 76: Minimum Window Substring`
        }
      },
      {
        id: 'iv_dsa_2',
        title: 'HashMaps & HashSets — frequency count, grouping, lookup patterns',
        time: '15 min',
        tag: 'study',
        details: {
          keyConcepts: `• Frequency Count: Track occurrences of elements in O(1) lookup
• Grouping: Group elements by key (anagrams, etc.)
• Fast Lookup: Check existence or get value in O(1) average time`,
          questions: `• Two Sum (unsorted array)
• Group Anagrams
• First unique character in string
• Subarray sum equals K`,
          codeExample: `// Frequency Counter Pattern
function groupAnagrams(strs) {
  const map = new Map();
  for (const str of strs) {
    const key = str.split('').sort().join('');
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(str);
  }
  return Array.from(map.values());
}

// Two Sum with HashMap
function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [-1, -1];
}`,
          complexity: 'Time: O(n) | Space: O(n)',
          resources: `• LeetCode 1: Two Sum
• LeetCode 49: Group Anagrams
• LeetCode 560: Subarray Sum Equals K`
        }
      },
      {
        id: 'iv_dsa_3',
        title: 'Linked Lists — reverse, detect cycle, find middle (fast/slow pointer)',
        time: '15 min',
        tag: 'study',
        details: {
          keyConcepts: `• Fast/Slow Pointers: Detect cycles, find middle node
• Reverse: Iteratively reverse pointers in-place
• Dummy Node: Simplifies edge cases for head operations`,
          questions: `• Reverse Linked List
• Detect Cycle (Floyd's algorithm)
• Merge Two Sorted Lists
• Remove Nth Node from End`,
          codeExample: `// Reverse Linked List
function reverse(head) {
  let prev = null, curr = head;
  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}

// Detect Cycle (Fast/Slow)
function hasCycle(head) {
  let slow = head, fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
}`,
          complexity: 'Time: O(n) | Space: O(1)',
          resources: `• LeetCode 206: Reverse Linked List
• LeetCode 141: Linked List Cycle
• LeetCode 876: Middle of the Linked List`
        }
      },
      {
        id: 'iv_dsa_4',
        title: 'Stacks & Queues — monotonic stack, sliding window max',
        time: '15 min',
        tag: 'study',
        details: {
          keyConcepts: `• Stack (LIFO): Use for backtracking, nested structures, valid parentheses
• Queue (FIFO): Use for BFS, level-order processing
• Monotonic Stack: Maintain increasing/decreasing order for next greater/smaller element problems`,
          questions: `• Valid Parentheses
• Min Stack (O(1) getMin)
• Daily Temperatures (next warmer day)
• Sliding Window Maximum`,
          codeExample: `// Monotonic Stack Pattern
function nextGreaterElement(nums) {
  const result = new Array(nums.length).fill(-1);
  const stack = [];
  for (let i = 0; i < nums.length; i++) {
    while (stack.length && nums[i] > nums[stack[stack.length - 1]]) {
      const idx = stack.pop();
      result[idx] = nums[i];
    }
    stack.push(i);
  }
  return result;
}

// Min Stack
class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }
  push(val) {
    this.stack.push(val);
    const min = this.minStack.length
      ? Math.min(val, this.minStack[this.minStack.length - 1])
      : val;
    this.minStack.push(min);
  }
  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}`,
          complexity: 'Time: O(n) | Space: O(n)',
          resources: `• LeetCode 20: Valid Parentheses
• LeetCode 155: Min Stack
• LeetCode 739: Daily Temperatures
• LeetCode 239: Sliding Window Maximum`
        }
      },
      {
        id: 'iv_dsa_5',
        title: 'Binary Search — sorted arrays, search space reduction pattern',
        time: '15 min',
        tag: 'study',
        details: {
          keyConcepts: `• Binary Search: Halve search space each iteration (O(log n))
• Search Space: Can apply to unsorted arrays if you're searching on answer range
• Template: while (left <= right), mid = left + (right - left) / 2`,
          questions: `• Search in Rotated Sorted Array
• Find Minimum in Rotated Sorted Array
• Koko Eating Bananas
• Find Peak Element`,
          codeExample: `// Classic Binary Search
function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}

// Search Space Reduction (Koko eating bananas)
function minEatingSpeed(piles, h) {
  let left = 1, right = Math.max(...piles);
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    const hours = piles.reduce((sum, p) =>
      sum + Math.ceil(p / mid), 0);
    if (hours <= h) right = mid;
    else left = mid + 1;
  }
  return left;
}`,
          complexity: 'Time: O(log n) | Space: O(1)',
          resources: `• LeetCode 33: Search in Rotated Sorted Array
• LeetCode 153: Find Minimum in Rotated Sorted Array
• LeetCode 875: Koko Eating Bananas`
        }
      },
      {
        id: 'iv_dsa_6',
        title: 'Trees — BFS, DFS, LCA, level-order traversal',
        time: '20 min',
        tag: 'study',
        details: {
          keyConcepts: `• DFS: Preorder, Inorder, Postorder (recursive or stack)
• BFS: Level-order traversal using queue
• LCA: Lowest Common Ancestor (find split point)
• Properties: Binary tree vs BST properties`,
          questions: `• Maximum Depth of Binary Tree
• Validate Binary Search Tree
• Lowest Common Ancestor
• Binary Tree Level Order Traversal
• Serialize and Deserialize Binary Tree`,
          codeExample: `// DFS - Inorder Traversal
function inorder(root) {
  const result = [];
  function dfs(node) {
    if (!node) return;
    dfs(node.left);
    result.push(node.val);
    dfs(node.right);
  }
  dfs(root);
  return result;
}

// BFS - Level Order
function levelOrder(root) {
  if (!root) return [];
  const result = [], queue = [root];
  while (queue.length) {
    const level = [], size = queue.length;
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      level.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(level);
  }
  return result;
}`,
          complexity: 'Time: O(n) | Space: O(h) for DFS, O(w) for BFS',
          resources: `• LeetCode 104: Maximum Depth of Binary Tree
• LeetCode 98: Validate BST
• LeetCode 236: Lowest Common Ancestor
• LeetCode 102: Binary Tree Level Order Traversal`
        }
      },
      {
        id: 'iv_dsa_7',
        title: 'Graphs — BFS shortest path, DFS, topological sort, Union-Find',
        time: '20 min',
        tag: 'study',
        details: {
          keyConcepts: `• Graph Representation: Adjacency list vs matrix
• BFS: Shortest path in unweighted graph
• DFS: Cycle detection, connected components
• Topological Sort: Ordering with dependencies (Kahn's algorithm)
• Union-Find: Detect cycles, connected components`,
          questions: `• Number of Islands
• Clone Graph
• Course Schedule (topological sort)
• Pacific Atlantic Water Flow
• Network Delay Time`,
          codeExample: `// BFS for shortest path
function shortestPath(graph, start, end) {
  const queue = [[start, 0]];
  const visited = new Set([start]);
  while (queue.length) {
    const [node, dist] = queue.shift();
    if (node === end) return dist;
    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([neighbor, dist + 1]);
      }
    }
  }
  return -1;
}

// Union-Find
class UnionFind {
  constructor(n) {
    this.parent = Array.from({length: n}, (_, i) => i);
    this.rank = new Array(n).fill(0);
  }
  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }
  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);
    if (rootX === rootY) return false;
    if (this.rank[rootX] > this.rank[rootY]) {
      this.parent[rootY] = rootX;
    } else if (this.rank[rootX] < this.rank[rootY]) {
      this.parent[rootX] = rootY;
    } else {
      this.parent[rootY] = rootX;
      this.rank[rootX]++;
    }
    return true;
  }
}`,
          complexity: 'Time: O(V + E) for BFS/DFS | Space: O(V)',
          resources: `• LeetCode 200: Number of Islands
• LeetCode 207: Course Schedule
• LeetCode 133: Clone Graph
• LeetCode 684: Redundant Connection (Union-Find)`
        }
      },
      {
        id: 'iv_dsa_8',
        title: 'Dynamic Programming — 1D, 2D, knapsack, LCS, LIS patterns',
        time: '25 min',
        tag: 'study',
        details: {
          keyConcepts: `• DP = Recursion + Memoization or Bottom-up tabulation
• 1D DP: Fibonacci, House Robber, Climbing Stairs
• 2D DP: Grid paths, edit distance, LCS
• Knapsack: 0/1 knapsack (include/exclude decisions)
• LIS: Longest Increasing Subsequence`,
          questions: `• Climbing Stairs
• House Robber
• Coin Change
• Longest Common Subsequence
• Edit Distance
• Longest Increasing Subsequence`,
          codeExample: `// 1D DP - Climbing Stairs
function climbStairs(n) {
  if (n <= 2) return n;
  let prev2 = 1, prev1 = 2;
  for (let i = 3; i <= n; i++) {
    const curr = prev1 + prev2;
    prev2 = prev1;
    prev1 = curr;
  }
  return prev1;
}

// 2D DP - Coin Change
function coinChange(coins, amount) {
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      if (i >= coin) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
}

// LCS
function longestCommonSubsequence(text1, text2) {
  const m = text1.length, n = text2.length;
  const dp = Array(m + 1).fill(0).map(() => Array(n + 1).fill(0));
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[m][n];
}`,
          complexity: 'Time: O(n²) for 2D DP | Space: O(n) with optimization',
          resources: `• LeetCode 70: Climbing Stairs
• LeetCode 322: Coin Change
• LeetCode 1143: Longest Common Subsequence
• LeetCode 300: Longest Increasing Subsequence`
        }
      },
      {
        id: 'iv_dsa_9',
        title: 'Heaps / Priority Queues — top-K, merge K sorted, median stream',
        time: '15 min',
        tag: 'study',
        details: {
          keyConcepts: `• Min Heap: Root is smallest, used for getting minimum efficiently
• Max Heap: Root is largest, used for top-K problems
• Top-K Pattern: Use min-heap of size K
• Median Stream: Use two heaps (max-heap for lower half, min-heap for upper half)`,
          questions: `• Kth Largest Element in Array
• Top K Frequent Elements
• Merge K Sorted Lists
• Find Median from Data Stream`,
          codeExample: `// Top K Frequent Elements (using Map + sort)
function topKFrequent(nums, k) {
  const map = new Map();
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  return Array.from(map.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map(([num]) => num);
}

// Find Kth Largest (quick select)
function findKthLargest(nums, k) {
  const partition = (left, right) => {
    const pivot = nums[right];
    let i = left;
    for (let j = left; j < right; j++) {
      if (nums[j] >= pivot) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
        i++;
      }
    }
    [nums[i], nums[right]] = [nums[right], nums[i]];
    return i;
  };

  let left = 0, right = nums.length - 1;
  while (true) {
    const idx = partition(left, right);
    if (idx === k - 1) return nums[idx];
    if (idx < k - 1) left = idx + 1;
    else right = idx - 1;
  }
}`,
          complexity: 'Time: O(n log k) for top-K | Space: O(k)',
          resources: `• LeetCode 215: Kth Largest Element
• LeetCode 347: Top K Frequent Elements
• LeetCode 23: Merge K Sorted Lists
• LeetCode 295: Find Median from Data Stream`
        }
      },
      {
        id: 'iv_dsa_10',
        title: 'Warm-up — solve 2 medium LeetCode problems timed (no hints)',
        time: '40 min',
        tag: 'leetcode',
        details: {
          keyConcepts: `• Practice under time pressure (20 min per problem)
• Think out loud to practice interview communication
• Write working code without running tests first
• Explain your approach before coding`,
          questions: `Recommended problems:
• 3Sum (arrays + two pointers)
• Product of Array Except Self (prefix/suffix)
• Group Anagrams (hashmap)
• Container With Most Water (two pointers)
• Longest Palindromic Substring (DP)
• Number of Islands (DFS/BFS)`,
          codeExample: `// Problem-solving framework:
1. Clarify the problem
   - Ask about edge cases
   - Confirm input/output format
   - Check constraints

2. Think out loud
   - Explain brute force first
   - Identify optimization
   - Choose data structure

3. Code
   - Start with function signature
   - Write main logic
   - Handle edge cases

4. Test
   - Walk through example
   - Check edge cases
   - Analyze complexity`,
          complexity: 'Varies by problem',
          resources: `• LeetCode 15: 3Sum
• LeetCode 238: Product of Array Except Self
• LeetCode 200: Number of Islands
• Practice on whiteboard or paper first`
        }
      },
    ],
  },
  {
    id: 'sysdesign',
    title: 'System Design',
    tasks: [
      {
        id: 'iv_sd_1',
        title: 'Review the design framework: clarify → estimate → design → deep dive → tradeoffs',
        time: '10 min',
        tag: 'study',
        details: {
          keyConcepts: `1. Clarify Requirements
   • Functional: Core features, use cases
   • Non-functional: Scale, latency, availability

2. Estimate Scale
   • DAU, QPS, storage needs
   • Peak load, growth projections

3. High-Level Design
   • Draw main components
   • Data flow between services

4. Deep Dive
   • Pick 2-3 components to detail
   • Show understanding of tradeoffs

5. Discuss Tradeoffs
   • Performance vs consistency
   • Cost vs reliability`,
          questions: `Interview questions to expect:
• Design Twitter/Instagram
• Design a URL shortener
• Design a chat system
• Design YouTube/Netflix
• Design a web crawler`,
          codeExample: `// Framework Template:

1. CLARIFY (3 min)
   "Let me confirm the requirements..."
   - What features? (read, write, search)
   - How many users? (scale)
   - What's most important? (latency, consistency)

2. ESTIMATE (2 min)
   - 100M DAU → ~1K QPS read, ~100 QPS write
   - Storage: 1KB/post × 1M posts/day × 365 = ~365GB/year

3. DESIGN (10 min)
   Draw: Client → Load Balancer → App Servers → Cache → DB

4. DEEP DIVE (10 min)
   Pick topics: Caching strategy, DB schema, ranking algorithm

5. WRAP UP (5 min)
   Bottlenecks, monitoring, failure scenarios`,
          complexity: 'Total time: ~30-40 min interview',
          resources: `• "System Design Interview" by Alex Xu (book)
• ByteByteGo YouTube channel
• Grokking System Design Interview (course)`
        }
      },
      {
        id: 'iv_sd_2',
        title: 'URL Shortener — hashing, DB choice, redirect logic',
        time: '15 min',
        tag: 'study',
        details: {
          keyConcepts: `• Hash Function: Convert long URL to short code (base62 encoding)
• Collision Handling: Check DB, retry with salt
• 301 vs 302 Redirect: Permanent vs temporary (affects analytics)
• DB Choice: SQL for relations, NoSQL for high write throughput
• Scale: Pre-generate IDs, use distributed ID generator (Snowflake)`,
          questions: `• How do you generate short URLs?
• How do you handle collisions?
• What database would you use?
• How do you handle 1M+ requests per second?
• How do you track analytics?`,
          codeExample: `// Short URL Generation
function generateShortCode(id) {
  const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let code = '';
  while (id > 0) {
    code = chars[id % 62] + code;
    id = Math.floor(id / 62);
  }
  return code.padStart(7, '0'); // 62^7 = 3.5 trillion URLs
}

// High-level architecture:
Client → API Gateway
       → App Servers (generate/redirect)
       → Cache (Redis) - hot URLs
       → Database (PostgreSQL/Cassandra)
          - Table: { short_code, long_url, created_at, clicks }

// Redirect logic:
1. Check cache for short_code
2. If miss, query DB
3. Update cache
4. Track analytics async (message queue)
5. Return 301/302 redirect`,
          complexity: 'QPS: 10K writes, 100K reads | Latency: <10ms',
          resources: `• Similar: bit.ly, tinyurl.com
• Design Pattern: Distributed ID generation
• Consider: Custom domains, expiration, security`
        }
      },
      {
        id: 'iv_sd_3',
        title: 'Rate Limiter — token bucket vs sliding window, Redis implementation',
        time: '15 min',
        tag: 'study',
        details: {
          keyConcepts: `• Token Bucket: Tokens refill at fixed rate, smooth bursts
• Sliding Window: Track requests in rolling time window
• Fixed Window: Simple but has boundary issues
• Redis: In-memory storage for fast counter operations
• Distributed: Use Redis for multi-server rate limiting`,
          questions: `• What algorithm would you use for rate limiting?
• How do you handle distributed rate limiting?
• Where do you place the rate limiter (client, server, middleware)?
• How do you handle rate limit exceeded (429 error)?`,
          codeExample: `// Sliding Window Counter (Redis)
async function isAllowed(userId, limit, windowSec) {
  const now = Date.now();
  const windowStart = now - (windowSec * 1000);
  const key = \`rate:\${userId}\`;

  // Remove old entries
  await redis.zremrangebyscore(key, 0, windowStart);

  // Count current requests in window
  const count = await redis.zcard(key);

  if (count < limit) {
    // Add current request
    await redis.zadd(key, now, now);
    await redis.expire(key, windowSec);
    return true;
  }
  return false;
}

// Token Bucket (simplified)
class TokenBucket {
  constructor(capacity, refillRate) {
    this.capacity = capacity;
    this.tokens = capacity;
    this.refillRate = refillRate; // tokens per second
    this.lastRefill = Date.now();
  }

  tryConsume() {
    this.refill();
    if (this.tokens >= 1) {
      this.tokens--;
      return true;
    }
    return false;
  }

  refill() {
    const now = Date.now();
    const elapsed = (now - this.lastRefill) / 1000;
    this.tokens = Math.min(
      this.capacity,
      this.tokens + (elapsed * this.refillRate)
    );
    this.lastRefill = now;
  }
}`,
          complexity: 'Redis ops: O(log n) | Memory: O(requests in window)',
          resources: `• Redis ZSET for sliding window
• Nginx rate limiting module
• API Gateway rate limiting (AWS, Kong)`
        }
      },
      {
        id: 'iv_sd_4',
        title: 'News Feed / Timeline — fanout on write vs read, caching strategy',
        time: '15 min',
        tag: 'study',
        details: {
          keyConcepts: `• Fanout on Write: Pre-compute feeds when post created (fast reads, slow writes)
• Fanout on Read: Compute feed on demand (fast writes, slow reads)
• Hybrid: Fanout for normal users, compute for celebrities on-demand
• Ranking: ML model or simple time-based
• Cache: Redis for hot feeds, CDN for media`,
          questions: `• How do you generate a user's feed?
• What happens when a celebrity with 10M followers posts?
• How do you rank/sort feed items?
• How do you handle real-time updates?`,
          codeExample: `// Fanout on Write (Twitter-style)
async function createPost(userId, content) {
  // 1. Save post to DB
  const post = await db.posts.create({ userId, content });

  // 2. Get followers
  const followers = await db.followers.find({ followingId: userId });

  // 3. Fanout: insert into each follower's feed cache
  const fanoutTasks = followers.map(follower =>
    redis.lpush(\`feed:\${follower.id}\`, post.id)
  );
  await Promise.all(fanoutTasks);

  return post;
}

// Fanout on Read (Instagram-style for heavy users)
async function getFeed(userId) {
  // 1. Get users I follow
  const following = await db.following.find({ userId });

  // 2. Get recent posts from each
  const posts = await db.posts.find({
    userId: { $in: following.map(f => f.followingId) },
    createdAt: { $gte: Date.now() - 7 * 24 * 60 * 60 * 1000 }
  }).sort({ createdAt: -1 }).limit(100);

  // 3. Rank and cache
  const rankedPosts = rankPosts(posts);
  await redis.setex(\`feed:\${userId}\`, 300, JSON.stringify(rankedPosts));

  return rankedPosts;
}

// Hybrid approach:
- Normal users: fanout on write
- Celebrities (>1M followers): fanout on read
- Mix both in final feed merge`,
          complexity: 'Fanout write: O(followers) | Read: O(following × posts)',
          resources: `• Twitter uses hybrid fanout
• Facebook News Feed ranking (EdgeRank)
• Instagram feed algorithm`
        }
      },
      {
        id: 'iv_sd_5',
        title: 'Chat App — WebSockets, presence, message storage, delivery guarantees',
        time: '15 min',
        tag: 'study',
        details: {
          keyConcepts: `• WebSockets: Persistent bidirectional connection for real-time messaging
• Presence: Track online/offline status (heartbeat + Redis)
• Message Storage: Cassandra for append-only, partitioned by user
• Delivery: At-least-once (message queue), exactly-once (dedup)
• Read Receipts: Track last seen message ID per user`,
          questions: `• How do you handle real-time messaging?
• How do you know if a user is online?
• How do you store chat history?
• How do you handle message delivery when user is offline?
• How do you handle group chats with 1000+ members?`,
          codeExample: `// WebSocket server (simplified)
const io = require('socket.io')(server);
const onlineUsers = new Map(); // userId -> socketId

io.on('connection', (socket) => {
  let userId;

  socket.on('auth', (user) => {
    userId = user.id;
    onlineUsers.set(userId, socket.id);
    // Update presence in Redis
    redis.hset('presence', userId, 'online');
    // Notify friends
    socket.broadcast.emit('user-online', userId);
  });

  socket.on('send-message', async (data) => {
    const { to, message } = data;
    // 1. Save to DB
    const msg = await db.messages.create({
      from: userId,
      to,
      content: message,
      timestamp: Date.now()
    });
    // 2. Send via WebSocket if online
    const recipientSocket = onlineUsers.get(to);
    if (recipientSocket) {
      io.to(recipientSocket).emit('new-message', msg);
    } else {
      // 3. Queue for offline delivery (push notification)
      await messageQueue.push({ userId: to, message: msg });
    }
  });

  socket.on('disconnect', () => {
    onlineUsers.delete(userId);
    redis.hset('presence', userId, 'offline');
    socket.broadcast.emit('user-offline', userId);
  });
});

// Message schema:
{
  id: UUID,
  from: userId,
  to: userId (or groupId),
  content: string,
  timestamp: number,
  delivered: boolean,
  read: boolean
}`,
          complexity: 'WebSocket: O(1) per message | Storage: partition by user',
          resources: `• Socket.io or native WebSockets
• Cassandra for chat history (partition by user)
• Redis Pub/Sub for presence
• Similar: WhatsApp, Slack, Discord`
        }
      },
      {
        id: 'iv_sd_6',
        title: 'Key-Value Store — consistent hashing, replication, CAP theorem',
        time: '15 min',
        tag: 'study',
        details: {
          keyConcepts: `• Consistent Hashing: Distribute keys across nodes, minimize redistribution on add/remove
• Replication: Store copies on N nodes for durability (N=3 common)
• CAP Theorem: Choose 2 of Consistency, Availability, Partition tolerance
• Quorum: W + R > N for strong consistency (W=write replicas, R=read replicas)
• Anti-Entropy: Merkle trees for detecting inconsistencies`,
          questions: `• How do you distribute data across servers?
• What happens when a node fails?
• How do you ensure data consistency?
• How do you handle network partitions?
• How does Redis/DynamoDB work?`,
          codeExample: `// Consistent Hashing (simplified)
class ConsistentHash {
  constructor(nodes = [], virtualNodes = 150) {
    this.ring = new Map();
    this.sortedKeys = [];
    this.virtualNodes = virtualNodes;
    nodes.forEach(node => this.addNode(node));
  }

  hash(key) {
    // Use a hash function (e.g., MD5, SHA1)
    return key.split('').reduce((acc, char) =>
      ((acc << 5) - acc) + char.charCodeAt(0), 0) >>> 0;
  }

  addNode(node) {
    for (let i = 0; i < this.virtualNodes; i++) {
      const hash = this.hash(\`\${node}:vnode\${i}\`);
      this.ring.set(hash, node);
    }
    this.sortedKeys = Array.from(this.ring.keys()).sort((a, b) => a - b);
  }

  getNode(key) {
    const hash = this.hash(key);
    // Find first node clockwise
    for (const nodeHash of this.sortedKeys) {
      if (nodeHash >= hash) {
        return this.ring.get(nodeHash);
      }
    }
    return this.ring.get(this.sortedKeys[0]);
  }
}

// CAP Theorem examples:
// CP (Consistency + Partition tolerance): HBase, MongoDB
// AP (Availability + Partition tolerance): Cassandra, DynamoDB
// CA (Consistency + Availability): MySQL (no partition tolerance)

// Quorum read/write:
// W=2, R=2, N=3 → strong consistency (W + R > N)
// W=1, R=1, N=3 → eventual consistency (faster but may read stale)`,
          complexity: 'Hash: O(log N) | Replication: O(N)',
          resources: `• Dynamo paper (Amazon)
• Cassandra architecture
• Redis Cluster
• Consistent hashing visualization`
        }
      },
      {
        id: 'iv_sd_7',
        title: 'Scaling concepts — load balancing, horizontal scale, stateless services, CDN',
        time: '10 min',
        tag: 'study',
        details: {
          keyConcepts: `• Load Balancer: Distribute traffic (Round Robin, Least Connections, IP Hash)
• Horizontal Scaling: Add more servers (vs vertical = bigger server)
• Stateless Services: No session data in server (use external cache/DB)
• CDN: Cache static assets near users (CloudFront, Cloudflare)
• Auto-scaling: Scale based on metrics (CPU, QPS)`,
          questions: `• How do you handle 10x traffic spike?
• What's the difference between horizontal and vertical scaling?
• How does a CDN improve performance?
• What is a stateless service?`,
          codeExample: `// Load Balancing Algorithms:

1. Round Robin
   servers = ['s1', 's2', 's3']
   current = 0
   next_server() → servers[current++ % servers.length]

2. Least Connections
   Track active connections per server
   Choose server with min connections

3. Weighted Round Robin
   servers = [{ name: 's1', weight: 5 },
              { name: 's2', weight: 3 }]
   Distribute based on weight ratios

4. IP Hash
   server = servers[hash(clientIP) % servers.length]
   Same client → same server (sticky sessions)

// Stateless service example:
// ❌ Stateful (bad for scaling):
let userSession = {}; // stored in server memory

// ✅ Stateless (good for scaling):
// Store session in Redis/DB, any server can handle request
const session = await redis.get(\`session:\${sessionId}\`);

// CDN caching:
Client → CDN (cache hit) → return asset
Client → CDN (cache miss) → Origin Server → cache + return`,
          complexity: 'Load balancer: O(1) | CDN cache hit: <50ms',
          resources: `• Nginx load balancing
• AWS ELB, CloudFront
• HAProxy
• Sticky sessions vs stateless`
        }
      },
      {
        id: 'iv_sd_8',
        title: 'DB at scale — sharding, replication, SQL vs NoSQL decision criteria',
        time: '10 min',
        tag: 'study',
        details: {
          keyConcepts: `• Sharding: Partition data across multiple DBs (by user ID, geography, hash)
• Replication: Master-slave (read replicas) or multi-master
• SQL: ACID, relations, joins (PostgreSQL, MySQL)
• NoSQL: Scalability, schema-less, eventual consistency (Cassandra, MongoDB, DynamoDB)
• Indexing: B-tree for SQL, LSM-tree for NoSQL`,
          questions: `• When would you use SQL vs NoSQL?
• How do you shard a database?
• What's the difference between sharding and replication?
• How do you handle cross-shard queries?
• What is the N+1 query problem?`,
          codeExample: `// Sharding strategies:

1. Range-based sharding (by user ID)
   Shard 1: users 1-1M
   Shard 2: users 1M-2M
   Problem: uneven distribution

2. Hash-based sharding
   shard = hash(userId) % numShards
   Pro: even distribution
   Con: resharding is expensive

3. Geographic sharding
   US users → US DB
   EU users → EU DB
   Pro: low latency
   Con: cross-region queries

// SQL vs NoSQL decision:

Use SQL when:
✓ Need ACID transactions
✓ Complex joins and relations
✓ Data structure is stable
✓ Example: financial transactions, user accounts

Use NoSQL when:
✓ Need horizontal scalability
✓ Schema changes frequently
✓ High write throughput
✓ Eventually consistent is ok
✓ Example: logging, analytics, social media posts

// Replication:
Master (writes) → replicate → Slave 1, Slave 2 (reads)
Read scaling: send reads to replicas
Write scaling: requires sharding`,
          complexity: 'Sharding: O(1) lookup | Replication lag: 0-100ms',
          resources: `• Vitess (YouTube's sharding solution)
• PostgreSQL read replicas
• DynamoDB auto-sharding
• CAP theorem trade-offs`
        }
      },
    ],
  },
  {
    id: 'javascript',
    title: 'JavaScript & Technical',
    tasks: [
      {
        id: 'iv_js_1',
        title: 'Event loop — call stack, microtasks, macrotasks, Promise execution order',
        time: '10 min',
        tag: 'study',
        details: {
          keyConcepts: `• Call Stack: Synchronous code execution (LIFO)
• Microtasks: Promises, queueMicrotask (higher priority)
• Macrotasks: setTimeout, setInterval, I/O (lower priority)
• Execution Order: Call stack → Microtasks → Macrotasks → Render`,
          questions: `• Explain the event loop
• What's the difference between microtasks and macrotasks?
• What's the output of this Promise/setTimeout code?
• How does async/await work under the hood?`,
          codeExample: `console.log('1');

setTimeout(() => console.log('2'), 0);

Promise.resolve().then(() => console.log('3'));

console.log('4');

// Output: 1, 4, 3, 2
// Explanation:
// 1. Call stack: console.log('1') → '1'
// 2. setTimeout queued as macrotask
// 3. Promise queued as microtask
// 4. Call stack: console.log('4') → '4'
// 5. Call stack empty, run microtasks → '3'
// 6. Macrotasks → '2'

// Complex example:
async function async1() {
  console.log('async1 start');
  await async2();
  console.log('async1 end'); // microtask
}

async function async2() {
  console.log('async2');
}

console.log('script start');
setTimeout(() => console.log('setTimeout'), 0);
async1();
new Promise(resolve => {
  console.log('promise1');
  resolve();
}).then(() => console.log('promise2'));
console.log('script end');

// Output:
// script start
// async1 start
// async2
// promise1
// script end
// async1 end
// promise2
// setTimeout`,
          complexity: 'Understanding: Critical for async debugging',
          resources: `• Jake Archibald's event loop talk
• MDN: Concurrency model and Event Loop
• Visualize: latentflip.com/loupe`
        }
      },
      {
        id: 'iv_js_2',
        title: 'Closures & scope — lexical scope, closure use cases, memory gotchas',
        time: '10 min',
        tag: 'study',
        details: {
          keyConcepts: `• Lexical Scope: Function can access variables from outer scope
• Closure: Function retains access to outer scope even after outer function returns
• Use Cases: Data privacy, factory functions, currying, debounce/throttle
• Memory: Closures keep outer variables in memory (potential leak)`,
          questions: `• What is a closure?
• How do closures work in loops?
• Implement a counter using closures
• What are common closure use cases?`,
          codeExample: `// Basic closure
function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}
const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2

// Factory pattern with closure
function createUser(name) {
  let credits = 100; // private variable
  return {
    getName: () => name,
    getCredits: () => credits,
    spend: (amount) => {
      if (credits >= amount) {
        credits -= amount;
        return true;
      }
      return false;
    }
  };
}
const user = createUser('Alice');
user.getName(); // 'Alice'
user.spend(50); // true, credits now 50
// user.credits is not accessible (private)

// Common gotcha: closures in loops
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// Output: 3, 3, 3 (var is function-scoped)

// Fix 1: use let (block-scoped)
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// Output: 0, 1, 2

// Fix 2: IIFE to create new scope
for (var i = 0; i < 3; i++) {
  (function(j) {
    setTimeout(() => console.log(j), 100);
  })(i);
}
// Output: 0, 1, 2`,
          complexity: 'Memory: Be aware of closures holding references',
          resources: `• MDN: Closures
• You Don't Know JS: Scope & Closures
• Common patterns: debounce, throttle, memoize`
        }
      },
      {
        id: 'iv_js_3',
        title: 'Prototype chain & this — 4 binding rules, arrow function difference',
        time: '10 min',
        tag: 'study',
        details: {
          keyConcepts: `• Prototype Chain: Objects inherit from other objects via __proto__
• 'this' Binding Rules:
  1. new binding (constructor)
  2. Explicit binding (call, apply, bind)
  3. Implicit binding (method call)
  4. Default binding (window/undefined in strict mode)
• Arrow Functions: Lexical 'this' (inherit from enclosing scope)`,
          questions: `• Explain the prototype chain
• What are the 4 rules for 'this' binding?
• How do arrow functions handle 'this'?
• What's the difference between __proto__ and prototype?`,
          codeExample: `// Prototype chain
function Person(name) {
  this.name = name;
}
Person.prototype.greet = function() {
  return \`Hello, I'm \${this.name}\`;
};

const alice = new Person('Alice');
alice.greet(); // "Hello, I'm Alice"
// alice.__proto__ === Person.prototype
// Person.prototype.__proto__ === Object.prototype

// 'this' binding rules
const obj = {
  name: 'Alice',
  greet: function() {
    console.log(this.name);
  },
  arrowGreet: () => {
    console.log(this.name); // 'this' is lexical (outer scope)
  }
};

obj.greet(); // 'Alice' (implicit binding)
const greet = obj.greet;
greet(); // undefined (default binding, strict: error)

obj.greet.call({ name: 'Bob' }); // 'Bob' (explicit binding)

const boundGreet = obj.greet.bind({ name: 'Charlie' });
boundGreet(); // 'Charlie' (explicit binding)

new obj.greet(); // {} (new binding, creates new object)

// Arrow function 'this'
class Timer {
  constructor() {
    this.seconds = 0;
  }
  start() {
    // ❌ Regular function: 'this' is undefined in callback
    // setInterval(function() { this.seconds++; }, 1000);

    // ✅ Arrow function: 'this' refers to Timer instance
    setInterval(() => { this.seconds++; }, 1000);
  }
}`,
          complexity: 'Understanding: Essential for class methods and callbacks',
          resources: `• MDN: this, Inheritance and the prototype chain
• You Don't Know JS: this & Object Prototypes
• Kyle Simpson's 'this' rules`
        }
      },
      {
        id: 'iv_js_4',
        title: 'Async patterns — Promise, async/await, Promise.all, error handling',
        time: '10 min',
        tag: 'study',
        details: {
          keyConcepts: `• Promise: Object representing eventual completion/failure of async operation
• States: Pending → Fulfilled or Rejected
• async/await: Syntactic sugar over Promises (easier to read)
• Promise.all: Wait for all promises (fails if any fails)
• Promise.allSettled: Wait for all, get all results (even failures)
• Error Handling: try/catch for async/await, .catch() for Promises`,
          questions: `• What is a Promise?
• Difference between Promise.all and Promise.allSettled?
• How do you handle errors in async/await?
• What happens if you don't await a Promise?`,
          codeExample: `// Promise basics
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true;
    if (success) resolve('Done!');
    else reject('Failed!');
  }, 1000);
});

promise
  .then(result => console.log(result))
  .catch(error => console.error(error));

// async/await
async function fetchData() {
  try {
    const response = await fetch('/api/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

// Promise.all (fails fast)
const [user, posts, comments] = await Promise.all([
  fetchUser(),
  fetchPosts(),
  fetchComments()
]);
// If any fails, entire Promise.all rejects

// Promise.allSettled (wait for all)
const results = await Promise.allSettled([
  fetchUser(),
  fetchPosts(),
  fetchComments()
]);
results.forEach(result => {
  if (result.status === 'fulfilled') {
    console.log(result.value);
  } else {
    console.error(result.reason);
  }
});

// Parallel vs Sequential
// ❌ Sequential (slow)
const user = await fetchUser();
const posts = await fetchPosts();

// ✅ Parallel (fast)
const [user, posts] = await Promise.all([
  fetchUser(),
  fetchPosts()
]);

// Promise.race (first to complete)
const result = await Promise.race([
  fetch('/api/fast'),
  fetch('/api/slow')
]);`,
          complexity: 'Async coordination: Critical for performance',
          resources: `• MDN: Promise, async/await
• Promises/A+ specification
• async/await vs .then() comparison`
        }
      },
      {
        id: 'iv_js_5',
        title: 'TypeScript — generics, utility types, conditional types, infer',
        time: '10 min',
        tag: 'study',
        details: {
          keyConcepts: `• Generics: Reusable type-safe components <T>
• Utility Types: Partial, Required, Pick, Omit, Record
• Conditional Types: T extends U ? X : Y
• infer: Extract types within conditional types
• Type Guards: typeof, instanceof, custom type predicates`,
          questions: `• What are generics and why use them?
• Explain Partial<T> and Pick<T, K>
• What is a conditional type?
• How do you create a type guard?`,
          codeExample: `// Generics
function identity<T>(arg: T): T {
  return arg;
}
identity<string>('hello'); // type: string
identity(42); // type: number (inferred)

// Generic constraints
interface HasLength {
  length: number;
}
function logLength<T extends HasLength>(arg: T): T {
  console.log(arg.length);
  return arg;
}
logLength('hello'); // OK
logLength([1, 2, 3]); // OK
// logLength(123); // Error: number has no length

// Utility types
interface User {
  id: number;
  name: string;
  email: string;
}

type PartialUser = Partial<User>;
// { id?: number; name?: string; email?: string; }

type UserPreview = Pick<User, 'id' | 'name'>;
// { id: number; name: string; }

type UserWithoutEmail = Omit<User, 'email'>;
// { id: number; name: string; }

type UserRecord = Record<'admin' | 'user', User>;
// { admin: User; user: User; }

// Conditional types
type IsString<T> = T extends string ? true : false;
type A = IsString<string>; // true
type B = IsString<number>; // false

// infer (extract return type)
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
type Func = () => string;
type FuncReturn = ReturnType<Func>; // string

// Type guard
function isString(value: unknown): value is string {
  return typeof value === 'string';
}
const val: unknown = 'hello';
if (isString(val)) {
  val.toUpperCase(); // TypeScript knows val is string
}`,
          complexity: 'Type safety: Catch bugs at compile time',
          resources: `• TypeScript Handbook
• Type Challenges (github.com/type-challenges)
• Utility types documentation`
        }
      },
      {
        id: 'iv_js_6',
        title: 'Performance — React memoization, code splitting, bundle size, Core Web Vitals',
        time: '10 min',
        tag: 'study',
        details: {
          keyConcepts: `• React.memo: Prevent re-renders if props unchanged
• useMemo: Memoize expensive calculations
• useCallback: Memoize function references
• Code Splitting: Dynamic import(), React.lazy
• Bundle Size: Tree shaking, minification, compression
• Core Web Vitals: LCP (<2.5s), FID (<100ms), CLS (<0.1)`,
          questions: `• How do you optimize React re-renders?
• What's the difference between useMemo and useCallback?
• How do you reduce bundle size?
• Explain Core Web Vitals`,
          codeExample: `// React.memo (component memoization)
const ExpensiveComponent = React.memo(({ data }) => {
  return <div>{/* expensive render */}</div>;
});
// Only re-renders if 'data' prop changes

// useMemo (value memoization)
const MemoExample = ({ items }) => {
  const total = useMemo(() => {
    return items.reduce((sum, item) => sum + item.price, 0);
  }, [items]); // Only recalculate if items change
  return <div>Total: {total}</div>;
};

// useCallback (function memoization)
const CallbackExample = ({ onSubmit }) => {
  const handleClick = useCallback(() => {
    onSubmit();
  }, [onSubmit]); // Same function reference unless onSubmit changes
  return <button onClick={handleClick}>Submit</button>;
};

// Code splitting
const LazyComponent = React.lazy(() => import('./HeavyComponent'));
function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}

// Route-based code splitting
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));

// Bundle size optimization:
// 1. Tree shaking (remove unused code)
import { debounce } from 'lodash-es'; // ✅ ES modules
// import _ from 'lodash'; // ❌ imports everything

// 2. Dynamic imports
if (user.isAdmin) {
  const AdminPanel = await import('./AdminPanel');
}

// 3. Analyze bundle
// npm install --save-dev webpack-bundle-analyzer
// Add to webpack config

// Core Web Vitals:
// LCP (Largest Contentful Paint): <2.5s
//   - Optimize images, use CDN, lazy load
// FID (First Input Delay): <100ms
//   - Reduce JS execution time, code split
// CLS (Cumulative Layout Shift): <0.1
//   - Set image dimensions, avoid dynamic content shifts`,
          complexity: 'Performance: Measure before optimizing (profiler)',
          resources: `• React DevTools Profiler
• Lighthouse (Chrome DevTools)
• web.dev/vitals
• webpack-bundle-analyzer`
        }
      },
      {
        id: 'iv_js_7',
        title: 'Security — XSS, CSRF, SQL injection, OWASP Top 10 mitigations',
        time: '10 min',
        tag: 'study',
        details: {
          keyConcepts: `• XSS (Cross-Site Scripting): Inject malicious scripts into web pages
• CSRF (Cross-Site Request Forgery): Trick user into unwanted actions
• SQL Injection: Inject malicious SQL queries
• OWASP Top 10: Most critical web security risks
• Mitigations: Input validation, sanitization, CSP, HTTPS, parameterized queries`,
          questions: `• What is XSS and how do you prevent it?
• Explain CSRF and its mitigation
• How does SQL injection work?
• What are the OWASP Top 10?`,
          codeExample: `// XSS (Cross-Site Scripting)
// ❌ Vulnerable to XSS
const userInput = '<script>alert("XSS")</script>';
div.innerHTML = userInput; // executes script!

// ✅ Sanitize user input
import DOMPurify from 'dompurify';
div.innerHTML = DOMPurify.sanitize(userInput);

// React automatically escapes JSX
<div>{userInput}</div> // safe, rendered as text

// ❌ Dangerous in React:
<div dangerouslySetInnerHTML={{__html: userInput}} />

// CSRF (Cross-Site Request Forgery)
// ❌ Vulnerable:
// User logged into bank.com
// Visits evil.com which has:
<img src="https://bank.com/transfer?to=attacker&amount=1000" />

// ✅ Mitigation: CSRF token
// Server generates token, client includes in requests
fetch('/api/transfer', {
  method: 'POST',
  headers: {
    'X-CSRF-Token': csrfToken,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ to: 'user', amount: 100 })
});

// SQL Injection
// ❌ Vulnerable:
const query = \`SELECT * FROM users WHERE id = \${userId}\`;
// If userId = "1 OR 1=1", returns all users!

// ✅ Use parameterized queries
const query = 'SELECT * FROM users WHERE id = ?';
db.query(query, [userId]);

// OWASP Top 10 (2021):
1. Broken Access Control
2. Cryptographic Failures
3. Injection (SQL, NoSQL, OS command)
4. Insecure Design
5. Security Misconfiguration
6. Vulnerable Components
7. Authentication Failures
8. Software and Data Integrity Failures
9. Logging and Monitoring Failures
10. Server-Side Request Forgery (SSRF)

// Security best practices:
// - Use HTTPS everywhere
// - Set Content Security Policy (CSP) headers
// - Validate and sanitize all inputs
// - Use authentication libraries (don't roll your own)
// - Keep dependencies updated
// - Use environment variables for secrets
// - Enable rate limiting
// - Log security events`,
          complexity: 'Security: Always assume user input is malicious',
          resources: `• OWASP Top 10
• Content Security Policy (CSP)
• DOMPurify for sanitization
• OWASP Cheat Sheet Series`
        }
      },
      {
        id: 'iv_js_8',
        title: 'Testing — testing pyramid, unit vs integration vs E2E, what to mock',
        time: '10 min',
        tag: 'study',
        details: {
          keyConcepts: `• Testing Pyramid: Many unit tests, fewer integration, few E2E
• Unit Tests: Test individual functions/components in isolation (fast)
• Integration Tests: Test multiple units working together
• E2E Tests: Test full user flows (slow, brittle)
• Mocking: Replace dependencies with test doubles
• Coverage: Aim for 80%+ on critical paths, not 100%`,
          questions: `• Explain the testing pyramid
• When do you mock vs use real dependencies?
• What's the difference between unit and integration tests?
• How do you test async code?`,
          codeExample: `// Unit test (Jest + React Testing Library)
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

test('button increments counter', async () => {
  render(<Counter />);
  const button = screen.getByRole('button', { name: /increment/i });
  const count = screen.getByText(/count: 0/i);

  await userEvent.click(button);
  expect(screen.getByText(/count: 1/i)).toBeInTheDocument();
});

// Integration test (API + DB)
test('creates user and returns 201', async () => {
  const response = await request(app)
    .post('/api/users')
    .send({ name: 'Alice', email: 'alice@example.com' });

  expect(response.status).toBe(201);
  expect(response.body).toHaveProperty('id');

  // Verify in DB
  const user = await db.users.findOne({ email: 'alice@example.com' });
  expect(user.name).toBe('Alice');
});

// E2E test (Playwright/Cypress)
test('user can login and view dashboard', async ({ page }) => {
  await page.goto('/login');
  await page.fill('input[name="email"]', 'user@example.com');
  await page.fill('input[name="password"]', 'password123');
  await page.click('button[type="submit"]');

  await expect(page).toHaveURL('/dashboard');
  await expect(page.locator('h1')).toContainText('Dashboard');
});

// Mocking
// ✅ Mock external dependencies
jest.mock('./api');
test('fetches user data', async () => {
  api.fetchUser.mockResolvedValue({ id: 1, name: 'Alice' });
  const user = await getUserData(1);
  expect(user.name).toBe('Alice');
});

// ❌ Don't mock everything
// Mock: External APIs, databases, timers, random values
// Don't mock: Pure functions, business logic

// Testing pyramid:
//       /\\
//      /E2E\\     ← 10% (slow, brittle)
//     /------\\
//    /Integr.\\   ← 20% (medium speed)
//   /----------\\
//  /    Unit    \\ ← 70% (fast, reliable)
// /--------------\\`,
          complexity: 'Test Coverage: Focus on critical paths, not 100%',
          resources: `• Jest documentation
• React Testing Library
• Playwright/Cypress for E2E
• Kent C. Dodds: "Write tests, not too many, mostly integration"`
        }
      },
    ],
  },
  {
    id: 'behavioral',
    title: 'Behavioral',
    tasks: [
      {
        id: 'iv_bh_1',
        title: 'Tell me about yourself — 90-second pitch: background, impact, why this role',
        time: '10 min',
        tag: 'practice',
        details: {
          keyConcepts: `• Structure: Present (current role) → Past (journey) → Future (why this role)
• Keep it to 60-90 seconds
• Focus on professional highlights, not personal life story
• Connect your experience to the role you're interviewing for
• End with enthusiasm for the opportunity`,
          questions: `Common variations:
• Walk me through your resume
• Tell me about your background
• How did you get into software engineering?`,
          codeExample: `"I'm currently a Senior Software Engineer at [Company], where I lead the development of our customer analytics platform. Over the past 2 years, I've built a real-time data pipeline that processes 10M events daily and reduced query latency by 70%.

Before this, I worked at [Previous Company] where I grew from a junior engineer to tech lead, working on their e-commerce checkout system that handles $50M in annual transactions.

I'm particularly drawn to [Target Company] because of your focus on [specific technology/mission]. I've been following your engineering blog and was impressed by your approach to [specific technical decision]. This role excites me because it combines my experience in [skill 1] and [skill 2] while giving me the opportunity to work on [specific challenge mentioned in job description]."

Key elements:
✓ Current role + impact (numbers)
✓ Career progression
✓ Specific company knowledge
✓ Connect skills to role requirements
✓ Genuine enthusiasm`,
          complexity: 'Duration: 60-90 seconds',
          resources: `• Practice out loud 5+ times
• Record yourself and listen back
• Tailor to each company
• Avoid: age, personal details, negative comments`
        }
      },
      {
        id: 'iv_bh_2',
        title: 'Greatest achievement — STAR story with measurable outcome',
        time: '10 min',
        tag: 'practice',
        details: {
          keyConcepts: `• STAR Method:
  - Situation: Set the context (1-2 sentences)
  - Task: Your responsibility/challenge
  - Action: What YOU did (most important part)
  - Result: Measurable outcome, impact

• Focus on YOUR actions, not team's
• Use metrics: performance, revenue, time saved, users impacted
• Choose technical + leadership story
• Be ready to go deeper on any part`,
          questions: `Variations:
• Tell me about a time you were proud of your work
• What's your most impactful project?
• Describe a technical challenge you solved`,
          codeExample: `STAR Example:

Situation: "Our mobile app had a 40% crash rate on Android devices, causing 100+ negative reviews weekly and impacting user retention."

Task: "As the senior mobile engineer, I was tasked with identifying root causes and reducing crashes to industry standard (<1%) within 2 months."

Action: "I took a systematic approach:
1. Set up crash reporting with Sentry to categorize issues
2. Found that 80% of crashes came from 3 specific scenarios
3. Implemented null checks and better error boundaries
4. Added E2E tests for those critical paths
5. Worked with QA to expand device coverage testing
6. Deployed gradual rollout to monitor impact"

Result: "Within 6 weeks, we reduced crashes from 40% to 0.8%, app rating improved from 3.2 to 4.6 stars, and retention increased by 25%. The patterns I documented became our team's standard for defensive coding."

Tips:
✓ Use "I" not "we" for your actions
✓ Include numbers (%, time, $, users)
✓ Show ownership and initiative
✓ Explain technical decisions
✓ Mention lasting impact`,
          complexity: 'Preparation: Have 3-5 STAR stories ready',
          resources: `• Prepare stories for: achievement, failure, conflict, leadership, technical challenge
• Practice saying them out loud
• Keep results quantifiable`
        }
      },
      {
        id: 'iv_bh_3',
        title: 'Conflict or disagreement — show empathy, outcome, what you learned',
        time: '10 min',
        tag: 'practice',
        details: {
          keyConcepts: `• Show maturity: Acknowledge both perspectives
• Demonstrate empathy and active listening
• Focus on resolution, not blame
• Highlight collaboration and compromise
• Reflect on what you learned
• Avoid: Blaming others, ego, unresolved conflicts`,
          questions: `Variations:
• Tell me about a time you disagreed with a team member
• Describe a conflict at work
• How do you handle disagreements?`,
          codeExample: `STAR Example:

Situation: "During a sprint planning, I proposed using GraphQL for our new API, but our tech lead insisted on REST because the team was more familiar with it."

Task: "I needed to either advocate for my technical choice or find a solution that addressed both concerns."

Action: "Rather than pushing back immediately, I:
1. Asked to understand their concerns: team velocity and learning curve
2. Proposed a spike: build a small proof-of-concept in GraphQL (2 days)
3. Created a side-by-side comparison doc: dev time, performance, maintainability
4. Offered to lead a tech talk to share knowledge with the team
5. Suggested we use REST for this project but revisit GraphQL for the next one with more prep time"

Result: "The tech lead appreciated the data-driven approach. We went with REST for that project but I ran the GraphQL workshop. 3 months later, when we started a new microservice, the team voted to use GraphQL and I mentored them through it."

What I learned: "Technical decisions aren't just about 'right' technology—they're about timing, team readiness, and buy-in. Sometimes the best outcome is planting seeds for future improvements."

Red flags to avoid:
❌ "My manager was wrong and I was right"
❌ "I quit because of the disagreement"
❌ "We never resolved it"`,
          complexity: 'Focus: Resolution > being right',
          resources: `• Show emotional intelligence
• Demonstrate humility
• Emphasize learning and growth`
        }
      },
      {
        id: 'iv_bh_4',
        title: 'Failure or mistake — honest story, accountability, fix and lesson',
        time: '10 min',
        tag: 'practice',
        details: {
          keyConcepts: `• Choose a real failure (not a humble brag)
• Own your mistake completely (no excuses)
• Show how you fixed it quickly
• Explain what you learned
• Demonstrate growth from the experience
• Avoid: Catastrophic failures, blaming others, repeating mistakes`,
          questions: `Variations:
• Tell me about a time you failed
• What's your biggest mistake?
• Describe a time something went wrong`,
          codeExample: `STAR Example:

Situation: "I was leading a database migration from MySQL to PostgreSQL for our 5M user app."

Task: "My responsibility was to ensure zero downtime and data integrity during migration."

Action (The Mistake): "I tested the migration script thoroughly in staging, but I didn't account for production having 10x more data. During the migration, the script hit a timeout and rolled back, causing 20 minutes of downtime during peak hours."

Action (The Fix): "I immediately:
1. Rolled back to MySQL to restore service
2. Communicated transparently with stakeholders
3. Analyzed what went wrong: batch size was too large
4. Rewrote the script to migrate in smaller chunks with checkpoints
5. Added monitoring and kill switches
6. Scheduled migration during low-traffic hours
7. Had rollback plan ready and tested"

Result: "The second migration succeeded with zero downtime. I documented the incident and created a runbook for future migrations."

What I learned: "Production is not staging at scale—I now always do load testing and have circuit breakers. I also learned the importance of communication during incidents: transparency builds trust."

Good failures to share:
✓ Early-career mistakes with clear learning
✓ Technical debt you created but later fixed
✓ Underestimating complexity

Bad examples:
❌ Legal/ethical violations
❌ Repeated mistakes
❌ Blaming teammates`,
          complexity: 'Honesty + accountability + growth mindset',
          resources: `• Everyone fails—shows you're human
• Focus on learning, not the failure
• Demonstrate you won't repeat it`
        }
      },
      {
        id: 'iv_bh_5',
        title: 'Leadership / influence without authority — show senior-level impact',
        time: '10 min',
        tag: 'practice',
        details: {
          keyConcepts: `• Leadership ≠ Management: You don't need a title to lead
• Influence through: technical excellence, mentorship, process improvement
• Show initiative: identify problem → propose solution → drive execution
• Cross-functional collaboration
• Raising the bar for the team`,
          questions: `Variations:
• Tell me about a time you led a project
• How do you influence without authority?
• Describe a time you mentored someone`,
          codeExample: `STAR Example:

Situation: "Our team had no code review standards. Reviews were inconsistent—some took 2 days, others 2 weeks. Junior engineers weren't getting feedback."

Task: "As a senior IC (not a manager), I wanted to improve code quality and team velocity."

Action (Leadership without authority):
1. Gathered data: analyzed 100 PRs to identify patterns
2. Drafted a lightweight code review guide (not a mandate)
3. Presented findings in team meeting: "Average PR wait time is 3.5 days"
4. Proposed experiment: "Let's try these guidelines for 2 sprints"
5. Led by example: reviewed PRs within 24hrs with constructive feedback
6. Paired with junior engineers to teach review best practices
7. Collected feedback and iterated on the process

Result: "After 2 months:
• Average review time dropped from 3.5 days to 8 hours
• Bug rate decreased by 30%
• Junior engineers reported feeling more supported
• The guide was adopted company-wide by eng leadership"

Key leadership traits shown:
✓ Identified problem independently
✓ Used data to persuade
✓ Built consensus, not mandated
✓ Led by example
✓ Mentored others
✓ Measured impact

Other leadership examples:
• Championed a technical initiative (e.g., migrating to TypeScript)
• Organized a reading group or tech talks
• Improved onboarding for new hires
• Resolved a cross-team dependency issue`,
          complexity: 'Senior engineers lead through influence, not authority',
          resources: `• "The Manager's Path" by Camille Fournier
• Focus on initiative and impact
• Show you raise the bar for the team`
        }
      },
      {
        id: 'iv_bh_6',
        title: 'Why do you want to leave? — positive, forward-looking framing',
        time: '5 min',
        tag: 'practice',
        details: {
          keyConcepts: `• Frame it positively: seeking growth, not escaping problems
• Focus on PULL factors (what attracts you) not PUSH factors (what's wrong)
• Be honest but diplomatic
• Show appreciation for current role
• Connect to the new opportunity`,
          questions: `Variations:
• Why are you looking for a new job?
• What's prompting this change?
• What are you looking for in your next role?`,
          codeExample: `Good Answers:

1. Growth-focused:
"I've learned a lot at [Current Company] and grown from junior to senior engineer. Now I'm ready for the next challenge—working on distributed systems at scale. [Target Company]'s work on [specific technology] aligns perfectly with where I want to grow."

2. Mission-driven:
"I want to work on products that have direct user impact. While I've enjoyed building internal tools, I'm excited about [Target Company]'s mission to [specific mission] and the opportunity to contribute to a product used by millions."

3. Technical challenge:
"My current role has been great for learning [skill], but I'm looking for opportunities to work with [new technology/domain]. [Target Company]'s tech stack and problems around [specific challenge] are exactly what I want to dive into."

Red flags to avoid:
❌ Badmouthing current company/manager
❌ "I'm bored" / "Not challenged"
❌ Focusing only on money
❌ "I don't get along with my team"
❌ "I want better work-life balance" (even if true)

Safe reasons to mention:
✓ Seeking new technical challenges
✓ Company/product mission alignment
✓ Career growth opportunities
✓ Interested in target company's tech stack
✓ Want to work on specific problem domain
✓ Startup → big company (or vice versa) for learning

If you were laid off:
"Due to company restructuring, my role was eliminated. While I'm sad to leave, I'm excited for this opportunity to [positive future]."`,
          complexity: 'Stay positive, future-focused',
          resources: `• Be honest but diplomatic
• Never badmouth previous employer
• Focus on opportunity, not escape`
        }
      },
      {
        id: 'iv_bh_7',
        title: 'Why this company? — product knowledge, specific team, genuine reason',
        time: '5 min',
        tag: 'practice',
        details: {
          keyConcepts: `• Research the company: product, tech stack, engineering blog, recent news
• Be specific: mention actual projects, blog posts, or features
• Show genuine interest (not generic)
• Connect to your skills and interests
• Avoid: generic answers, only money, "great culture"`,
          questions: `Variations:
• Why do you want to work here?
• What interests you about this role?
• Why [Company Name]?`,
          codeExample: `Bad Answers:
❌ "I heard you have great benefits"
❌ "You're a leader in the industry"
❌ "I want to work at a FAANG company"
❌ "The job posting looked interesting"

Good Answer Template:

"I'm excited about [Company] for three main reasons:

1. Product/Mission:
   [Specific feature or mission you care about]
   Example: "I'm a daily user of your product and I'm impressed by your recent [specific feature]. The focus on [specific aspect] resonates with me."

2. Technical Challenge:
   [Specific technical problem or stack]
   Example: "I read your blog post on [specific topic] and was fascinated by how you solved [problem] with [technology]. Working on [specific challenge] at this scale is exactly what I want to learn."

3. Team/Culture:
   [Specific person, value, or practice]
   Example: "I listened to your CTO's talk on [topic] and appreciated the emphasis on [value]. The fact that you invest in [practice like 20% time, open source, etc.] shows commitment to engineering excellence."

Real example:
"I've been using Stripe for side projects for years and I'm constantly impressed by the developer experience. I read your blog post on idempotency keys and how you handle edge cases at scale—that level of engineering rigor is what I want to be part of. Plus, this role would let me work on the payment infrastructure that powers millions of businesses, which feels meaningful."

Research checklist:
✓ Read 2-3 engineering blog posts
✓ Use the product (if possible)
✓ Check recent news/funding
✓ Find the team you're interviewing with
✓ Know the company's mission/values
✓ Prepare 2-3 specific reasons`,
          complexity: 'Specificity shows genuine interest',
          resources: `• Company engineering blog
• Product documentation
• Recent press releases
• Glassdoor for culture insights
• LinkedIn for team background`
        }
      },
    ],
  },
  {
    id: 'company',
    title: 'Company Research',
    tasks: [
      {
        id: 'iv_co_1',
        title: 'Read the company\'s engineering blog — note 2 interesting technical decisions',
        time: '15 min',
        tag: 'read',
        details: {
          keyConcepts: `• Find the engineering blog (usually at company.com/blog or eng.company.com)
• Read 2-3 recent technical posts
• Note interesting technical decisions or trade-offs
• Prepare to reference these in "Why this company?" answer
• Shows you did your homework and care about their engineering culture`,
          questions: `What to look for:
• Recent architecture decisions
• Open source projects they maintain
• Engineering values and practices
• Technical challenges they're solving
• Tools and technologies they use`,
          codeExample: `Research checklist:

✓ Engineering blog (2-3 posts)
  - Note: technical decision, trade-off, or challenge
  - Example: "I read your post on migrating to microservices..."

✓ Tech stack (from blog, job description, or LinkedIn)
  - Languages: Python, Go, TypeScript, etc.
  - Infrastructure: AWS, Kubernetes, etc.
  - Databases: PostgreSQL, Redis, etc.

✓ Open source contributions
  - Check GitHub org
  - Note any libraries they maintain

✓ Engineering values
  - Testing culture?
  - Code review practices?
  - Innovation time?

Example talking points:
"I noticed from your blog that you recently moved from monolith to microservices. The post about handling distributed transactions with Saga pattern was fascinating—I'd love to hear more about how that's working in production."

"I saw you open-sourced [library name]. I've actually used it in a side project and it solved [problem] elegantly."

Where to find blogs:
• company.com/blog/engineering
• eng.company.com
• medium.com/@companyname
• dev.to/companyname`,
          complexity: 'Shows genuine interest and preparation',
          resources: `• Check company's careers page
• Search "[company name] engineering blog"
• LinkedIn company page
• GitHub organization`
        }
      },
      {
        id: 'iv_co_2',
        title: 'Review the job description — map your experience to each requirement',
        time: '10 min',
        tag: 'read',
        details: {
          keyConcepts: `• Print or save the full job description
• Highlight key requirements (must-have vs nice-to-have)
• Map each requirement to your actual experience
• Prepare specific examples for each
• Identify gaps and think of transferable skills`,
          questions: `Job description sections to analyze:
• Required skills and experience
• Preferred qualifications
• Day-to-day responsibilities
• Team structure
• Technologies mentioned`,
          codeExample: `Job Description Mapping Template:

Job Requirement → Your Experience

1. "5+ years of JavaScript/TypeScript"
   → I have 6 years JS, 3 years TypeScript
   → Example: Built [project] in TypeScript with [framework]

2. "Experience with distributed systems"
   → Designed microservices architecture for [project]
   → Handled [specific challenge] with [solution]

3. "Strong understanding of databases"
   → Optimized PostgreSQL queries, reduced latency by 60%
   → Designed schema for [application]

4. "Mentorship and code review experience"
   → Mentored 3 junior engineers
   → Established code review guidelines for team

5. "CI/CD and DevOps experience"
   → ⚠️ Gap: Limited DevOps experience
   → Transferable: Set up GitHub Actions, familiar with Docker
   → Plan: Emphasize willingness to learn

Prepare STAR stories for top 3-4 requirements.

Questions to have ready:
• If they ask about requirement you're weak in:
  "I haven't worked extensively with [X], but I have experience with [similar Y] and I'm a quick learner. Could you tell me more about how you use [X] on the team?"

• Connect requirements to their challenges:
  "I noticed you mentioned [requirement]. In my current role, I've worked on [similar challenge]. How does this manifest on your team?"`,
          complexity: 'Preparation prevents "uh, let me think..." moments',
          resources: `• Save job description (they sometimes get updated)
• Highlight keywords
• Practice explaining your relevant experience`
        }
      },
      {
        id: 'iv_co_3',
        title: 'Check Glassdoor / Blind for real interview questions at this company',
        time: '10 min',
        tag: 'read',
        details: {
          keyConcepts: `• Glassdoor: Search company → Interviews tab
• Blind: Search "[company] interview"
• Levels.fyi: Interview experiences and compensation
• LeetCode: Company-tagged questions
• Note: Take with grain of salt (skewed toward negative/memorable experiences)`,
          questions: `What to look for:
• Interview format (number of rounds, types)
• Common technical questions asked
• Behavioral question patterns
• Coding platform used (CoderPad, HackerRank, etc.)
• Timeline (how long between rounds)
• Red flags or concerns`,
          codeExample: `Research sites:

1. Glassdoor (glassdoor.com)
   - Company → Interviews
   - Filter by role (e.g., "Software Engineer")
   - Note:
     * Interview process steps
     * Common questions
     * Difficulty rating
     * Timeline

2. Blind (teamblind.com)
   - Search "[Company] interview"
   - Recent experiences
   - Compensation discussion
   - Culture insights

3. Levels.fyi
   - Compensation data
   - Interview difficulty
   - Comparison across companies

4. LeetCode
   - Companies tab
   - Filter by frequency
   - Practice company-tagged problems

Example insights:
"Glassdoor says they ask a lot of system design questions, so I'll review those patterns."

"Blind mentions they use CoderPad for live coding—I'll practice there."

"Levels.fyi shows the process is: phone screen → coding → system design → behavioral → team fit."

Red flags to watch for:
🚩 Multiple reports of disorganized process
🚩 Long delays between rounds (>2 weeks)
🚩 Inconsistent feedback
🚩 Lowball offers

Green flags:
✅ Clear, structured process
✅ Timely communication
✅ Interviewers are engaged
✅ Fair technical questions`,
          complexity: 'Knowledge is power: know what to expect',
          resources: `• Glassdoor (interview reviews)
• Blind (anonymous discussion)
• Levels.fyi (comp + process)
• LeetCode (company questions)`
        }
      },
      {
        id: 'iv_co_4',
        title: 'Know the product — use it, understand its core value and tech stack',
        time: '15 min',
        tag: 'study',
        details: {
          keyConcepts: `• Actually use the product (sign up, explore features)
• Understand the user value proposition
• Identify 1-2 features you like
• Think of 1 improvement (be diplomatic)
• Know competitors and differentiation`,
          questions: `Product research questions:
• Who is the target user?
• What problem does it solve?
• What's the core value proposition?
• Who are the main competitors?
• What makes this product different?
• What's the tech stack (if public)?`,
          codeExample: `Product Research Checklist:

1. Use the product (15 min):
   ✓ Sign up / create account
   ✓ Complete main user flow
   ✓ Try 2-3 key features
   ✓ Note: What do you like? What's confusing?

2. Value proposition:
   - What problem does it solve?
   - Who is it for?
   - Example: "Stripe makes payment processing simple for developers"

3. Competitive landscape:
   - Who are the competitors?
   - What's different about this product?
   - Example: Stripe vs PayPal vs Square

4. Tech stack (if available):
   - Check BuiltWith, StackShare, or engineering blog
   - Note technologies you have experience with

5. Recent updates:
   - Check changelog, product blog, or Twitter
   - Example: "I saw you just launched [feature]—that's exciting because..."

Talking points:

✓ Genuine praise:
  "I really like how [feature] works because [reason]"

✓ Constructive feedback (be careful):
  "I noticed [minor UX issue]. Have you considered [suggestion]?"
  (Only if they ask "What would you improve?")

✓ Connection to your skills:
  "The real-time collaboration feature is impressive—I've worked on similar challenges with WebSockets at my current company."

❌ Don't:
  - Criticize harshly ("Your product is slow")
  - Compare negatively ("X competitor is better")
  - Claim you haven't used it ("I haven't had time to try it")`,
          complexity: 'Shows you care beyond just getting a job',
          resources: `• Product website and demo
• App Store / Play Store (read reviews)
• Product Hunt (if recently launched)
• Twitter/LinkedIn (recent announcements)
• BuiltWith or StackShare (tech stack)`
        }
      },
    ],
  },
  {
    id: 'questions',
    title: 'Questions to Ask',
    tasks: [
      {
        id: 'iv_qa_1',
        title: 'What does the on-call rotation look like for this team?',
        time: '—',
        tag: 'read',
        details: {
          keyConcepts: `Why ask: Understand work-life balance and production responsibility
Shows: You think about operational excellence
Listen for: Frequency, compensation, incident response process`,
          questions: `Follow-up questions:
• How often are you on-call? (weekly, monthly?)
• What's the average number of pages per week?
• Is there on-call compensation?
• What's the incident response process?
• How do you handle post-mortems?`,
          codeExample: `What you're evaluating:

Good signs:
✅ Structured rotation (e.g., 1 week every 6 weeks)
✅ On-call compensation (extra pay or time off)
✅ Low page frequency (good system stability)
✅ Clear escalation path
✅ Blameless post-mortems
✅ Investment in monitoring and alerting

Red flags:
🚩 "We're always on-call" (no rotation)
🚩 Frequent pages (nightly incidents)
🚩 No compensation for on-call
🚩 Blame culture
🚩 No incident process

Example answers you might hear:

"We rotate weekly, about every 8 weeks. On average, 1-2 pages per week, mostly minor. We compensate with extra PTO for each on-call week."
→ Reasonable

"On-call isn't too bad, maybe a few times a month."
→ Vague, probe deeper

"Honestly, we're firefighting a lot right now."
→ Red flag: technical debt or scaling issues

Related questions:
• "How do you balance feature work with operational stability?"
• "What's your approach to reducing toil?"
• "Do you have SRE or DevOps support?"`,
          complexity: 'Critical for senior engineers',
          resources: `• Acceptable on-call varies by company size and stage
• Startups often have more on-call
• Ask about support and tools (PagerDuty, runbooks)`
        }
      },
      {
        id: 'iv_qa_2',
        title: 'How do you measure the impact of a senior engineer here?',
        time: '—',
        tag: 'read',
        details: {
          keyConcepts: `Why ask: Understand expectations and growth criteria
Shows: You care about impact and leveling
Listen for: Specific criteria vs vague answers`,
          questions: `Follow-ups:
• What does success look like in this role after 6 months?
• How is performance evaluated?
• What are the expectations for senior vs staff engineer?
• Is there a formal rubric or framework?`,
          codeExample: `What you're evaluating:

Good signs:
✅ Clear expectations (technical + leadership)
✅ Specific examples of senior engineer impact
✅ Documented engineering levels
✅ Focus on outcomes, not just output
✅ Mentorship and influence valued

Red flags:
🚩 "We don't really have levels"
🚩 Only measures lines of code or tickets closed
🚩 Unclear promotion criteria
🚩 "Just get things done"

Example answers:

"Senior engineers are expected to:
• Drive projects end-to-end with minimal guidance
• Mentor 1-2 junior engineers
• Contribute to architectural decisions
• Improve team processes
We have a documented career ladder and bi-annual reviews."
→ Clear expectations

"You'll be measured on delivering features and code quality."
→ Vague, lacks leadership component

"Honestly, we're still figuring out our leveling."
→ Red flag for career growth

What impact looks like (senior level):
• Technical: Architecture, performance, reliability
• Leadership: Mentorship, code review, technical direction
• Process: Improve team velocity, reduce toil
• Communication: Documentation, RFCs, tech talks

Related questions:
• "Can you share an example of a recent senior engineer promotion?"
• "What does the path to staff engineer look like?"
• "How do you support professional development?"`,
          complexity: 'Ensures you can grow in the role',
          resources: `• progression.fyi (engineering career ladders)
• Ask to see their engineering ladder
• Levels should be documented and transparent`
        }
      },
      {
        id: 'iv_qa_3',
        title: 'What is the biggest technical challenge the team is facing right now?',
        time: '—',
        tag: 'read',
        details: {
          keyConcepts: `Why ask: Understand real problems you'll work on
Shows: Interest in technical complexity
Listen for: Specific challenges and how they're approaching them`,
          questions: `Follow-ups:
• How are you approaching this challenge?
• What's the current status?
• What skills would be most valuable for solving this?
• Is this a short-term or long-term problem?`,
          codeExample: `What you're evaluating:

Good signs:
✅ Specific, interesting technical problems
✅ Clear understanding of the challenge
✅ Thoughtful approach to solving it
✅ Aligns with your interests/skills
✅ Opportunity to make impact

Red flags:
🚩 "We don't have any major challenges"
🚩 Vague or hand-wavy description
🚩 Problem is due to organizational dysfunction
🚩 Tech debt with no plan to address it

Example answers:

"We're scaling from 1M to 10M users and our database is becoming a bottleneck. We're exploring sharding strategies and evaluating NewSQL options like CockroachDB."
→ Specific, technical, growth challenge

"Our biggest challenge is just keeping up with feature requests."
→ Operational challenge, may lack technical depth

"Honestly, our codebase is a mess and we need to rewrite everything."
→ Red flag: technical debt, may be frustrating

What this reveals:
• Technical sophistication
• Growth stage (scaling vs building)
• Engineering priorities
• Type of work you'll do

Good challenges to hear:
✓ Scaling infrastructure
✓ Performance optimization
✓ Architectural migration
✓ Building new systems
✓ Complex algorithmic problems

Questions you might ask back:
• "I've worked on similar scaling challenges with [technology]. Would that experience be relevant?"
• "How is the team structured to tackle this?"
• "What's the timeline for solving this?"`,
          complexity: 'Shows what you\'ll actually work on',
          resources: `• Listen for: scale, complexity, technology
• Assess if the challenge excites you
• Consider if you have relevant experience`
        }
      },
      {
        id: 'iv_qa_4',
        title: 'How does the team handle technical debt vs feature velocity?',
        time: '—',
        tag: 'read',
        details: {
          keyConcepts: `Why ask: Understand engineering culture and priorities
Shows: You think long-term, care about code quality
Listen for: Balance, process, engineering buy-in`,
          questions: `Follow-ups:
• Do you allocate dedicated time for tech debt?
• How do you prioritize what to fix?
• Can engineers propose tech debt work?
• What's the PM/engineering relationship like?`,
          codeExample: `What you're evaluating:

Good signs:
✅ Intentional balance (e.g., 80/20 or 70/30 split)
✅ Engineers can advocate for tech debt work
✅ Regular refactoring sprints
✅ Tech debt tracked and prioritized
✅ Engineering voice in roadmap decisions
✅ PM/Eng collaboration

Red flags:
🚩 "We only work on features" (unsustainable)
🚩 "We're always refactoring" (no progress)
🚩 No process for addressing tech debt
🚩 PM dictates everything
🚩 "We'll get to it later" (never happens)

Example answers:

"We allocate 20% of each sprint to tech debt, bugs, and tooling. Engineers propose debt work in our quarterly planning, and we have a shared priority list with product."
→ Healthy balance

"We mostly focus on shipping features, but engineers can take initiative on improvements."
→ Feature-driven, tech debt deprioritized

"We're drowning in tech debt right now and trying to dig out."
→ Red flag: past mistakes, may be frustrating

What balance looks like:
• 70-80% features, 20-30% tech debt/tooling (healthy)
• 50-50% (either early stage or recovering from debt)
• 100% features (unsustainable, burnout risk)
• 100% refactoring (no business progress)

Related questions:
• "Can you give an example of recent tech debt the team tackled?"
• "How do you prevent new tech debt?"
• "What's your testing/code review culture like?"`,
          complexity: 'Balance indicates engineering maturity',
          resources: `• Tech debt is normal, total absence is red flag
• Look for intentional management
• Engineering voice should be valued`
        }
      },
      {
        id: 'iv_qa_5',
        title: 'What does career growth look like from senior to staff here?',
        time: '—',
        tag: 'read',
        details: {
          keyConcepts: `Why ask: Understand long-term career path
Shows: Ambition, thinking beyond this role
Listen for: Clear path vs "it's possible"`,
          questions: `Follow-ups:
• How many staff engineers do you have?
• What's a typical timeline for that promotion?
• What's the difference between senior and staff expectations?
• Are there examples of recent promotions?
• Is there a formal promotion process?`,
          codeExample: `What you're evaluating:

Good signs:
✅ Clear staff engineer role and expectations
✅ Recent promotions from senior → staff
✅ Documented career ladder
✅ Examples of staff engineer impact
✅ Multiple paths (tech lead vs IC)
✅ Support for growth (mentorship, sponsorship)

Red flags:
🚩 "We don't really have staff engineers"
🚩 No clear path or examples
🚩 "It's very rare to get promoted"
🚩 Vague criteria ("just be excellent")
🚩 Only one person ever promoted

Example answers:

"We have 5 staff engineers out of 40 engineers. The jump from senior to staff typically takes 2-3 years and involves leading larger initiatives, mentoring multiple engineers, and influencing technical direction across teams. We just promoted two seniors last quarter."
→ Clear path, recent examples

"We have a few staff engineers. It's definitely possible but pretty rare."
→ Vague, unclear path

"We're still figuring out our staff role."
→ Early stage, no established path

Senior → Staff differences:
Senior:
• Lead projects within team
• Mentor 1-2 engineers
• Technical expertise in domain

Staff:
• Lead cross-team initiatives
• Set technical direction
• Influence org-wide decisions
• Multiply impact through others

Related questions:
• "What does a staff engineer's typical week look like?"
• "Is there a formal promotion process?"
• "How do you support engineers working toward staff level?"
• "What's the ratio of ICs to managers at senior+ levels?"`,
          complexity: 'Critical if you want to grow beyond senior',
          resources: `• StaffEng.com (staff engineer stories)
• progression.fyi (career ladders)
• "Staff Engineer" by Will Larson (book)`
        }
      },
    ],
  },
  {
    id: 'logistics',
    title: 'Logistics & Mindset',
    tasks: [
      {
        id: 'iv_lg_1',
        title: 'Confirm interview time, format (coding platform, video link, dress code)',
        time: '5 min',
        tag: 'read',
        details: {
          keyConcepts: `• Double-check time and timezone
• Confirm interview format (phone, video, in-person)
• Get video link or address in advance
• Ask about coding platform (CoderPad, HackerRank, etc.)
• Clarify dress code if unsure`,
          questions: `Email template to recruiter:

"Hi [Recruiter],

Thank you for scheduling my interview for [date/time]. I wanted to confirm a few details:

• Time: [X:XX PM] in [Timezone] — is this correct?
• Format: Will this be via Zoom/Google Meet? (Please share link)
• Coding platform: Will I need to code on a specific platform? (CoderPad, etc.)
• Preparation: Is there anything specific I should prepare or bring?

Looking forward to it!

[Your name]"`,
          codeExample: `Logistics checklist:

✓ Date and time confirmed
  - Convert to your timezone
  - Add calendar reminder 24hr and 1hr before

✓ Interview format
  - Phone screen: quiet location, good signal
  - Video: test camera, mic, background
  - In-person: address, parking, arrival time

✓ Video link
  - Get link 24hr in advance
  - Test link before interview
  - Have backup (phone number)

✓ Coding platform
  - CoderPad, HackerRank, Replit, etc.
  - Create account beforehand
  - Familiarize yourself with interface
  - Test on same browser/setup

✓ Attendees
  - Who will be interviewing you?
  - How many people?
  - Roles/titles?

✓ Duration
  - How long is the interview?
  - Should you block extra time?

✓ Dress code
  - Startup: business casual or casual
  - Enterprise: business casual
  - When in doubt: business casual
  - Video: solid colors, no busy patterns

Common platforms:
• CoderPad: collaborative coding
• HackerRank: timed challenges
• Karat: recorded video interviews
• Google Doc: system design diagramming
• Zoom/Google Meet: video calls

Timezone mistakes to avoid:
❌ "Interview at 2 PM" (whose timezone?)
✅ "Interview at 2 PM EST / 11 AM PST"`,
          complexity: 'Small details prevent big problems',
          resources: `• World Time Buddy (timezone converter)
• Test video calls with friend
• Practice on coding platform beforehand`
        }
      },
      {
        id: 'iv_lg_2',
        title: 'Test your setup — camera, microphone, internet, screen share',
        time: '10 min',
        tag: 'practice',
        details: {
          keyConcepts: `• Test all equipment 24hr before interview
• Have backup plan for every component
• Ensure stable internet connection
• Check audio quality
• Test screen sharing`,
          questions: `Setup test checklist:
• Camera: Is video clear? Lighting good?
• Microphone: Can you be heard clearly? No echo?
• Internet: Speed test, stable connection?
• Screen share: Can you share your screen?
• Battery/power: Fully charged or plugged in?`,
          codeExample: `Technical setup checklist:

✓ Camera
  - Is your face clearly visible?
  - Lighting: face the light source (window or lamp)
  - Avoid backlighting (bright window behind you)
  - Eye level or slightly above
  - Clean camera lens

✓ Microphone
  - Test audio levels
  - No echo or background noise?
  - Use headphones to prevent feedback
  - External mic > laptop mic (if available)

✓ Internet
  - Speed test: minimum 5 Mbps upload/download
  - Wired ethernet > WiFi (if possible)
  - Close bandwidth-heavy apps
  - Tell household: no streaming during interview
  - Backup: phone hotspot ready

✓ Screen share
  - Practice sharing screen
  - Know how to share entire screen vs window
  - Close unnecessary tabs/apps
  - Hide notifications (Do Not Disturb mode)
  - Clean desktop (professional appearance)

✓ Power
  - Laptop fully charged
  - Plugged in during interview
  - Phone charged (backup)

✓ Software
  - Browser updated
  - Zoom/Google Meet installed and updated
  - Coding platform account created
  - All apps tested 24hr before

Backup plans:
• Internet fails → use phone as hotspot
• Camera fails → audio-only call
• Laptop fails → join from phone
• Power outage → relocate to coffee shop (have address ready)

Test with a friend:
1. Schedule 15-min test call
2. Share screen and code together
3. Ask: "Can you see/hear me clearly?"
4. Practice coding on shared screen

Interview day setup (30 min before):
1. Restart computer
2. Close all apps except interview tools
3. Enable Do Not Disturb
4. Join meeting 5 min early (in waiting room)
5. Breathe`,
          complexity: 'Technical issues lose you points—test everything',
          resources: `• speedtest.net (internet speed)
• Zoom test meeting (test.zoom.us)
• Google Meet test (meet.google.com/test)
• Have recruiter's phone number for emergencies`
        }
      },
      {
        id: 'iv_lg_3',
        title: 'Prepare your workspace — water, notepad, quiet room, good lighting',
        time: '5 min',
        tag: 'practice',
        details: {
          keyConcepts: `• Find quiet, private space
• Minimize distractions
• Have materials ready
• Comfortable environment
• Professional background`,
          questions: `Workspace checklist:
• Location: Quiet, private, no interruptions?
• Background: Clean, professional, no clutter?
• Lighting: Face illuminated, no shadows?
• Comfort: Good chair, desk height, temperature?
• Materials: Water, notepad, pen ready?`,
          codeExample: `Physical workspace setup:

✓ Location
  - Quiet room with door (lock if possible)
  - Inform household: do not disturb
  - Silence phone/notifications
  - No pets/kids interruptions (arrange care)

✓ Background (what they see on camera)
  - Clean, uncluttered wall
  - Neutral colors
  - No personal items (posters, laundry, mess)
  - Natural light or lamp behind camera

✓ Lighting
  - Light source in front of you (not behind)
  - Face should be evenly lit
  - No harsh shadows
  - Natural window light (best) or desk lamp

✓ Desk setup
  - Eye-level monitor (not laptop on table)
  - External keyboard/mouse (if coding)
  - Comfortable chair
  - Tidy desk (not visible on camera but helps focus)

✓ Materials on desk
  - Glass of water (stay hydrated)
  - Notepad + pen (take notes, sketch ideas)
  - Resume (reference your experience)
  - Company research notes
  - Questions to ask list
  - Coding platform login info

✓ Environment
  - Comfortable temperature
  - Good ventilation
  - Minimal noise (close windows if street noise)

Virtual background?
• Usually OK if clean and professional
• Some people find them distracting
• Test beforehand
• Real background > virtual (more authentic)

Dress code:
• Business casual: collared shirt, solid colors
• Avoid: busy patterns, logos, wrinkled clothes
• Even if waist-down is sweatpants, top half matters
• Groom: hair, beard, professional appearance

Mental preparation:
• Arrive 5 min early
• Take 3 deep breaths before joining
• Smile (sets positive tone)
• Posture: sit up straight, engaged`,
          complexity: 'Environment affects performance',
          resources: `• Practice in the exact space you'll interview
• Do a mock interview with friend to test setup
• Professional appearance = professional mindset`
        }
      },
      {
        id: 'iv_lg_4',
        title: 'Sleep, eat, move — no all-nighter, light exercise, good meal before',
        time: '—',
        tag: 'read',
        details: {
          keyConcepts: `• Sleep 7-8 hours night before
• No cramming all night
• Light exercise day of interview
• Eat a good meal 1-2 hours before
• Stay hydrated`,
          questions: `Physical prep:
• When did you last eat?
• Are you well-rested?
• Have you moved your body today?
• Are you hydrated?`,
          codeExample: `Interview day wellness guide:

Night before (critical):
✓ Sleep 7-8 hours
  - No all-nighter cramming
  - Your brain needs rest to perform
  - Set alarm with backup

❌ Avoid:
  - Alcohol (affects sleep quality)
  - Late-night studying (diminishing returns)
  - New foods (avoid stomach issues)

Day of interview:

Morning (if interview is PM):
✓ Wake up at regular time
✓ Light exercise (15-30 min)
  - Walk, yoga, jog (not intense workout)
  - Reduces anxiety
  - Increases alertness
✓ Shower, groom, get dressed
✓ Review notes lightly (no cramming)

2 hours before:
✓ Eat a balanced meal
  - Protein + complex carbs (steady energy)
  - Examples: eggs + toast, chicken + rice
  - Avoid: heavy, greasy, or sugary food

❌ Avoid:
  - Empty stomach (low energy)
  - Too much caffeine (jitters)
  - New foods (digestive issues)

1 hour before:
✓ Bathroom break
✓ Drink water (not too much)
✓ Set up workspace
✓ Close eyes, take 10 deep breaths

30 min before:
✓ Final equipment check
✓ Light stretches (neck, shoulders)
✓ Positive self-talk: "I'm prepared. I got this."

During interview:
✓ Water nearby (sip between answers)
✓ Breathe (pause, think, then answer)
✓ Posture (sit up, stay engaged)

Anxiety management:
• It's normal to be nervous
• Anxiety = excitement (reframe it)
• Breathe deeply (4-7-8 technique)
• Remember: they want you to succeed

After interview:
✓ Decompress (walk, relax)
✓ Write down what went well
✓ Note areas to improve (for next time)
✓ Don't obsess over mistakes`,
          complexity: 'Peak performance requires physical readiness',
          resources: `• Sleep is more valuable than extra studying
• Exercise reduces anxiety
• You'll think clearer when rested and fed`
        }
      },
      {
        id: 'iv_lg_5',
        title: 'Write 3 things you are genuinely strong at — read before the interview',
        time: '5 min',
        tag: 'practice',
        details: {
          keyConcepts: `• Combat imposter syndrome
• Build confidence before interview
• Remind yourself of real strengths
• Ground yourself in facts, not anxiety
• Review right before interview starts`,
          questions: `Reflection prompts:
• What technical skills am I genuinely strong at?
• What problems have I solved that I'm proud of?
• What do teammates come to me for help with?
• What positive feedback have I received?`,
          codeExample: `Confidence exercise:

Write down 3 things you're strong at:

Example template:

1. [Technical skill/domain]
   Example: "I'm strong at debugging complex distributed systems"
   Evidence: "I've solved [specific problem] at [company] by [approach]"

2. [Soft skill/trait]
   Example: "I'm a clear communicator and good at explaining technical concepts"
   Evidence: "My code reviews are thorough and educational. I've mentored 3 junior engineers."

3. [Impact/achievement]
   Example: "I ship reliable, high-quality code"
   Evidence: "My features have <1% bug rate and I've built [X] used by [Y] users"

Your turn (fill this out):

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. I am strong at: ____________________
   Evidence: __________________________
   __________________________________

2. I am strong at: ____________________
   Evidence: __________________________
   __________________________________

3. I am strong at: ____________________
   Evidence: __________________________
   __________________________________
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Read this 5 min before interview.

Why this works:
• Shifts mindset from fear to confidence
• Grounds you in facts (actual achievements)
• Combats imposter syndrome
• Reminds you: "I belong here"

Imposter syndrome is real:
• Everyone feels it (even senior engineers)
• You earned this interview
• They're looking for someone like you
• Worst case: it's practice for next interview

Positive affirmations:
• "I'm prepared"
• "I have valuable experience"
• "It's okay to not know everything"
• "I'll learn from this either way"
• "They want me to succeed"

Remember:
✓ You don't need to be perfect
✓ Thinking out loud is valued
✓ Asking clarifying questions shows thoughtfulness
✓ "I don't know, but here's how I'd figure it out" is OK
✓ The interviewer was once in your shoes`,
          complexity: 'Confidence comes from facts, not wishful thinking',
          resources: `• Imposter syndrome affects 70% of people
• You're more qualified than you think
• Keep this note on your desk during interview`
        }
      },
    ],
  },
];
