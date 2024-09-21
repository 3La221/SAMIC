import { NextAdmin, PageProps } from "@premieroctet/next-admin";
import { getNextAdminProps } from "@premieroctet/next-admin/appRouter";
import { PrismaClient } from "@prisma/client";
import schema from "../../../../prisma/json-schema/json-schema.json"

const prisma = new PrismaClient();
 
export default async function AdminPage({
  params,
  searchParams,
}: PageProps) {
  const props = await getNextAdminProps({
    params: params.nextadmin,
    searchParams,
    basePath: "/admin",
    apiBasePath: "/api/admin",
    prisma,
    schema,
    /*options*/
  });
 
  return <NextAdmin {...props}/>;
}