import dotenv from "dotenv";
import { string } from "yup";

dotenv.config();

export const DATABASE_URL : string = process.env.DATABASE_URL || "";
