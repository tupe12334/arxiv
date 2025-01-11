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

/**
 * This function get an object with the search query as key value pairs and build from it a string that can be used in the search query.
 * @param query
 */
export function parseSearchQueryObject(
  query: Record<keyof typeof search_query_prefixs, string>
) {}
