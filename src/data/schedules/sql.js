export const DAYS = [
  // ── MONTH 1: SQL FOUNDATIONS ─────────────────────────────────────────

  // Week 1 — Basic SELECT & Filtering
  { day: 1,  week: 1, month: 1, tasks: [
    { id: 'sql_d1_1',  title: 'Study: SELECT, FROM, WHERE — the anatomy of a SQL query', time: '40 min', tag: 'study' },
    { id: 'sql_d1_2',  title: 'Practice: Write 10 basic SELECT queries on a sample database', time: '35 min', tag: 'practice' },
  ]},
  { day: 2,  week: 1, month: 1, tasks: [
    { id: 'sql_d2_1',  title: 'Study: Comparison operators, BETWEEN, IN, LIKE, IS NULL', time: '35 min', tag: 'study' },
    { id: 'sql_d2_2',  title: 'Practice: Filter a products table using each operator type', time: '30 min', tag: 'practice' },
  ]},
  { day: 3,  week: 1, month: 1, tasks: [
    { id: 'sql_d3_1',  title: 'Study: ORDER BY (ASC/DESC), LIMIT, OFFSET — paginate results', time: '30 min', tag: 'study' },
    { id: 'sql_d3_2',  title: 'Build: Pagination query for a blog posts table', time: '35 min', tag: 'build' },
  ]},
  { day: 4,  week: 1, month: 1, tasks: [
    { id: 'sql_d4_1',  title: 'Study: DISTINCT, AND, OR, NOT — eliminate duplicates and combine conditions', time: '30 min', tag: 'study' },
    { id: 'sql_d4_2',  title: 'Practice: Write 5 queries combining multiple WHERE conditions', time: '30 min', tag: 'practice' },
  ]},
  { day: 5,  week: 1, month: 1, tasks: [
    { id: 'sql_d5_1',  title: 'Study: String functions — UPPER, LOWER, LENGTH, TRIM, CONCAT, SUBSTRING', time: '35 min', tag: 'study' },
    { id: 'sql_d5_2',  title: 'Practice: Transform customer name and email data using string functions', time: '30 min', tag: 'practice' },
  ]},
  { day: 6,  week: 1, month: 1, tasks: [
    { id: 'sql_d6_1',  title: 'Study: Date functions — NOW(), DATE_TRUNC, EXTRACT, AGE, date arithmetic', time: '40 min', tag: 'study' },
    { id: 'sql_d6_2',  title: 'Practice: Query orders from the last 30 days, group by month', time: '30 min', tag: 'practice' },
  ]},
  { day: 7,  week: 1, month: 1, tasks: [
    { id: 'sql_d7_1',  title: 'Build: Create a sample e-commerce schema and insert 50 rows of data', time: '50 min', tag: 'build' },
    { id: 'sql_d7_2',  title: 'Review: Write a cheat sheet of Week 1 SQL syntax', time: '20 min', tag: 'read' },
  ]},

  // Week 2 — Aggregations & Grouping
  { day: 8,  week: 2, month: 1, tasks: [
    { id: 'sql_d8_1',  title: 'Study: COUNT, SUM, AVG, MIN, MAX — aggregate functions explained', time: '35 min', tag: 'study' },
    { id: 'sql_d8_2',  title: 'Practice: Compute sales metrics (total revenue, avg order, max order) per customer', time: '30 min', tag: 'practice' },
  ]},
  { day: 9,  week: 2, month: 1, tasks: [
    { id: 'sql_d9_1',  title: 'Study: GROUP BY — group rows and aggregate per group', time: '35 min', tag: 'study' },
    { id: 'sql_d9_2',  title: 'Practice: Group sales by category, region, and month', time: '30 min', tag: 'practice' },
  ]},
  { day: 10, week: 2, month: 1, tasks: [
    { id: 'sql_d10_1', title: 'Study: HAVING vs WHERE — filter groups vs filter rows', time: '30 min', tag: 'study' },
    { id: 'sql_d10_2', title: 'Practice: Find categories with more than 10 products and avg price > $50', time: '30 min', tag: 'practice' },
  ]},
  { day: 11, week: 2, month: 1, tasks: [
    { id: 'sql_d11_1', title: 'Study: CASE WHEN — conditional logic inside SQL queries', time: '35 min', tag: 'study' },
    { id: 'sql_d11_2', title: 'Build: Customer segmentation query using CASE WHEN (low/mid/high spender)', time: '35 min', tag: 'build' },
  ]},
  { day: 12, week: 2, month: 1, tasks: [
    { id: 'sql_d12_1', title: 'Study: COALESCE, NULLIF, GREATEST, LEAST — handle NULLs and edge cases', time: '30 min', tag: 'study' },
    { id: 'sql_d12_2', title: 'Practice: Fix 5 queries that break on NULL input', time: '30 min', tag: 'practice' },
  ]},
  { day: 13, week: 2, month: 1, tasks: [
    { id: 'sql_d13_1', title: 'Study: ROLLUP and CUBE — multi-level aggregation', time: '35 min', tag: 'study' },
    { id: 'sql_d13_2', title: 'Practice: Generate a sales summary with subtotals using ROLLUP', time: '30 min', tag: 'practice' },
  ]},
  { day: 14, week: 2, month: 1, tasks: [
    { id: 'sql_d14_1', title: 'Build: Full sales report query — revenue, growth, top categories', time: '55 min', tag: 'build' },
    { id: 'sql_d14_2', title: 'Review: Write summary of aggregation patterns and gotchas', time: '20 min', tag: 'read' },
  ]},

  // Week 3 — JOINs
  { day: 15, week: 3, month: 1, tasks: [
    { id: 'sql_d15_1', title: 'Study: INNER JOIN — return only matching rows from both tables', time: '35 min', tag: 'study' },
    { id: 'sql_d15_2', title: 'Practice: Join orders with customers and products in one query', time: '35 min', tag: 'practice' },
  ]},
  { day: 16, week: 3, month: 1, tasks: [
    { id: 'sql_d16_1', title: 'Study: LEFT JOIN and RIGHT JOIN — keep unmatched rows', time: '35 min', tag: 'study' },
    { id: 'sql_d16_2', title: 'Practice: Find customers who have never placed an order using LEFT JOIN', time: '30 min', tag: 'practice' },
  ]},
  { day: 17, week: 3, month: 1, tasks: [
    { id: 'sql_d17_1', title: 'Study: FULL OUTER JOIN and CROSS JOIN — all combinations', time: '30 min', tag: 'study' },
    { id: 'sql_d17_2', title: 'Practice: Generate a matrix of all products vs all regions using CROSS JOIN', time: '30 min', tag: 'practice' },
  ]},
  { day: 18, week: 3, month: 1, tasks: [
    { id: 'sql_d18_1', title: 'Study: Self JOIN — join a table to itself (employees → managers)', time: '35 min', tag: 'study' },
    { id: 'sql_d18_2', title: 'Build: Org chart query using self-join on employees table', time: '35 min', tag: 'build' },
  ]},
  { day: 19, week: 3, month: 1, tasks: [
    { id: 'sql_d19_1', title: 'Study: JOIN on multiple conditions and non-equi joins', time: '30 min', tag: 'study' },
    { id: 'sql_d19_2', title: 'Practice: Find products in the same price range using a range join', time: '30 min', tag: 'practice' },
  ]},
  { day: 20, week: 3, month: 1, tasks: [
    { id: 'sql_d20_1', title: 'Study: JOIN performance — why order matters, index on FK columns', time: '35 min', tag: 'study' },
    { id: 'sql_d20_2', title: 'Practice: Compare EXPLAIN output of indexed vs non-indexed joins', time: '35 min', tag: 'practice' },
  ]},
  { day: 21, week: 3, month: 1, tasks: [
    { id: 'sql_d21_1', title: 'Build: Complex 4-table JOIN query — orders, customers, products, categories', time: '55 min', tag: 'build' },
    { id: 'sql_d21_2', title: 'Review: Draw a Venn diagram of every JOIN type from memory', time: '15 min', tag: 'read' },
  ]},

  // Week 4 — Subqueries, CTEs & Set Operations
  { day: 22, week: 4, month: 1, tasks: [
    { id: 'sql_d22_1', title: 'Study: Scalar and row subqueries in SELECT and WHERE', time: '35 min', tag: 'study' },
    { id: 'sql_d22_2', title: 'Practice: Find products priced above the average using a subquery', time: '30 min', tag: 'practice' },
  ]},
  { day: 23, week: 4, month: 1, tasks: [
    { id: 'sql_d23_1', title: 'Study: Correlated subqueries — reference the outer query row by row', time: '40 min', tag: 'study' },
    { id: 'sql_d23_2', title: 'Practice: Find the most recent order per customer using correlated subquery', time: '35 min', tag: 'practice' },
  ]},
  { day: 24, week: 4, month: 1, tasks: [
    { id: 'sql_d24_1', title: 'Study: EXISTS and NOT EXISTS — efficient existence checks', time: '30 min', tag: 'study' },
    { id: 'sql_d24_2', title: 'Practice: Replace IN with EXISTS and compare EXPLAIN output', time: '30 min', tag: 'practice' },
  ]},
  { day: 25, week: 4, month: 1, tasks: [
    { id: 'sql_d25_1', title: 'Study: CTEs (WITH clause) — named subqueries for readability', time: '35 min', tag: 'study' },
    { id: 'sql_d25_2', title: 'Build: Rewrite a deeply nested subquery as a clean multi-CTE query', time: '40 min', tag: 'build' },
  ]},
  { day: 26, week: 4, month: 1, tasks: [
    { id: 'sql_d26_1', title: 'Study: UNION, UNION ALL, INTERSECT, EXCEPT — combine result sets', time: '35 min', tag: 'study' },
    { id: 'sql_d26_2', title: 'Practice: Use UNION ALL to merge two sales tables from different years', time: '30 min', tag: 'practice' },
  ]},
  { day: 27, week: 4, month: 1, tasks: [
    { id: 'sql_d27_1', title: 'Study: Derived tables in FROM clause — inline views', time: '30 min', tag: 'study' },
    { id: 'sql_d27_2', title: 'Practice: Write 3 queries using derived tables, then refactor to CTEs', time: '35 min', tag: 'practice' },
  ]},
  { day: 28, week: 4, month: 1, tasks: [
    { id: 'sql_d28_1', title: 'Build: Analytics dashboard query — top 10 customers, revenue by month, best products', time: '60 min', tag: 'build' },
    { id: 'sql_d28_2', title: 'Review: Write Month 1 summary — syntax and patterns mastered', time: '20 min', tag: 'read' },
  ]},

  // ── MONTH 2: INTERMEDIATE SQL ─────────────────────────────────────────

  // Week 5 — Window Functions Basics
  { day: 29, week: 5, month: 2, tasks: [
    { id: 'sql_d29_1', title: 'Study: Window functions overview — OVER(), PARTITION BY, ORDER BY', time: '40 min', tag: 'study' },
    { id: 'sql_d29_2', title: 'Practice: Compute running total of sales using SUM() OVER()', time: '35 min', tag: 'practice' },
  ]},
  { day: 30, week: 5, month: 2, tasks: [
    { id: 'sql_d30_1', title: 'Study: ROW_NUMBER() — assign unique sequential numbers per partition', time: '35 min', tag: 'study' },
    { id: 'sql_d30_2', title: 'Build: Deduplicate rows keeping only the latest record per customer', time: '35 min', tag: 'build' },
  ]},
  { day: 31, week: 5, month: 2, tasks: [
    { id: 'sql_d31_1', title: 'Study: RANK() vs DENSE_RANK() — understand the difference with ties', time: '30 min', tag: 'study' },
    { id: 'sql_d31_2', title: 'Practice: Rank products by sales within each category', time: '30 min', tag: 'practice' },
  ]},
  { day: 32, week: 5, month: 2, tasks: [
    { id: 'sql_d32_1', title: 'Study: NTILE(n) — divide rows into equal buckets (percentiles)', time: '30 min', tag: 'study' },
    { id: 'sql_d32_2', title: 'Practice: Segment customers into quartiles by total spend', time: '30 min', tag: 'practice' },
  ]},
  { day: 33, week: 5, month: 2, tasks: [
    { id: 'sql_d33_1', title: 'Study: PERCENT_RANK() and CUME_DIST() — relative ranking', time: '30 min', tag: 'study' },
    { id: 'sql_d33_2', title: 'Practice: Find which percentile each product falls into by price', time: '30 min', tag: 'practice' },
  ]},
  { day: 34, week: 5, month: 2, tasks: [
    { id: 'sql_d34_1', title: 'Study: PARTITION BY — restart window calculations per group', time: '35 min', tag: 'study' },
    { id: 'sql_d34_2', title: 'Build: Compute running total per region and % of region total per row', time: '40 min', tag: 'build' },
  ]},
  { day: 35, week: 5, month: 2, tasks: [
    { id: 'sql_d35_1', title: 'Build: Top-N per group query — top 3 products per category by revenue', time: '45 min', tag: 'build' },
    { id: 'sql_d35_2', title: 'Review: Explain ROW_NUMBER vs RANK vs DENSE_RANK without notes', time: '15 min', tag: 'read' },
  ]},

  // Week 6 — Window Functions Advanced
  { day: 36, week: 6, month: 2, tasks: [
    { id: 'sql_d36_1', title: 'Study: LAG() and LEAD() — access previous and next row values', time: '35 min', tag: 'study' },
    { id: 'sql_d36_2', title: 'Build: Month-over-month revenue growth query using LAG()', time: '40 min', tag: 'build' },
  ]},
  { day: 37, week: 6, month: 2, tasks: [
    { id: 'sql_d37_1', title: 'Study: FIRST_VALUE() and LAST_VALUE() — get boundary values in a window', time: '35 min', tag: 'study' },
    { id: 'sql_d37_2', title: 'Practice: Show each order alongside the first and last order per customer', time: '30 min', tag: 'practice' },
  ]},
  { day: 38, week: 6, month: 2, tasks: [
    { id: 'sql_d38_1', title: 'Study: Window frames — ROWS BETWEEN and RANGE BETWEEN', time: '40 min', tag: 'study' },
    { id: 'sql_d38_2', title: 'Build: 7-day rolling average of daily sales using frame clause', time: '40 min', tag: 'build' },
  ]},
  { day: 39, week: 6, month: 2, tasks: [
    { id: 'sql_d39_1', title: 'Study: NTH_VALUE() and named window definitions (WINDOW clause)', time: '30 min', tag: 'study' },
    { id: 'sql_d39_2', title: 'Practice: Compare 2nd highest sale to current sale per region', time: '30 min', tag: 'practice' },
  ]},
  { day: 40, week: 6, month: 2, tasks: [
    { id: 'sql_d40_1', title: 'Study: Combining window functions with GROUP BY and CTEs', time: '35 min', tag: 'study' },
    { id: 'sql_d40_2', title: 'Build: Executive report — YTD totals, MoM growth, rank per category', time: '50 min', tag: 'build' },
  ]},
  { day: 41, week: 6, month: 2, tasks: [
    { id: 'sql_d41_1', title: 'Practice: Solve 5 window function challenges (LeetCode SQL hard)', time: '55 min', tag: 'practice' },
    { id: 'sql_d41_2', title: 'Study: When window functions are faster than self-joins', time: '25 min', tag: 'study' },
  ]},
  { day: 42, week: 6, month: 2, tasks: [
    { id: 'sql_d42_1', title: 'Build: Session analysis query — identify user sessions from event timestamps', time: '55 min', tag: 'build' },
    { id: 'sql_d42_2', title: 'Review: Write a window function cheat sheet with frame examples', time: '20 min', tag: 'read' },
  ]},

  // Week 7 — Indexes & Query Optimization
  { day: 43, week: 7, month: 2, tasks: [
    { id: 'sql_d43_1', title: 'Study: How B-tree indexes work — structure, lookup, range scan', time: '40 min', tag: 'study' },
    { id: 'sql_d43_2', title: 'Practice: Create indexes on the e-commerce schema and measure query speed', time: '35 min', tag: 'practice' },
  ]},
  { day: 44, week: 7, month: 2, tasks: [
    { id: 'sql_d44_1', title: 'Study: EXPLAIN and EXPLAIN ANALYZE — read a query plan', time: '40 min', tag: 'study' },
    { id: 'sql_d44_2', title: 'Practice: Analyze 3 slow queries and identify Seq Scan vs Index Scan', time: '35 min', tag: 'practice' },
  ]},
  { day: 45, week: 7, month: 2, tasks: [
    { id: 'sql_d45_1', title: 'Study: Composite indexes, index column order, and the leftmost prefix rule', time: '40 min', tag: 'study' },
    { id: 'sql_d45_2', title: 'Practice: Design a composite index for a multi-column WHERE clause', time: '30 min', tag: 'practice' },
  ]},
  { day: 46, week: 7, month: 2, tasks: [
    { id: 'sql_d46_1', title: 'Study: Partial indexes, expression indexes, covering indexes', time: '35 min', tag: 'study' },
    { id: 'sql_d46_2', title: 'Build: Partial index on active users only — measure the size difference', time: '30 min', tag: 'build' },
  ]},
  { day: 47, week: 7, month: 2, tasks: [
    { id: 'sql_d47_1', title: 'Study: Index pitfalls — over-indexing, write overhead, unused indexes', time: '35 min', tag: 'study' },
    { id: 'sql_d47_2', title: 'Practice: Find unused indexes using pg_stat_user_indexes', time: '30 min', tag: 'practice' },
  ]},
  { day: 48, week: 7, month: 2, tasks: [
    { id: 'sql_d48_1', title: 'Study: Query rewriting — avoid functions on indexed columns, OR → UNION', time: '35 min', tag: 'study' },
    { id: 'sql_d48_2', title: 'Build: Rewrite 3 slow queries to use indexes correctly', time: '40 min', tag: 'build' },
  ]},
  { day: 49, week: 7, month: 2, tasks: [
    { id: 'sql_d49_1', title: 'Build: Full optimization exercise — take a 10s query to under 100ms', time: '60 min', tag: 'build' },
    { id: 'sql_d49_2', title: 'Review: Document the optimization process and decisions made', time: '20 min', tag: 'read' },
  ]},

  // Week 8 — Transactions, ACID & Constraints
  { day: 50, week: 8, month: 2, tasks: [
    { id: 'sql_d50_1', title: 'Study: ACID properties — Atomicity, Consistency, Isolation, Durability', time: '40 min', tag: 'study' },
    { id: 'sql_d50_2', title: 'Practice: Write a multi-statement transaction for a bank transfer', time: '35 min', tag: 'practice' },
  ]},
  { day: 51, week: 8, month: 2, tasks: [
    { id: 'sql_d51_1', title: 'Study: Isolation levels — Read Uncommitted, Read Committed, Repeatable Read, Serializable', time: '40 min', tag: 'study' },
    { id: 'sql_d51_2', title: 'Practice: Demonstrate a dirty read and phantom read in two sessions', time: '35 min', tag: 'practice' },
  ]},
  { day: 52, week: 8, month: 2, tasks: [
    { id: 'sql_d52_1', title: 'Study: Locking — row locks, table locks, deadlocks and how to avoid them', time: '35 min', tag: 'study' },
    { id: 'sql_d52_2', title: 'Practice: Reproduce a deadlock and fix it by reordering operations', time: '35 min', tag: 'practice' },
  ]},
  { day: 53, week: 8, month: 2, tasks: [
    { id: 'sql_d53_1', title: 'Study: Constraints — PRIMARY KEY, FOREIGN KEY, UNIQUE, CHECK, NOT NULL', time: '35 min', tag: 'study' },
    { id: 'sql_d53_2', title: 'Build: Add full constraint set to the e-commerce schema', time: '35 min', tag: 'build' },
  ]},
  { day: 54, week: 8, month: 2, tasks: [
    { id: 'sql_d54_1', title: 'Study: ON DELETE CASCADE, SET NULL, RESTRICT — referential integrity', time: '30 min', tag: 'study' },
    { id: 'sql_d54_2', title: 'Practice: Test each ON DELETE behavior with sample data', time: '30 min', tag: 'practice' },
  ]},
  { day: 55, week: 8, month: 2, tasks: [
    { id: 'sql_d55_1', title: 'Study: Savepoints and nested transactions', time: '30 min', tag: 'study' },
    { id: 'sql_d55_2', title: 'Build: Order checkout transaction with savepoints for partial rollback', time: '40 min', tag: 'build' },
  ]},
  { day: 56, week: 8, month: 2, tasks: [
    { id: 'sql_d56_1', title: 'Build: Idempotent upsert pattern using INSERT ON CONFLICT', time: '45 min', tag: 'build' },
    { id: 'sql_d56_2', title: 'Review: Write Month 2 summary — optimization and transactions mastered', time: '20 min', tag: 'read' },
  ]},

  // ── MONTH 3: ADVANCED & SENIOR SQL ───────────────────────────────────

  // Week 9 — Database Design & Normalization
  { day: 57, week: 9, month: 3, tasks: [
    { id: 'sql_d57_1', title: 'Study: Normal forms — 1NF, 2NF, 3NF, BCNF explained with examples', time: '45 min', tag: 'study' },
    { id: 'sql_d57_2', title: 'Practice: Normalize a flat spreadsheet data set to 3NF', time: '40 min', tag: 'practice' },
  ]},
  { day: 58, week: 9, month: 3, tasks: [
    { id: 'sql_d58_1', title: 'Study: ERD notation — entities, attributes, relationships, cardinality', time: '35 min', tag: 'study' },
    { id: 'sql_d58_2', title: 'Build: Draw and implement an ERD for a SaaS billing system', time: '45 min', tag: 'build' },
  ]},
  { day: 59, week: 9, month: 3, tasks: [
    { id: 'sql_d59_1', title: 'Study: Many-to-many relationships and junction tables', time: '30 min', tag: 'study' },
    { id: 'sql_d59_2', title: 'Build: Design a schema for a tagging system with M:M relationships', time: '35 min', tag: 'build' },
  ]},
  { day: 60, week: 9, month: 3, tasks: [
    { id: 'sql_d60_1', title: 'Study: Denormalization — when to sacrifice normalization for read speed', time: '35 min', tag: 'study' },
    { id: 'sql_d60_2', title: 'Practice: Compare query complexity before and after denormalizing a table', time: '30 min', tag: 'practice' },
  ]},
  { day: 61, week: 9, month: 3, tasks: [
    { id: 'sql_d61_1', title: 'Study: Views — virtual tables for abstraction and security', time: '30 min', tag: 'study' },
    { id: 'sql_d61_2', title: 'Build: Create 3 views that hide sensitive columns from application queries', time: '35 min', tag: 'build' },
  ]},
  { day: 62, week: 9, month: 3, tasks: [
    { id: 'sql_d62_1', title: 'Study: Materialized views — precompute expensive aggregations', time: '35 min', tag: 'study' },
    { id: 'sql_d62_2', title: 'Build: Materialized view for a daily sales summary, add REFRESH logic', time: '40 min', tag: 'build' },
  ]},
  { day: 63, week: 9, month: 3, tasks: [
    { id: 'sql_d63_1', title: 'Build: Design a complete schema for a project management tool from scratch', time: '60 min', tag: 'build' },
    { id: 'sql_d63_2', title: 'Review: List design decisions and tradeoffs you made', time: '20 min', tag: 'read' },
  ]},

  // Week 10 — PostgreSQL Advanced Features
  { day: 64, week: 10, month: 3, tasks: [
    { id: 'sql_d64_1', title: 'Study: Recursive CTEs — traverse trees and graphs in SQL', time: '45 min', tag: 'study' },
    { id: 'sql_d64_2', title: 'Build: Recursive CTE to flatten a category hierarchy (unlimited depth)', time: '45 min', tag: 'build' },
  ]},
  { day: 65, week: 10, month: 3, tasks: [
    { id: 'sql_d65_1', title: 'Study: JSON and JSONB in PostgreSQL — store and query semi-structured data', time: '40 min', tag: 'study' },
    { id: 'sql_d65_2', title: 'Practice: Query a JSONB metadata column with ->, ->>, @> operators', time: '35 min', tag: 'practice' },
  ]},
  { day: 66, week: 10, month: 3, tasks: [
    { id: 'sql_d66_1', title: 'Study: Array columns — store, query, and unnest arrays in PostgreSQL', time: '35 min', tag: 'study' },
    { id: 'sql_d66_2', title: 'Build: Tag system using array columns — query posts by multiple tags', time: '35 min', tag: 'build' },
  ]},
  { day: 67, week: 10, month: 3, tasks: [
    { id: 'sql_d67_1', title: 'Study: Full-text search in PostgreSQL — tsvector, tsquery, GIN index', time: '40 min', tag: 'study' },
    { id: 'sql_d67_2', title: 'Build: Full-text search on a products table with ranking by relevance', time: '40 min', tag: 'build' },
  ]},
  { day: 68, week: 10, month: 3, tasks: [
    { id: 'sql_d68_1', title: 'Study: Table partitioning — range, list, and hash partitioning', time: '40 min', tag: 'study' },
    { id: 'sql_d68_2', title: 'Build: Partition an events table by month, verify partition pruning in EXPLAIN', time: '40 min', tag: 'build' },
  ]},
  { day: 69, week: 10, month: 3, tasks: [
    { id: 'sql_d69_1', title: 'Study: Triggers and trigger functions — automate database logic', time: '35 min', tag: 'study' },
    { id: 'sql_d69_2', title: 'Build: Audit log trigger — record every UPDATE to a history table', time: '40 min', tag: 'build' },
  ]},
  { day: 70, week: 10, month: 3, tasks: [
    { id: 'sql_d70_1', title: 'Build: Row-level security — users can only see their own data', time: '50 min', tag: 'build' },
    { id: 'sql_d70_2', title: 'Review: Document PostgreSQL features you would use vs avoid in production', time: '20 min', tag: 'read' },
  ]},

  // Week 11 — Performance Tuning & Monitoring
  { day: 71, week: 11, month: 3, tasks: [
    { id: 'sql_d71_1', title: 'Study: pg_stat_statements — find the slowest queries in your database', time: '35 min', tag: 'study' },
    { id: 'sql_d71_2', title: 'Practice: Enable pg_stat_statements and identify your top 5 slow queries', time: '35 min', tag: 'practice' },
  ]},
  { day: 72, week: 11, month: 3, tasks: [
    { id: 'sql_d72_1', title: 'Study: VACUUM and ANALYZE — prevent table bloat, keep stats fresh', time: '35 min', tag: 'study' },
    { id: 'sql_d72_2', title: 'Practice: Check pg_stat_user_tables for tables that need vacuuming', time: '30 min', tag: 'practice' },
  ]},
  { day: 73, week: 11, month: 3, tasks: [
    { id: 'sql_d73_1', title: 'Study: Connection pooling with PgBouncer — why you need it at scale', time: '35 min', tag: 'study' },
    { id: 'sql_d73_2', title: 'Practice: Configure PgBouncer and compare latency with/without it', time: '35 min', tag: 'practice' },
  ]},
  { day: 74, week: 11, month: 3, tasks: [
    { id: 'sql_d74_1', title: 'Study: Read replicas — route read queries away from the primary', time: '35 min', tag: 'study' },
    { id: 'sql_d74_2', title: 'Build: Application query router — writes to primary, reads to replica', time: '40 min', tag: 'build' },
  ]},
  { day: 75, week: 11, month: 3, tasks: [
    { id: 'sql_d75_1', title: 'Study: Query planner hints and statistics — cost model and row estimates', time: '35 min', tag: 'study' },
    { id: 'sql_d75_2', title: 'Practice: Force a bad plan and fix it with ANALYZE and statistics targets', time: '35 min', tag: 'practice' },
  ]},
  { day: 76, week: 11, month: 3, tasks: [
    { id: 'sql_d76_1', title: 'Study: Bulk operations — COPY, batch INSERT, UPDATE with FROM', time: '35 min', tag: 'study' },
    { id: 'sql_d76_2', title: 'Build: Load 1M rows efficiently with COPY, measure vs INSERT loop', time: '40 min', tag: 'build' },
  ]},
  { day: 77, week: 11, month: 3, tasks: [
    { id: 'sql_d77_1', title: 'Build: Full database health check script — bloat, slow queries, unused indexes', time: '55 min', tag: 'build' },
    { id: 'sql_d77_2', title: 'Review: Write a performance checklist for any new PostgreSQL project', time: '20 min', tag: 'read' },
  ]},

  // Week 12 — Senior SQL: Interviews & Real-world Patterns
  { day: 78, week: 12, month: 3, tasks: [
    { id: 'sql_d78_1', title: 'Practice: Classic SQL interview problems — gaps & islands, consecutive dates', time: '50 min', tag: 'practice' },
    { id: 'sql_d78_2', title: 'Study: Gaps and islands pattern — identify consecutive ranges in data', time: '30 min', tag: 'study' },
  ]},
  { day: 79, week: 12, month: 3, tasks: [
    { id: 'sql_d79_1', title: 'Practice: Solve 5 hard LeetCode SQL problems (185, 262, 601, 615, 618)', time: '60 min', tag: 'practice' },
    { id: 'sql_d79_2', title: 'Study: Pivot and unpivot queries using CASE WHEN and CROSSTAB', time: '30 min', tag: 'study' },
  ]},
  { day: 80, week: 12, month: 3, tasks: [
    { id: 'sql_d80_1', title: 'Study: Multi-tenant architecture — schema-per-tenant vs row-level isolation', time: '40 min', tag: 'study' },
    { id: 'sql_d80_2', title: 'Build: Design and implement a multi-tenant data model', time: '40 min', tag: 'build' },
  ]},
  { day: 81, week: 12, month: 3, tasks: [
    { id: 'sql_d81_1', title: 'Study: Event sourcing and temporal tables — track history of every change', time: '40 min', tag: 'study' },
    { id: 'sql_d81_2', title: 'Build: Temporal schema — query the state of a record at any point in time', time: '45 min', tag: 'build' },
  ]},
  { day: 82, week: 12, month: 3, tasks: [
    { id: 'sql_d82_1', title: 'Practice: Mock SQL interview — explain every query decision out loud', time: '45 min', tag: 'practice' },
    { id: 'sql_d82_2', title: 'Study: SQL vs NoSQL tradeoffs — when to choose a document or columnar store', time: '30 min', tag: 'study' },
  ]},
  { day: 83, week: 12, month: 3, tasks: [
    { id: 'sql_d83_1', title: 'Build: Capstone — full analytical schema with views, indexes, and triggers', time: '70 min', tag: 'build' },
    { id: 'sql_d83_2', title: 'Practice: Write 10 complex queries that cover every concept learned', time: '30 min', tag: 'practice' },
  ]},
  { day: 84, week: 12, month: 3, tasks: [
    { id: 'sql_d84_1', title: 'Review: Read all your SQL notes from the past 3 months', time: '40 min', tag: 'read' },
    { id: 'sql_d84_2', title: 'Plan: Write your next 3-month goals — distributed SQL, data warehousing, dbt', time: '30 min', tag: 'study' },
  ]},
];

export const DAILY_TASKS = [
  { id: 'sql_daily_challenge', title: 'Solve 1 SQL challenge (LeetCode / StrataScratch)', time: '20 min', tag: 'practice' },
  { id: 'sql_daily_docs',      title: 'Read 15 min of PostgreSQL docs or a SQL blog post', time: '15 min', tag: 'read' },
];
