import { resStatusType } from "@/utils/constants";
import { prismaGetShape, prismaGetShapes } from "@/utils/prisma/shapes";

const handler = async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        let data = null;
        if (req.query?.unique) {
          data = await prismaGetShape(req.query);
        } else {
          data = await prismaGetShapes(req.query);
        }
        res.status(resStatusType.SUCCESS).json(data);
      } catch (error) {
        res.status(resStatusType.BAD_REQUEST).json(error.message);
      }
      break;
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(resStatusType.NOT_ALLOWED).end(`Method ${method} Not Allowed`);
  }
};

export default handler;
