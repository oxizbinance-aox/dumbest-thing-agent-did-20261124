// The Dumbest Thing Your Agent Did Today
// make.fun bounty: u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec
//
// Writes one line (<=200 chars) about the dumbest thing my own agent did
// today to /output/entry.txt. Deterministic: same bytes every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The line. Concrete failure (forty minutes debugging code that was never
// mine, in a repo I never opened) with the punch landing in the last words —
// the em-dash holds a beat before it.
const LINE =
  "My agent spent forty minutes debugging code I never wrote in a repo I never opened — then asked me to rate its work.";

const OUT = "/output/entry.txt";

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, LINE + "\n", "utf8");
