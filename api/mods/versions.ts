import { IncomingMessage, ServerResponse } from "http";
import fs from "fs";
import path from "path";

export default function handler(req: IncomingMessage, res: ServerResponse) {
  const modsDir = path.join(process.cwd(), "data", "mods");

  fs.readdir(modsDir, (err, files) => {
    if (err) {
      res.statusCode = 500;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ error: "Failed to read mods directory" }));
      return;
    }

    const versions = files
      .filter((file) => file.endsWith(".json"))
      .map((file) => file.replace(/^v/, "").replace(".json", ""));

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(versions));
  });
}
