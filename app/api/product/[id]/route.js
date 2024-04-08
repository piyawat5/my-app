export async function GET(req, { params }) {
  // route handler
  console.log("API!!!");
  return Response.json({
    id: params.id,
    name: "jamepipipi",
    status: "ok",
  });
}
