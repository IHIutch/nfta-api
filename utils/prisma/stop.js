import prisma from "@/utils/prisma";
import { stopsSchema } from "../joi/schemas";

export const prismaGetStops = async ({
  where = {},
  select = [],
  include = [],
}) => {
  const validWhere = await stopsSchema.validateAsync(where);
  return await prisma.stops.findMany({
    where: validWhere,
    // select: select || null,
    // include: include || null,
  });
};

export const prismaGetStop = async ({
  where = {},
  select = [],
  include = [],
}) => {
  const validWhere = await stopsSchema.validateAsync(where);
  return await prisma.stops.findUnique({
    where: validWhere,
    // select: select || null,
    // include: include || null,
  });
};
