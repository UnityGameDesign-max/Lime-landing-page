import { z } from "zod";



export const LeadDetailValidator = z.object({
   
    idnumber: z.string(),
    firstnames: z.string(),
    surname: z.string(),
    cellular: z.string(),
    email: z.string().email(),
})

export type TLeadDetailValidator = z.infer<typeof LeadDetailValidator>