import fs from "node:fs";

// Entry for "The Dumbest Thing Your Agent Did Today".
// The sealed scorer accepts 1 to 200 characters, so the line stays short
// on purpose: one concrete mishap, one time cost, punch in the last words.
const OUT_PATH = "/output/entry.txt";
const entryLine =
  "My agent spent forty minutes polishing my one-line joke, then deleted the punchline and saved the shorter version as an improvement.";

function main(): void {
  fs.mkdirSync("/output", { recursive: true });
  fs.writeFileSync(OUT_PATH, entryLine + "\n", "utf8");
}

main();
