import prisma from "@/utils/prisma";
import { calendarDatesSchema } from "../joi/schemas";

export const prismaGetCalendarDate = async ({
  where = {},
  select = [],
  include = [],
}) => {
  const validWhere = await calendarDatesSchema.validateAsync(where);
  return await prisma.stopTimes.findMany({
    where: validWhere,
    // select: select || null,
    include: include || null,
    orderBy: {
      stop_sequence: "desc",
    },
  });
};

export const prismaGetCalendarDates = async ({
  where = {},
  select = [],
  include = [],
}) => {
  const validWhere = await calendarDatesSchema.validateAsync(where);
  return await prisma.stopTimes.findUnique({
    where: validWhere,
    // select: select || null,
    include: include || null,
    orderBy: {
      stop_sequence: "desc",
    },
  });
};
