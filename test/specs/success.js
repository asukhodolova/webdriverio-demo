import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'
import log from 'loglevel';

describe('SUCCESS: My Login application', () => {

    const logger = log.getLogger('tests.e2e')

    before(function () {
      logger.info("before")
    });

    after(function () {
      logger.info("after")
    });

    beforeEach(async function () {
      logger.info("beforeEach")
    });
    
    afterEach(function () {
      logger.info("afterEach")
    });

    it('PASS: should login with valid credentials', async () => {
        logger.info('Login with valid credentials...')
        await LoginPage.open()
        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!')
    })

    it('PASS: empty test', async () => {})

    it('PASS: just open', async () => {
        await LoginPage.open()
    })

    it('PASS: another empty test', async () => {})

})
