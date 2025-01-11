/**
 * @author @tupe12334
 * @see https://info.arxiv.org/help/api/user-manual.html
 *
 * The API of arxiv work according to the Atom "rfc4287" standard.
 * @see https://www.ietf.org/rfc/rfc4287.txt
 */
import axios from "axios";
import { ArxivQuery } from "./Query";

class ArxivClient {
  private baseUrl = "http://export.arxiv.org/api/query";
  constructor() {}
  async get(query: ArxivQuery) {
    const response = await axios.post(this.baseUrl, query);
    const { data } = response;
    return data;
  }
}

export const arxiv = new ArxivClient();
