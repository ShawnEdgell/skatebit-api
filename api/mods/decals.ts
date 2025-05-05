import { IncomingMessage, ServerResponse } from "http";
import fs from "fs";
import path from "path";

export default function handler(req: IncomingMessage, res: ServerResponse) {
  const filePath = path.join(process.cwd(), "data", "mods", "decals.json");

  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ error: "Failed to load decals.json" }));
      return;
    }

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(data);
  });
}
