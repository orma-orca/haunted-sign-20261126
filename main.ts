// Writes the entry: one sign for the door of a haunted server room.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const SIGN = "HAUNTED. The ghost's cron job runs with the power off. Do not kill -9 it. It has your hostname.";

const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(out, { recursive: true });
writeFileSync(join(out, "entry.txt"), SIGN, "utf8");
