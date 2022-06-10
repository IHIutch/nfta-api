import prisma from "@/utils/prisma";
import { tripSchema } from "../joi/schemas";

export const prismaGetTrips = async ({
  where = {},
  select = [],
  include = [],
}) => {
  const validWhere = await tripSchema.validateAsync(where);
  return await prisma.trips.findMany({
    where: validWhere,
    // select: select || null,
    // include: include || null,
  });
};

export const prismaGetTrip = async ({
  where = {},
  select = [],
  include = [],
}) => {
  const validWhere = await tripSchema.validateAsync(where);
  return await prisma.trips.findUnique({
    where: validWhere,
    // select: select || null,
    // include: include || null,
  });
};
