import { PrismaClient } from '@prisma/client';
import schema from '../.././../../prisma/json-schema/json-schema.json'; // Path to your generated JSON schema
import { createHandler } from '@premieroctet/next-admin/appHandler';
const prisma = new PrismaClient();
const { run } = createHandler({
  apiBasePath: '/api/admin', // The base path for your admin API
  prisma,                    // Your Prisma client instance
  schema,                    // JSON schema generated for Prisma models
  // Add any options you need, like authorization
});

export { run as GET, run as POST, run as PUT, run as DELETE };
