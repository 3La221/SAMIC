import { createHandler } from "@premieroctet/next-admin/appHandler";
import { PrismaClient } from "@prisma/client";
import schema from "../../../../prisma/json-schema/json-schema.json"

const prisma = new PrismaClient();
 
const { run } = createHandler({
  apiBasePath: "/api/admin",
  prisma,
  schema,
  /*options*/
});
 
export { run as DELETE, run as GET, run as POST };