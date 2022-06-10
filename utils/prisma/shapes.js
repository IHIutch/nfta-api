import prisma from "@/utils/prisma";
import { shapesSchema } from "../joi/schemas";

export const prismaGetShapes = async ({
  where = {},
  select = [],
  include = [],
}) => {
  const validWhere = await shapesSchema.validateAsync(where);
  return await prisma.shapes.findMany({
    where: validWhere,
    // select: select || null,
    // include: include || null,
    orderBy: {
      shape_pt_sequence: "desc",
    },
  });
};

export const prismaGetShape = async ({
  where = {},
  select = [],
  include = [],
}) => {
  const validWhere = await shapesSchema.validateAsync(where);
  return await prisma.shapes.findUnique({
    where: validWhere,
    // select: select || null,
    // include: include || null,
    orderBy: {
      shape_pt_sequence: "desc",
    },
  });
};
