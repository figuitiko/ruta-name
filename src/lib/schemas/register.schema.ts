import { REQUIRED_MSG } from "@/constants/components/register-wizard";
import { z } from "zod";

const RecordSchema = z.record(
  z.string(),
  z.string().min(1, { message: REQUIRED_MSG })
);

export { RecordSchema };
