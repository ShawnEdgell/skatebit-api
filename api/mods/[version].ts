import { IncomingMessage, ServerResponse } from "http";
import fs from "fs";
import path from "path";
import url from "url";

export default function handler(req: IncomingMessage, res: ServerResponse) {
  const { pathname } = url.parse(req.url || "");
  const match = pathname?.match(/\/api\/mods\/([^/]+)/); // Match slugs like "1228", "decals", etc.

  if (!match) {
    res.statusCode = 400;
    res.end("Invalid version path");
    return;
  }

  const slug = match[1];
  const fallbackPath = path.join(process.cwd(), "data", "mods", `${slug}.json`);
  const prefixedPath = path.join(
    process.cwd(),
    "data",
    "mods",
    `v${slug}.json`
  );

  const tryPaths = [prefixedPath, fallbackPath];

  for (const filePath of tryPaths) {
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, "utf-8");
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end(data);
      return;
    }
  }

  res.statusCode = 404;
  res.end(`No mod list found for version slug "${slug}"`);
}
