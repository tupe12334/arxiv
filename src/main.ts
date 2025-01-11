/**
 * @author @tupe12334
 * @see https://info.arxiv.org/help/api/user-manual.html
 *
 * The API of arxiv work according to the Atom "rfc4287" standard.
 * @see https://www.ietf.org/rfc/rfc4287.txt
 */
import axios from "axios";
import { ArxivQuery } from "./Query";

export const ArxivApiBaseUrl = "http://export.arxiv.org/api/query";

export async function ArxivClientGet(query: ArxivQuery) {
  const response = await axios.post(ArxivApiBaseUrl, query);
  const { data } = response;
  return data;
}
