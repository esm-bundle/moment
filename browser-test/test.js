const timestamp = 636188400000;
describe("@esm-bundle/moment", () => {
  it("can load the ESM bundle", () => {
    return import("/base/esm/index.js");
  });

  it(`has default as a function`, async () => {
    const moment = await import("/base/esm/index.js");
    const momentDate = moment.default(timestamp);
    momentDate.format("MM DD YYYY");
  });

  it("can load the System.register bundle", () => {
    return System.import("/base/system/index.js");
  });
});
