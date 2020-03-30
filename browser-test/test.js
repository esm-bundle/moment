import moment from "../esm/index.js";
const timestamp = 636188400000;
describe("@esm-bundle/moment", () => {
  it("can load the ESM bundle", () => {
    return import("/base/esm/index.js");
  });

  it(`has default as a function`, async () => {
    const momentDate = moment(timestamp);
    expect(momentDate.format("MM")).toEqual("02");
  });

  describe(`systemjs`, () => {
    it("can load the System.register bundle", () => {
      return System.import("/base/system/index.js");
    });

    it(`has default as a function`, async () => {
      const moment = await System.import("/base/system/index.js");
      const momentDate = moment.default(timestamp);
      expect(momentDate.format("MM")).toEqual("02");
    });
  });
});
