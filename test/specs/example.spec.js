import LoginPage from "../pageobjects/login.page.js";
import SecurePage from "../pageobjects/secure.page.js";
import log from "loglevel";
import { currentTest } from "@zebrunner/javascript-agent-webdriverio";

describe("My Login application", () => {
  const logger = log.getLogger("tests.e2e");

  before(function () {
    logger.info("before");
  });

  after(function () {
    logger.info("after");
  });

  beforeEach(async function () {
    logger.info("beforeEach");
  });

  afterEach(function () {
    logger.info("afterEach");
  });

  it("PASS: should login with valid credentials", async () => {
    logger.info("Login with valid credentials...");

    await LoginPage.open();
    await LoginPage.login("tomsmith", "SuperSecretPassword!");
    currentTest.saveScreenshot(browser);
    currentTest.setMaintainer("asukhodolova");
    currentTest.attachLabel("status", "passed");
    currentTest.attachArtifactReference("SUT", "https://myapp.com/app");

    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(
      "You logged into a secure area!"
    );
  });

  it("SKIP: inside the test", function () {
    this.skip();
  });

  it("FAIL: with TypeError", async () => {
    throw new TypeError("test error", "test.js", 10);
  });

  it("PASS: empty test", async () => {});

  it.skip("SKIP: from it", async () => {});

  it("FAIL: should failed with incorrect text", async () => {
    await LoginPage.open();
    await LoginPage.login("tomsmith", "SuperSecretPassword!");
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(
      "You logged into a unsecure area!"
    );
  });

  it("FAIL: should failed with invalid credentials", async () => {
    await LoginPage.open();
    await LoginPage.login("tomsmith", "qwe!");
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(
      "You logged into a secure area!"
    );
  });
});
