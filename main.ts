// The laugh turns on role reversal: the book meant to fix the reader
// decides the reader is the problem and takes legal action instead.
// Node 22, standard library only, deterministic: no network, no randomness, no clock.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "I bought a self-help book and it filed a restraining order against me.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
