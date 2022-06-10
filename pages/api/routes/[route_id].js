import { resStatusType } from "@/utils/constants";
import { prismaGetRoute, prismaGetRoutes } from "@/utils/prisma/routes";

const handler = async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const { route_id } = req.query;
        const data = await prismaGetRoute({
          where: {
            route_id,
          },
        });
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
