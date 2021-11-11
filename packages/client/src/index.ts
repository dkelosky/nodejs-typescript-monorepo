/**
 * SPDX-License-Identifier: MIT
 *
 * Copyright 2021
 */

import { ClientRequest, request } from "http";

const options = {
  port: 3000,
  host: "localhost",
  method: "GET",
  // path: '/hello',
  path: "/countdown",
};

const req: ClientRequest = request(options, (answer) => {
  answer.on("data", (chunk: Buffer) => {
    console.log("Got response: ");
    console.log(`   ${chunk.toString()}`);

  });

  answer.on("end", () => {
    console.log("end");
  });

  answer.on("error", (err) => {
    console.log(err);
  });

  answer.on("close", () => {
    console.log("answer close");
  });
});

req.on("connect", () => {
  console.log(`connect`);
});

req.on("close", () => {
  console.log(`connection closed`);
});

req.end();
