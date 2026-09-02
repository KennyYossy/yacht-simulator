// spinnaker.html は Artifact 本体（<head>/<body> ラッパは公開時にホスト側が付ける）。
// このスクリプトは、そこからブラウザで直接開ける index.html を生成する。
import { readFileSync, writeFileSync } from "node:fs";

const body = readFileSync("spinnaker.html", "utf8");

writeFileSync("index.html", [
  "<!doctype html>",
  '<html lang="ja">',
  "<head>",
  '<meta charset="utf-8">',
  '<meta name="viewport" content="width=device-width, initial-scale=1">',
  "<style>html{color-scheme:light dark}body{margin:0}img{max-width:100%}[hidden]{display:none!important}</style>",
  "</head>",
  "<body>",
  body,
  "</body>",
  "</html>",
  "",
].join("\n"));

console.log("index.html generated from spinnaker.html");
