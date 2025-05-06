// pages/api/mods/versions.ts
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

    const jsonFiles = files.filter((file) => file.endsWith(".json"));

    const versions = jsonFiles
      .map((file) => {
        const filePath = path.join(modsDir, file);
        try {
          const raw = fs.readFileSync(filePath, "utf-8");
          const data = JSON.parse(raw);

          return {
            slug: file.replace(/^v/, "").replace(".json", ""), // fallback slug
            label: data.label || "Unnamed",
            description: data.description || "",
          };
        } catch (e) {
          return null; // skip bad files
        }
      })
      .filter(Boolean);

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(versions));
  });
}
