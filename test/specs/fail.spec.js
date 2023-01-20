import LoginPage from "../pageobjects/login.page.js";
import SecurePage from "../pageobjects/secure.page.js";
import log from "loglevel";

describe("FAIL: My Login application", () => {
  const logger = log.getLogger("tests.e2e");

  before(function () {
    logger.info("before");
  });

  after(function () {
    logger.info("after");
  });

  beforeEach(async function () {
    logger.info("beforeEach");
    logger.info("Running on the browser:" + browser.capabilities.browserName)
  });

  afterEach(function () {
    logger.info("afterEach");
  });

  it("FAIL: should login with valid credentials", async () => {
    logger.info("Login with valid credentials...");
    await LoginPage.open();
    await LoginPage.login("tomsmith", "SuperSecretPassword!1231223");
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(
      "You logged into a secure area!"
    );
  });

  it("FAIL: throw error", async () => {
    throw new TypeError("type error", "test.js", 10);
  });
});
