import { z } from "zod";

export const search_query_prefixs = {
  Title: "ti",
  Author: "au",
  Abstract: "abs",
  Comment: "co",
  "Journal Reference": "jr",
  "Subject Category": "cat",
  "Report Number": "rn",
  Id: "id",
  All: "all",
} as const;
