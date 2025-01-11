import { z } from "zod";

export const ArxivQuerySchema = z.object({
  search_query: z.string(),
  id_list: z.string().optional(),
  start: z.number().optional(),
  max_results: z.number().optional(),
  //   sortBy: z.enum(["relevance", "lastUpdatedDate", "submittedDate"]).optional(),
  //   sortOrder: z.enum(["ascending", "descending"]).optional(),
});

export type ArxivQuery = z.infer<typeof ArxivQuerySchema>;
