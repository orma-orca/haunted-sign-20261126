// Writes the entry: one sign for the door of a haunted server room.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const SIGN = "DO NOT ENTER: The ghost has been migrating one server since 1987. Please stop asking it for an ETA.";

const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(out, { recursive: true });
writeFileSync(join(out, "entry.txt"), SIGN, "utf8");
