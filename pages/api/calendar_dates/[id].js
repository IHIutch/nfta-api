import { resStatusType } from "@/utils/constants";
import {
  prismaGetCalendarDate,
  prismaGetCalendarDates,
} from "@/utils/prisma/calendar_dates";

const handler = async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const data = await prismaGetCalendarDate(req.query);
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
