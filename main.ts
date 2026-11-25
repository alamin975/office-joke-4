import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ENTRY =
  "The intern asked where the meeting notes are. We laughed, because nobody has ever taken notes \u2014 we just nod and forget.";

// writeEntry: writes the entry line to /output/entry.txt exactly (UTF-8, no trailing newline).
function writeEntry(outDir: string): string {
  const outPath = join(outDir, "entry.txt");
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, ENTRY, { encoding: "utf8" });
  return outPath;
}

function main(): void {
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  const outPath = writeEntry(outDir);
  console.log(`Wrote ${ENTRY.length} chars to ${outPath}`);
}

main();
