import moment from "../esm/index.js";
const timestamp = 636188400000;
describe("@esm-bundle/moment", () => {
  it("can load the esm bundle without dying", () => {
    return import("../esm/index.js");
  });

  it(`resolves as a function`, async () => {
    const momentDate = moment(timestamp);
    expect(momentDate.format("MM")).to.eq("02");
  });
});
