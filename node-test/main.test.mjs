describe("@esm-bundle/moment", () => {
  it("can load the esm bundle without dying", () => {
    return import("../esm/index.js");
  });
});
