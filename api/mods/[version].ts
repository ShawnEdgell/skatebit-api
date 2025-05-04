export const GET = async ({ params }) => {
  const version = params.version;
  try {
    const data = await import(`../../../data/mods/v${version}.json`);
    return new Response(JSON.stringify(data.default), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch {
    return new Response(JSON.stringify({ error: "Version not found" }), {
      headers: { "Content-Type": "application/json" },
      status: 404,
    });
  }
};
