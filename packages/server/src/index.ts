/**
 * SPDX-License-Identifier: MIT
 *
 * Copyright 2021
 */

import express = require("express");
const app = express();
app.use(express.static("public"));

app.get("/hello", function (req, res) {
  res.send("Hello World!");
});

app.get("/countdown", function (req, res) {
  res.writeHead(200, {
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    Connection: "keep-alive",
  });
  countdown(res, 10);
});

function countdown(res: express.Response, count: number) {
  res.write(`data: ${count}`);
  console.log(`count is ${count}`);
  console.log(res);
  if (count) setTimeout(() => countdown(res, count - 1), 1000 * 1);
  else {
    res.end();
  }
}

app.listen(3000, () => console.log("SSE app listening on port 3000!"));
