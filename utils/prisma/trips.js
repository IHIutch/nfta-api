import { PrismaClient } from "@prisma/client";
import { tripSchema } from "../joi/schemas";

const prisma = new PrismaClient();

export const prismaGetTrips = async ({ where = {}, select }) => {
  try {
    const validWhere = await tripSchema.validateAsync(where);
    return await prisma.trips.findMany({
      where: validWhere,
      select,
    });
  } catch (error) {
    throw new Error(error);
  }
};

export const prismaGetTrip = async ({ where: {}, select: [], include: [] }) => {
  return await prisma.trips.findUnique({
    where,
    // select: select || null,
    include: include || null,
  });
};
