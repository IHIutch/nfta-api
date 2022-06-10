import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const prismaGetCalendarDatess = async ({
  where: {},
  select: [],
  include: [],
}) => {
  return await prisma.stopTimes.findMany({
    where,
    // select: select || null,
    include: include || null,
    orderBy: {
      stopSequence: "desc",
    },
  });
};

export const prismaGetCalendarDates = async ({
  where: {},
  select: [],
  include: [],
}) => {
  return await prisma.stopTimes.findUnique({
    where,
    // select: select || null,
    include: include || null,
  });
};
