import LoginPage from "../pageobjects/login.page.js";
import SecurePage from "../pageobjects/secure.page.js";
import log from "loglevel";
import { currentTest } from "@zebrunner/javascript-agent-webdriverio";

describe("SUCCESS: My Login application", () => {
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

  it("PASS: empty test", async () => {});

  it("PASS: should login with valid credentials", async () => {
    logger.info("Login with valid credentials...");
    await LoginPage.open();
    await LoginPage.login("tomsmith", "SuperSecretPassword!");
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(
      "You logged into a secure area!"
    );
  });

  it("should reload my session with current capabilities", async () => {
    console.log(browser.sessionId); // outputs: e042b3f3cd5a479da4e171825e96e655
    await browser.reloadSession();
    await browser.url("https://google.com");
    console.log(await browser.getUrl());

    await browser.pause(3000);
    await currentTest.saveScreenshot(browser);
    console.log(browser.sessionId); // outputs: 9a0d9bf9d4864160aa982c50cf18a573
  });

  it("PASS: just open", async () => {
    await LoginPage.open();
  });

  it("PASS: login success after reload a session", async () => {
    logger.info("Login with valid credentials...");
    await LoginPage.open();
    await LoginPage.login("tomsmith", "SuperSecretPassword!");
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(
      "You logged into a secure area!"
    );
  });

  it("PASS: another empty test", async () => {});
});
