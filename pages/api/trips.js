import { resStatusType } from "@/utils/constants";
import { prismaGetTrip, prismaGetTrips } from "@/utils/prisma/trips";
import qs from "qs";

const handler = async (req, res) => {
  const { method } = req;
  const paramString = req.url.split("?")[1];
  const query = paramString ? qs.parse(paramString) : {};

  switch (method) {
    case "GET":
      try {
        let data = null;
        if (query?.unique) {
          data = await prismaGetTrip(query);
        } else {
          data = await prismaGetTrips(query);
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
