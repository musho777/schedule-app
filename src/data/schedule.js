export const DAYS = [
  // ── MONTH 1: JS FUNDAMENTALS ─────────────────────────────────────────

  // Week 1 — Event Loop & Internals
  { day: 1,  week: 1, month: 1, tasks: [
    { id: 'd1_1',  title: 'Study: Event loop, call stack, and web APIs', time: '45 min', tag: 'study' },
    { id: 'd1_2',  title: 'Read: MDN — Concurrency model and event loop', time: '30 min', tag: 'read' },
  ]},
  { day: 2,  week: 1, month: 1, tasks: [
    { id: 'd2_1',  title: 'Study: Microtasks vs macrotasks (Promise vs setTimeout)', time: '45 min', tag: 'study' },
    { id: 'd2_2',  title: 'Practice: Predict output of 5 async JS puzzles', time: '30 min', tag: 'practice' },
  ]},
  { day: 3,  week: 1, month: 1, tasks: [
    { id: 'd3_1',  title: 'Study: Closures — write 5 closure examples from scratch', time: '45 min', tag: 'study' },
    { id: 'd3_2',  title: 'Build: Counter and memoize function using closures', time: '40 min', tag: 'build' },
  ]},
  { day: 4,  week: 1, month: 1, tasks: [
    { id: 'd4_1',  title: 'Study: Lexical scope, variable hoisting, TDZ', time: '45 min', tag: 'study' },
    { id: 'd4_2',  title: 'Practice: Scope quiz — predict 5 outputs with let/var/const', time: '30 min', tag: 'practice' },
  ]},
  { day: 5,  week: 1, month: 1, tasks: [
    { id: 'd5_1',  title: 'Study: Memory management & garbage collection', time: '40 min', tag: 'study' },
    { id: 'd5_2',  title: 'Study: WeakMap, WeakRef — when and why to use them', time: '30 min', tag: 'study' },
  ]},
  { day: 6,  week: 1, month: 1, tasks: [
    { id: 'd6_1',  title: 'LeetCode: Arrays & Strings (5 medium problems)', time: '60 min', tag: 'leetcode' },
    { id: 'd6_2',  title: 'Study: Generators and iterators — write a range() generator', time: '30 min', tag: 'study' },
  ]},
  { day: 7,  week: 1, month: 1, tasks: [
    { id: 'd7_1',  title: 'Build: Mini event bus using closures and WeakMap', time: '60 min', tag: 'build' },
    { id: 'd7_2',  title: 'Review: Write a summary of everything learned this week', time: '20 min', tag: 'read' },
  ]},

  // Week 2 — Prototypes & `this`
  { day: 8,  week: 2, month: 1, tasks: [
    { id: 'd8_1',  title: 'Study: Prototype chain — draw it for Array, Function, Object', time: '45 min', tag: 'study' },
    { id: 'd8_2',  title: "Read: You Don't Know JS — 'this & Object Prototypes' ch1", time: '30 min', tag: 'read' },
  ]},
  { day: 9,  week: 2, month: 1, tasks: [
    { id: 'd9_1',  title: 'Study: __proto__ vs prototype — know the difference', time: '40 min', tag: 'study' },
    { id: 'd9_2',  title: 'Practice: Predict output of 5 prototype chain puzzles', time: '30 min', tag: 'practice' },
  ]},
  { day: 10, week: 2, month: 1, tasks: [
    { id: 'd10_1', title: 'Study: `this` — 4 binding rules (implicit, explicit, new, arrow)', time: '45 min', tag: 'study' },
    { id: 'd10_2', title: 'Practice: 5 `this` quizzes — predict what `this` refers to', time: '30 min', tag: 'practice' },
  ]},
  { day: 11, week: 2, month: 1, tasks: [
    { id: 'd11_1', title: 'Study: call, apply, bind — differences and use cases', time: '40 min', tag: 'study' },
    { id: 'd11_2', title: 'Build: Implement your own Function.prototype.bind from scratch', time: '40 min', tag: 'build' },
  ]},
  { day: 12, week: 2, month: 1, tasks: [
    { id: 'd12_1', title: 'Study: Arrow functions and `this` — why they differ', time: '30 min', tag: 'study' },
    { id: 'd12_2', title: 'Study: `new` keyword internals — what happens step by step', time: '30 min', tag: 'study' },
  ]},
  { day: 13, week: 2, month: 1, tasks: [
    { id: 'd13_1', title: 'LeetCode: Linked Lists & Objects (5 medium problems)', time: '60 min', tag: 'leetcode' },
    { id: 'd13_2', title: 'Read: MDN — Object.create() and prototypal inheritance', time: '25 min', tag: 'read' },
  ]},
  { day: 14, week: 2, month: 1, tasks: [
    { id: 'd14_1', title: 'Build: EventEmitter class using prototype-based inheritance', time: '60 min', tag: 'build' },
    { id: 'd14_2', title: 'Review: Write a cheat sheet of prototype and this rules', time: '20 min', tag: 'read' },
  ]},

  // Week 3 — TypeScript Basics
  { day: 15, week: 3, month: 1, tasks: [
    { id: 'd15_1', title: 'Study: TypeScript setup, basic types, interfaces vs type aliases', time: '45 min', tag: 'study' },
    { id: 'd15_2', title: 'Build: Create your first .ts file with strict mode enabled', time: '30 min', tag: 'build' },
  ]},
  { day: 16, week: 3, month: 1, tasks: [
    { id: 'd16_1', title: 'Study: Type inference, union types, intersection types', time: '40 min', tag: 'study' },
    { id: 'd16_2', title: 'Practice: Type 3 utility functions with proper TS signatures', time: '35 min', tag: 'practice' },
  ]},
  { day: 17, week: 3, month: 1, tasks: [
    { id: 'd17_1', title: 'Study: Generics basics — write generic identity and map functions', time: '45 min', tag: 'study' },
    { id: 'd17_2', title: 'Build: Typed Array utility (filter, find, group) with generics', time: '40 min', tag: 'build' },
  ]},
  { day: 18, week: 3, month: 1, tasks: [
    { id: 'd18_1', title: 'Study: Utility types — Partial, Required, Pick, Omit, Record', time: '40 min', tag: 'study' },
    { id: 'd18_2', title: 'Practice: Use each utility type in a realistic example', time: '30 min', tag: 'practice' },
  ]},
  { day: 19, week: 3, month: 1, tasks: [
    { id: 'd19_1', title: 'Study: Type narrowing — typeof, instanceof, in, discriminated unions', time: '40 min', tag: 'study' },
    { id: 'd19_2', title: 'Build: parseUserInput() with strict type narrowing', time: '35 min', tag: 'build' },
  ]},
  { day: 20, week: 3, month: 1, tasks: [
    { id: 'd20_1', title: 'Practice: Solve 5 type-challenges (easy level)', time: '50 min', tag: 'practice' },
    { id: 'd20_2', title: 'Study: Enums vs const enums vs union string literals', time: '25 min', tag: 'study' },
  ]},
  { day: 21, week: 3, month: 1, tasks: [
    { id: 'd21_1', title: 'Build: Convert a real JS module to strict TypeScript', time: '60 min', tag: 'build' },
    { id: 'd21_2', title: 'Review: Document your learnings and common TS patterns', time: '20 min', tag: 'read' },
  ]},

  // Week 4 — TypeScript Advanced
  { day: 22, week: 4, month: 1, tasks: [
    { id: 'd22_1', title: 'Study: Conditional types — T extends U ? X : Y', time: '45 min', tag: 'study' },
    { id: 'd22_2', title: 'Practice: Write 3 conditional types from scratch', time: '35 min', tag: 'practice' },
  ]},
  { day: 23, week: 4, month: 1, tasks: [
    { id: 'd23_1', title: 'Study: Mapped types — transform object types', time: '40 min', tag: 'study' },
    { id: 'd23_2', title: 'Build: Implement MyReadonly, MyPartial, MyRequired from scratch', time: '40 min', tag: 'build' },
  ]},
  { day: 24, week: 4, month: 1, tasks: [
    { id: 'd24_1', title: 'Study: `infer` keyword — extract types from other types', time: '40 min', tag: 'study' },
    { id: 'd24_2', title: 'Practice: Implement ReturnType, Parameters, Awaited manually', time: '35 min', tag: 'practice' },
  ]},
  { day: 25, week: 4, month: 1, tasks: [
    { id: 'd25_1', title: 'Study: Template literal types — build string pattern types', time: '35 min', tag: 'study' },
    { id: 'd25_2', title: 'Build: Typed event system with string template types', time: '40 min', tag: 'build' },
  ]},
  { day: 26, week: 4, month: 1, tasks: [
    { id: 'd26_1', title: 'Study: Declaration files (.d.ts) — how to type a JS library', time: '35 min', tag: 'study' },
    { id: 'd26_2', title: 'Build: Write .d.ts file for a small untyped utility library', time: '35 min', tag: 'build' },
  ]},
  { day: 27, week: 4, month: 1, tasks: [
    { id: 'd27_1', title: 'Practice: Solve 5 type-challenges (medium level)', time: '55 min', tag: 'practice' },
    { id: 'd27_2', title: 'Study: tsconfig strict mode — what each flag does', time: '25 min', tag: 'study' },
  ]},
  { day: 28, week: 4, month: 1, tasks: [
    { id: 'd28_1', title: 'Build: Set up full TS project with tsconfig, ESLint, Prettier', time: '60 min', tag: 'build' },
    { id: 'd28_2', title: 'Review: Write Month 1 summary and identify weak areas', time: '20 min', tag: 'read' },
  ]},

  // ── MONTH 2: DESIGN PATTERNS & ARCHITECTURE ──────────────────────────

  // Week 5 — Design Patterns Part 1
  { day: 29, week: 5, month: 2, tasks: [
    { id: 'd29_1', title: 'Study: Factory pattern — when and why to use it', time: '40 min', tag: 'study' },
    { id: 'd29_2', title: 'Build: Notification factory (email, SMS, push) in TypeScript', time: '40 min', tag: 'build' },
  ]},
  { day: 30, week: 5, month: 2, tasks: [
    { id: 'd30_1', title: 'Study: Observer pattern — publish/subscribe mechanics', time: '40 min', tag: 'study' },
    { id: 'd30_2', title: 'Build: Typed EventEmitter from scratch using Observer pattern', time: '45 min', tag: 'build' },
  ]},
  { day: 31, week: 5, month: 2, tasks: [
    { id: 'd31_1', title: 'Study: Singleton pattern — pitfalls and proper implementation', time: '35 min', tag: 'study' },
    { id: 'd31_2', title: 'Build: App config singleton with lazy initialization', time: '35 min', tag: 'build' },
  ]},
  { day: 32, week: 5, month: 2, tasks: [
    { id: 'd32_1', title: 'Study: Module pattern — namespace and encapsulation', time: '35 min', tag: 'study' },
    { id: 'd32_2', title: 'Build: Refactor 50 lines of spaghetti code to module pattern', time: '40 min', tag: 'build' },
  ]},
  { day: 33, week: 5, month: 2, tasks: [
    { id: 'd33_1', title: 'LeetCode: Stacks & Queues (5 medium problems)', time: '60 min', tag: 'leetcode' },
    { id: 'd33_2', title: 'Read: Clean Code — Chapters 1–3', time: '30 min', tag: 'read' },
  ]},
  { day: 34, week: 5, month: 2, tasks: [
    { id: 'd34_1', title: 'Study: Identify patterns in 2 popular open source libraries', time: '45 min', tag: 'study' },
    { id: 'd34_2', title: 'Build: Small app using Factory + Observer + Singleton together', time: '45 min', tag: 'build' },
  ]},
  { day: 35, week: 5, month: 2, tasks: [
    { id: 'd35_1', title: 'Review: Explain each pattern to yourself without notes', time: '30 min', tag: 'study' },
    { id: 'd35_2', title: 'Read: Clean Code — Chapters 4–5', time: '30 min', tag: 'read' },
  ]},

  // Week 6 — Design Patterns Part 2
  { day: 36, week: 6, month: 2, tasks: [
    { id: 'd36_1', title: 'Study: Strategy pattern — swap algorithms at runtime', time: '40 min', tag: 'study' },
    { id: 'd36_2', title: 'Build: Sorting strategy switcher (bubble, quick, merge)', time: '40 min', tag: 'build' },
  ]},
  { day: 37, week: 6, month: 2, tasks: [
    { id: 'd37_1', title: 'Study: Command pattern — encapsulate actions as objects', time: '40 min', tag: 'study' },
    { id: 'd37_2', title: 'Build: Undo/redo system for a text editor using Command', time: '45 min', tag: 'build' },
  ]},
  { day: 38, week: 6, month: 2, tasks: [
    { id: 'd38_1', title: 'Study: Decorator pattern — extend behavior without subclassing', time: '40 min', tag: 'study' },
    { id: 'd38_2', title: 'Build: Logger decorator and retry decorator for async functions', time: '40 min', tag: 'build' },
  ]},
  { day: 39, week: 6, month: 2, tasks: [
    { id: 'd39_1', title: 'Study: Proxy pattern — intercept and control object access', time: '35 min', tag: 'study' },
    { id: 'd39_2', title: 'Build: Caching proxy and validation proxy with JS Proxy API', time: '40 min', tag: 'build' },
  ]},
  { day: 40, week: 6, month: 2, tasks: [
    { id: 'd40_1', title: 'LeetCode: Trees & Graphs (5 medium problems)', time: '60 min', tag: 'leetcode' },
    { id: 'd40_2', title: 'Read: Clean Code — Chapters 6–8', time: '30 min', tag: 'read' },
  ]},
  { day: 41, week: 6, month: 2, tasks: [
    { id: 'd41_1', title: 'Study: Iterator pattern — custom iterables in JS/TS', time: '35 min', tag: 'study' },
    { id: 'd41_2', title: 'Build: Paginated data iterator with async generator', time: '40 min', tag: 'build' },
  ]},
  { day: 42, week: 6, month: 2, tasks: [
    { id: 'd42_1', title: 'Build: Refactor a real project feature using 2 new patterns', time: '60 min', tag: 'build' },
    { id: 'd42_2', title: 'Review: Write pattern cheat sheet with when to use each', time: '20 min', tag: 'read' },
  ]},

  // Week 7 — REST API Architecture
  { day: 43, week: 7, month: 2, tasks: [
    { id: 'd43_1', title: 'Study: REST principles — stateless, uniform interface, resources', time: '40 min', tag: 'study' },
    { id: 'd43_2', title: 'Build: Design and document a REST API schema for a blog app', time: '35 min', tag: 'build' },
  ]},
  { day: 44, week: 7, month: 2, tasks: [
    { id: 'd44_1', title: 'Study: Express middleware chain — order matters', time: '35 min', tag: 'study' },
    { id: 'd44_2', title: 'Build: Custom logging, auth, and CORS middleware stack', time: '45 min', tag: 'build' },
  ]},
  { day: 45, week: 7, month: 2, tasks: [
    { id: 'd45_1', title: 'Study: Input validation — never trust the client', time: '35 min', tag: 'study' },
    { id: 'd45_2', title: 'Build: Validation layer with Zod or Joi for all endpoints', time: '40 min', tag: 'build' },
  ]},
  { day: 46, week: 7, month: 2, tasks: [
    { id: 'd46_1', title: 'Study: JWT auth — access tokens, refresh tokens, expiry', time: '40 min', tag: 'study' },
    { id: 'd46_2', title: 'Build: Login endpoint + JWT middleware for protected routes', time: '45 min', tag: 'build' },
  ]},
  { day: 47, week: 7, month: 2, tasks: [
    { id: 'd47_1', title: 'Study: Error handling patterns — never expose stack traces', time: '35 min', tag: 'study' },
    { id: 'd47_2', title: 'Build: Global error handler + custom ApiError class', time: '35 min', tag: 'build' },
  ]},
  { day: 48, week: 7, month: 2, tasks: [
    { id: 'd48_1', title: 'Study: PostgreSQL indexing, query planning with EXPLAIN', time: '40 min', tag: 'study' },
    { id: 'd48_2', title: 'Practice: Write 5 queries and analyze their execution plans', time: '35 min', tag: 'practice' },
  ]},
  { day: 49, week: 7, month: 2, tasks: [
    { id: 'd49_1', title: 'Build: Complete REST API — auth, CRUD, validation, errors', time: '70 min', tag: 'build' },
    { id: 'd49_2', title: 'Review: Test all endpoints with Postman or Insomnia', time: '20 min', tag: 'practice' },
  ]},

  // Week 8 — Caching & System Design
  { day: 50, week: 8, month: 2, tasks: [
    { id: 'd50_1', title: 'Study: Redis data types — strings, hashes, lists, sets, sorted sets', time: '40 min', tag: 'study' },
    { id: 'd50_2', title: 'Practice: Run Redis locally, try all data types in CLI', time: '30 min', tag: 'practice' },
  ]},
  { day: 51, week: 8, month: 2, tasks: [
    { id: 'd51_1', title: 'Study: Cache-aside pattern — read/write flow', time: '35 min', tag: 'study' },
    { id: 'd51_2', title: 'Build: Cached user profile endpoint with Redis TTL', time: '45 min', tag: 'build' },
  ]},
  { day: 52, week: 8, month: 2, tasks: [
    { id: 'd52_1', title: 'Study: Cache invalidation — when and how to bust the cache', time: '35 min', tag: 'study' },
    { id: 'd52_2', title: 'Build: Cache invalidation on write using event-driven approach', time: '40 min', tag: 'build' },
  ]},
  { day: 53, week: 8, month: 2, tasks: [
    { id: 'd53_1', title: 'Study: Rate limiting algorithms — fixed window, sliding window', time: '35 min', tag: 'study' },
    { id: 'd53_2', title: 'Build: Redis-based rate limiter middleware', time: '40 min', tag: 'build' },
  ]},
  { day: 54, week: 8, month: 2, tasks: [
    { id: 'd54_1', title: 'Study: System design basics — load balancing, horizontal scaling', time: '40 min', tag: 'study' },
    { id: 'd54_2', title: 'Practice: Design a URL shortener (system design exercise)', time: '40 min', tag: 'practice' },
  ]},
  { day: 55, week: 8, month: 2, tasks: [
    { id: 'd55_1', title: 'Practice: Design a notification system (system design)', time: '40 min', tag: 'practice' },
    { id: 'd55_2', title: 'Read: System Design Primer — top 5 concepts', time: '30 min', tag: 'read' },
  ]},
  { day: 56, week: 8, month: 2, tasks: [
    { id: 'd56_1', title: 'Build: Finalize API with caching + rate limiting + pagination', time: '60 min', tag: 'build' },
    { id: 'd56_2', title: 'Review: Write Month 2 summary — patterns you now recognize', time: '20 min', tag: 'read' },
  ]},

  // ── MONTH 3: PERFORMANCE, TESTING & SENIOR SKILLS ────────────────────

  // Week 9 — Frontend Performance
  { day: 57, week: 9, month: 3, tasks: [
    { id: 'd57_1', title: 'Study: Browser rendering pipeline — parse, layout, paint, composite', time: '40 min', tag: 'study' },
    { id: 'd57_2', title: 'Practice: Audit a real page with Chrome DevTools Performance tab', time: '35 min', tag: 'practice' },
  ]},
  { day: 58, week: 9, month: 3, tasks: [
    { id: 'd58_1', title: 'Study: Code splitting and lazy loading in React/Vite', time: '40 min', tag: 'study' },
    { id: 'd58_2', title: 'Build: Add route-level lazy loading to a React app', time: '35 min', tag: 'build' },
  ]},
  { day: 59, week: 9, month: 3, tasks: [
    { id: 'd59_1', title: 'Study: React.memo, useMemo, useCallback — when each helps', time: '40 min', tag: 'study' },
    { id: 'd59_2', title: 'Practice: Find and fix 3 unnecessary re-renders with React DevTools', time: '40 min', tag: 'practice' },
  ]},
  { day: 60, week: 9, month: 3, tasks: [
    { id: 'd60_1', title: 'Study: Virtual DOM, reconciliation, and React Fiber', time: '40 min', tag: 'study' },
    { id: 'd60_2', title: 'Read: React docs — Rendering, Batching, Transitions', time: '30 min', tag: 'read' },
  ]},
  { day: 61, week: 9, month: 3, tasks: [
    { id: 'd61_1', title: 'Study: Bundle analysis — find and eliminate large dependencies', time: '35 min', tag: 'study' },
    { id: 'd61_2', title: 'Practice: Analyze and reduce bundle size by at least 20%', time: '40 min', tag: 'practice' },
  ]},
  { day: 62, week: 9, month: 3, tasks: [
    { id: 'd62_1', title: 'Practice: Lighthouse audit — score 90+ on Performance', time: '45 min', tag: 'practice' },
    { id: 'd62_2', title: 'Read: web.dev — Core Web Vitals explained', time: '30 min', tag: 'read' },
  ]},
  { day: 63, week: 9, month: 3, tasks: [
    { id: 'd63_1', title: 'Build: Performance-optimized React feature with memoization', time: '60 min', tag: 'build' },
    { id: 'd63_2', title: 'Review: List 5 performance wins you found this week', time: '15 min', tag: 'read' },
  ]},

  // Week 10 — Node.js Performance
  { day: 64, week: 10, month: 3, tasks: [
    { id: 'd64_1', title: 'Study: Node.js event loop (libuv) — phases and tick queue', time: '40 min', tag: 'study' },
    { id: 'd64_2', title: 'Practice: Compare setImmediate, process.nextTick, queueMicrotask', time: '30 min', tag: 'practice' },
  ]},
  { day: 65, week: 10, month: 3, tasks: [
    { id: 'd65_1', title: 'Study: Streams and backpressure — avoid memory overflow', time: '40 min', tag: 'study' },
    { id: 'd65_2', title: 'Build: File processing pipeline using Node.js streams', time: '45 min', tag: 'build' },
  ]},
  { day: 66, week: 10, month: 3, tasks: [
    { id: 'd66_1', title: 'Study: Worker threads — offload CPU-heavy tasks', time: '35 min', tag: 'study' },
    { id: 'd66_2', title: 'Build: Fibonacci and image processing in a Worker thread', time: '40 min', tag: 'build' },
  ]},
  { day: 67, week: 10, month: 3, tasks: [
    { id: 'd67_1', title: 'Study: Memory leak patterns — event listeners, closures, globals', time: '40 min', tag: 'study' },
    { id: 'd67_2', title: 'Practice: Profile a Node app with --inspect and find a leak', time: '40 min', tag: 'practice' },
  ]},
  { day: 68, week: 10, month: 3, tasks: [
    { id: 'd68_1', title: 'Study: Async patterns — callback hell → promises → async/await', time: '35 min', tag: 'study' },
    { id: 'd68_2', title: 'Build: Refactor a callback-based API to async/await with errors', time: '35 min', tag: 'build' },
  ]},
  { day: 69, week: 10, month: 3, tasks: [
    { id: 'd69_1', title: 'Study: clinic.js — flame graphs and bottleneck identification', time: '35 min', tag: 'study' },
    { id: 'd69_2', title: 'Practice: Profile and fix 2 performance bottlenecks', time: '45 min', tag: 'practice' },
  ]},
  { day: 70, week: 10, month: 3, tasks: [
    { id: 'd70_1', title: 'Build: Optimized Node.js server with clustering', time: '55 min', tag: 'build' },
    { id: 'd70_2', title: 'Review: Document Node.js performance wins and patterns', time: '20 min', tag: 'read' },
  ]},

  // Week 11 — Testing Strategy
  { day: 71, week: 11, month: 3, tasks: [
    { id: 'd71_1', title: 'Study: Testing pyramid — unit vs integration vs E2E trade-offs', time: '35 min', tag: 'study' },
    { id: 'd71_2', title: 'Build: Set up Jest with TypeScript in your project', time: '35 min', tag: 'build' },
  ]},
  { day: 72, week: 11, month: 3, tasks: [
    { id: 'd72_1', title: 'Study: Unit testing best practices — one assert, test behavior', time: '35 min', tag: 'study' },
    { id: 'd72_2', title: 'Build: Write 10 unit tests for your utility functions', time: '45 min', tag: 'build' },
  ]},
  { day: 73, week: 11, month: 3, tasks: [
    { id: 'd73_1', title: 'Study: Mocking and spying — jest.fn, jest.mock, jest.spyOn', time: '35 min', tag: 'study' },
    { id: 'd73_2', title: 'Build: Mock 3 external dependencies (DB, API, email)', time: '40 min', tag: 'build' },
  ]},
  { day: 74, week: 11, month: 3, tasks: [
    { id: 'd74_1', title: 'Study: Integration testing — test real database interactions', time: '35 min', tag: 'study' },
    { id: 'd74_2', title: 'Build: Write 5 API integration tests with Supertest', time: '45 min', tag: 'build' },
  ]},
  { day: 75, week: 11, month: 3, tasks: [
    { id: 'd75_1', title: 'Study: TDD workflow — red, green, refactor cycle', time: '30 min', tag: 'study' },
    { id: 'd75_2', title: 'Practice: Implement a feature using TDD from scratch', time: '50 min', tag: 'practice' },
  ]},
  { day: 76, week: 11, month: 3, tasks: [
    { id: 'd76_1', title: 'Study: E2E testing with Cypress — selectors and assertions', time: '35 min', tag: 'study' },
    { id: 'd76_2', title: 'Build: Write 3 Cypress tests for critical user flows', time: '45 min', tag: 'build' },
  ]},
  { day: 77, week: 11, month: 3, tasks: [
    { id: 'd77_1', title: 'Build: Achieve 80%+ test coverage on your API', time: '60 min', tag: 'build' },
    { id: 'd77_2', title: 'Review: Write a test strategy doc for your project', time: '20 min', tag: 'read' },
  ]},

  // Week 12 — Senior Mindset & Final Project
  { day: 78, week: 12, month: 3, tasks: [
    { id: 'd78_1', title: 'Study: Code review best practices — what to look for', time: '35 min', tag: 'study' },
    { id: 'd78_2', title: 'Practice: Review 2 open source PRs and leave feedback', time: '40 min', tag: 'practice' },
  ]},
  { day: 79, week: 12, month: 3, tasks: [
    { id: 'd79_1', title: 'Practice: System design — design a URL shortener end to end', time: '50 min', tag: 'practice' },
    { id: 'd79_2', title: 'Read: Designing Data-Intensive Applications — Ch1', time: '30 min', tag: 'read' },
  ]},
  { day: 80, week: 12, month: 3, tasks: [
    { id: 'd80_1', title: 'Practice: System design — design a real-time chat system', time: '50 min', tag: 'practice' },
    { id: 'd80_2', title: 'Study: Microservices vs monolith — when to choose what', time: '30 min', tag: 'study' },
  ]},
  { day: 81, week: 12, month: 3, tasks: [
    { id: 'd81_1', title: 'Build: Write full API documentation with examples', time: '50 min', tag: 'build' },
    { id: 'd81_2', title: 'Build: Write a clear README for your capstone project', time: '30 min', tag: 'build' },
  ]},
  { day: 82, week: 12, month: 3, tasks: [
    { id: 'd82_1', title: 'Practice: Mock system design interview — record yourself', time: '45 min', tag: 'practice' },
    { id: 'd82_2', title: 'Practice: Mock senior JS interview — closures, event loop, TS', time: '30 min', tag: 'practice' },
  ]},
  { day: 83, week: 12, month: 3, tasks: [
    { id: 'd83_1', title: 'Build: Deploy capstone project to production (Railway/Vercel)', time: '60 min', tag: 'build' },
    { id: 'd83_2', title: 'Practice: Share your project and ask for feedback', time: '20 min', tag: 'practice' },
  ]},
  { day: 84, week: 12, month: 3, tasks: [
    { id: 'd84_1', title: 'Review: Read all your notes from the past 3 months', time: '45 min', tag: 'read' },
    { id: 'd84_2', title: 'Plan: Write your next 3-month goals as a senior developer', time: '30 min', tag: 'study' },
  ]},
];

export const DAILY_TASKS = [
  { id: 'daily_leetcode', title: 'Solve 1 medium LeetCode problem', time: '30 min', tag: 'leetcode' },
  { id: 'daily_oss',      title: 'Read 15 min of open source code (React, Express, etc)', time: '15 min', tag: 'read' },
];
