/*eslint-disable*/

import { guestProfileTests } from '../guest/GuestProfile'

import { testBootstrapInstance } from '../../../helpers/Setup/TestBootstrap'
import ConfigModel from '../../../helpers/model/ConfigModel'
import guestConfig from '../../../../config/guest.config.json'

ConfigModel.config = JSON.parse(JSON.stringify(guestConfig))

const launchSetup = async () => {
  jest.setTimeout(30000)
    const launchUrl = ConfigModel.launchUrl()
  const data = await testBootstrapInstance.getPage(launchUrl)
  expect(data).toBeDefined()
  ConfigModel.initializedLaunch = true
}

testBootstrapInstance.launchSetup = launchSetup

describe('Successful guest login', () => {
  it('Must allow entering of the guest username', async (done) => {
    const usernameField = await testBootstrapInstance.getVisibleElementById('Username')
    expect(usernameField).toBeDefined()
    usernameField.clear()
        usernameField.sendKeys('guest')
    await testBootstrapInstance.waitForSeconds(2)
    done()
  })

  it('Must Allow entering of the password', async (done) => {
    const passwordField = await testBootstrapInstance.getVisibleElementById('Password')
    expect(passwordField).toBeDefined()
    passwordField.clear()
        passwordField.sendKeys('')
    await testBootstrapInstance.waitForSeconds(2)
    done()
  })

  it('Must Allow clicking of the login button', async (done) => {
    const loginButton = await testBootstrapInstance.getVisibleElementById('signinBtn')
    expect(loginButton).toBeDefined()
    loginButton.click()
        await testBootstrapInstance.waitForSeconds(2)
    done()
  })
})

describe('Profile Guest Client', guestProfileTests)

afterAll(() => {
  testBootstrapInstance.cleanUp()
})
