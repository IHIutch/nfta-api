import { resStatusType } from "@/utils/constants";
import { prismaGetStop } from "@/utils/prisma/stop";

const handler = async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const { stop_id } = req.query;
        const data = await prismaGetStop({
          where: {
            stop_id,
          },
        });
        res.setHeader("Cache-Control", "public, max-age=0, s-maxage=86400"); // 1 day
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
