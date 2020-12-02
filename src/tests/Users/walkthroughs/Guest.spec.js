import { guestProfileTests } from '../guest/GuestProfile'

import { testBootstrapInstance } from '../../../helpers/Setup/TestBootstrap'
import ConfigModel from '../../../helpers/model/ConfigModel'
import guestConfig from '../../../../config/guest.config.json'

ConfigModel.config = JSON.parse(JSON.stringify(guestConfig))

const launchSetup = async () => {
    jest.setTimeout(30000);
    const launchUrl = ConfigModel.launchUrl()
    const data = await testBootstrapInstance.getPage(launchUrl)
    expect(data).toBeDefined()
    ConfigModel.initializedLaunch = true
}

testBootstrapInstance.launchSetup = launchSetup

beforeAll(() => {
    it('Must allow entering of the guest username', async (done) => {
        const usernameField = await testInterface.getVisibleElementById('Username')
        expect(usernameField).toBeDefined()
        usernameField.clear();
        usernameField.sendKeys('Admin')
        done()
    })

    it('Must Allow entering of the password', async (done) => {
        const passwordField = await testInterface.getVisibleElementById('Password')
        expect(passwordField).toBeDefined()
        passwordField.clear();
        passwordField.sendKeys('AdminPassword')
        done()
    })

    it('Must Allow clicking of the login button', async (done) => {
        const loginButton = await testInterface.getVisibleElementById('LoginButton')
        expect(loginButton).toBeDefined()
        loginButton.click();
        done()
    })

    it('Must login successfully', async (done) => {
        const loggedUserContainer = await testInterface.getElementById('LoggedUserContainer')
        expect(loggedUserContainer).toBeDefined()
        done()
    })
})

describe('Profile Guest Client', guestProfileTests)

afterAll(()=> {
    testBootstrapInstance.cleanUp()
})
