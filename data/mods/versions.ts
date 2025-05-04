import { readdirSync } from "fs";
import { join } from "path";

export const GET = async () => {
  try {
    const dir = join(process.cwd(), "data", "mods");
    const files = readdirSync(dir).filter(
      (f) => f.startsWith("v") && f.endsWith(".json")
    );
    const versions = files.map((f) => f.replace(/^v|\.json$/g, ""));
    return new Response(JSON.stringify(versions), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch {
    return new Response(JSON.stringify({ error: "Failed to read versions" }), {
      headers: { "Content-Type": "application/json" },
      status: 500,
    });
  }
};
