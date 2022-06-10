import prisma from "@/utils/prisma";
import { stopTimesSchema } from "../joi/schemas";

export const prismaGetStopTimes = async ({
  where = {},
  select = [],
  include = [],
}) => {
  const validWhere = await stopTimesSchema.validateAsync(where);
  return await prisma.stopTimes.findMany({
    where: validWhere,
    // select: select || null,
    // include: include || null,
    orderBy: {
      stopSequence: "desc",
    },
  });
};

export const prismaGetStopTime = async ({
  where = {},
  select = [],
  include = [],
}) => {
  const validWhere = await stopTimesSchema.validateAsync(where);
  return await prisma.stopTimes.findUnique({
    where: validWhere,
    // select: select || null,
    // include: include || null,
    orderBy: {
      stopSequence: "desc",
    },
  });
};
