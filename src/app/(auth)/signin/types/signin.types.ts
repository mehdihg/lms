import { z } from "zod";
import { signinSchema } from "./signin.schema";

export type Siginin =z.infer<typeof signinSchema>