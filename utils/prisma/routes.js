import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const prismaGetRoutes = async ({
  where: {},
  select: [],
  include: [],
}) => {
  return await prisma.routes.findMany({
    where,
    // select: select || null,
    include: include || null,
  });
};

export const prismaGetRoute = async ({
  where: {},
  select: [],
  include: [],
}) => {
  return await prisma.routes.findUnique({
    where,
    // select: select || null,
    include: include || null,
  });
};
