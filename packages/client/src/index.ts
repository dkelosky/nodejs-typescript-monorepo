/**
 * SPDX-License-Identifier: MIT
 *
 * Copyright 2021
 */

import { ClientRequest, request } from "http";

// console.log(`hello client`);

const options = {
  port: 3000,
  host: "localhost",
  method: "GET",
  // path: '/hello',
  path: "/countdown",
};

const req: ClientRequest = request(options, (answer) => {
  answer.on("data", (chunk: Buffer) => {
    console.log("Got data: ");
    console.log(`   ${chunk.toString()}`);

    // TNOTE(Kelosky): we can end when we see something interesting
    // if (chunk.toString().trim() === "data: 5") {
    //     answer.socket.end();
    // }
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

// res.end(() => {
//     console.log(`end`);
// });

req.on("connect", () => {
  console.log(`connect`);
});

req.on("close", () => {
  console.log(`connection closed`);
});

req.end();
