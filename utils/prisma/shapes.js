import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const prismaGetShapes = async ({
  where: {},
  select: [],
  include: [],
}) => {
  return await prisma.shapes.findMany({
    where,
    // select: select || null,
    include: include || null,
    orderBy: {
      shapePtSeq: "desc",
    },
  });
};

export const prismaGetShape = async ({
  where: {},
  select: [],
  include: [],
}) => {
  return await prisma.shapes.findUnique({
    where,
    // select: select || null,
    include: include || null,
  });
};
