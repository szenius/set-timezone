describe("Set timezone as GMT+8", () => {
  it("should set timezone to GMT+8", () => {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    expect(timezone).toEqual("Asia/Singapore");
  });
});
