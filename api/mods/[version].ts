import { IncomingMessage, ServerResponse } from "http";
import fs from "fs";
import path from "path";
import url from "url";

export default function handler(req: IncomingMessage, res: ServerResponse) {
  const { pathname } = url.parse(req.url || "");
  const match = pathname?.match(/\/api\/mods\/(\d+)/);

  if (!match) {
    res.statusCode = 400;
    res.end("Invalid version path");
    return;
  }

  const version = match[1];
  const filePath = path.join(process.cwd(), "data", "mods", `v${version}.json`);

  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      res.statusCode = 404;
      res.end(`No mod list found for version ${version}`);
      return;
    }

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(data);
  });
}
