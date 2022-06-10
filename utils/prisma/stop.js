import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const prismaGetStops = async ({
  where: {},
  select: [],
  include: [],
}) => {
  return await prisma.stops.findMany({
    where,
    // select: select || null,
    include: include || null,
  });
};

export const prismaGetStop = async ({ where: {}, select: [], include: [] }) => {
  return await prisma.stops.findUnique({
    where,
    // select: select || null,
    include: include || null,
  });
};
