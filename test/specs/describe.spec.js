describe("Parent", () => {
  const types = ["API", "WEB", "MOBILE"];

  types.forEach((type) => {
    describe(`Nested for ${type}`, async () => {
      it("simple test", async () => {
        await browser.url("https://webdriver.io");
      });
    });
  });

  describe("API", () => {
    it("api test 1", async () => {
      await browser.url("https://webdriver.io");
    });
    it("api test 2", async () => {
      await browser.url("https://webdriver.io");
    });

    it("api test 3", async () => {
      await browser.url("https://webdriver.io");
    });
  });

  describe("WEB", () => {
    it("web test 1", async () => {
      await browser.url("https://webdriver.io");
    });
    it("web test 2", async () => {
      await browser.url("https://webdriver.io");
    });

    it("web test 3", async () => {
      await browser.url("https://webdriver.io");
    });
  });

  describe("MOBILE", () => {
    it("mobile test 1", async () => {
      await browser.url("https://webdriver.io");
    });
    it("mobile test 2", async () => {
      await browser.url("https://webdriver.io");
    });

    it("mobile test 3", async () => {
      await browser.url("https://webdriver.io");
    });
  });
});
