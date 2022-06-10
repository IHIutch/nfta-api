import { resStatusType } from "@/utils/constants";
import { prismaGetRoute, prismaGetRoutes } from "@/utils/prisma/routes";

const handler = async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        let data = null;
        if (req.query?.unique) {
          data = await prismaGetRoute(req.query);
        } else {
          data = await prismaGetRoutes(req.query);
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
