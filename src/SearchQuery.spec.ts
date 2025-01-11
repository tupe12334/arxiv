import { parseSearchQueryObject } from "./SearchQuery";

describe("parseSearchQueryObject", () => {
  it("return the author parameter in the correct format", () => {
    const stringQuery = parseSearchQueryObject({
      Author: "Adrian Del Maestro",
    });
    expect(stringQuery).toBe("au:del_maestro");
  });
  it("return the all parameter in the correct format", () => {
    const stringQuery = parseSearchQueryObject({
      All: "electron",
    });
    expect(stringQuery).toBe("all:electron");
  });
});
