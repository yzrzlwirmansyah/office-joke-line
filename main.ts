import * as fs from "node:fs";

const JOKE =
  "The office fridge has a yoghurt from 2019 that HR won't touch and Legal won't claim, so by tenure it's our most senior employee.";

if (JOKE.length === 0 || JOKE.length > 200 || JOKE.includes("\n")) {
  throw new Error(`Invalid entry: length ${JOKE.length}, must be 1-200 chars with no newline.`);
}

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", JOKE, "utf8");
