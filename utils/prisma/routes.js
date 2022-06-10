import prisma from "@/utils/prisma";
import { routesSchema } from "../joi/schemas";

export const prismaGetRoutes = async ({
  where = {},
  select = [],
  include = [],
}) => {
  const validWhere = await routesSchema.validateAsync(where);
  return await prisma.routes.findMany({
    where: validWhere,
    // select: select || null,
    // include: include || null,
  });
};

export const prismaGetRoute = async ({
  where = {},
  select = [],
  include = [],
}) => {
  const validWhere = await routesSchema.validateAsync(where);
  return await prisma.routes.findUnique({
    where: validWhere,
    // select: select || null,
    // include: include || null,
  });
};
