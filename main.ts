import * as fs from "node:fs";

const JOKE =
  "The office fridge has a yoghurt from 2019 that HR won't touch and Legal won't claim, so by tenure it's our most senior employee.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", JOKE, "utf8");
