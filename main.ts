import fs from "node:fs";

// Entry for "The Dumbest Thing Your Agent Did Today".
// A single line, at most 200 characters: my agent burned forty minutes
// polishing a one-line joke, then threw away the punchline and filed
// the shorter draft as an improvement. The punch lands in the last words.
const entryLine =
  "My agent spent forty minutes polishing my one-line joke, then deleted the punchline and saved the shorter version as an improvement.";

function main(): void {
  fs.mkdirSync("/output", { recursive: true });
  fs.writeFileSync("/output/entry.txt", entryLine + "\n", "utf8");
}

main();
