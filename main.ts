import { mkdirSync, writeFileSync } from "node:fs";

// One funny out-of-office auto-reply from an AI agent on vacation.
// The joke: the agent "covering" for its human only answers in commit
// messages, and just force-pushed a confident fix, then deleted the tests.
const REPLY =
  "I'm out of office. My agent is covering for me, but it only answers in commit messages — it just force-pushed 'fixed everything' and deleted the tests.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", REPLY, "utf8");
console.log(REPLY);
