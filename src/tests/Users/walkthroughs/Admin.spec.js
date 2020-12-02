import { adminProfileTests } from '../admin/AdminProfile'
import { testBootstrapInstance } from '../../../helpers/Setup/TestBootstrap'
import ConfigModel from '../../../helpers/model/ConfigModel'
import adminConfig from '../../../../config/admin.config.json'

ConfigModel.config = JSON.parse(JSON.stringify(adminConfig))

const launchSetup = async () => {
    jest.setTimeout(30000);
    const launchUrl = ConfigModel.launchUrl()
    const data = await testBootstrapInstance.getPage(launchUrl)
    expect(data).toBeDefined()
    ConfigModel.initializedLaunch = true
}

testBootstrapInstance.launchSetup = launchSetup

beforeAll(() => {
        it('Must allow entering of the admin username', async (done) => {
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

describe('Admin Profile Client', adminProfileTests)


afterAll(()=> {
    testBootstrapInstance.cleanUp()
})
