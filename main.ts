/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />
import compile from "https://deno.land/x/denosass@1.0.6/mod.ts";

import "$std/dotenv/load.ts";

import { start } from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";
import config from "./fresh.config.ts";

const compiler = compile("./static/scss/main.scss");
const css = compiler.to_string();
console.log(css);
compiler.to_file({
  destDir: "./static/css/",
  destFile: "style",
  format: "compressed",
});

await start(manifest, config);
