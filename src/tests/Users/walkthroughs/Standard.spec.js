/*eslint-disable*/

import { standardProfileTests } from '../standard/StandardProfile'
import { testBootstrapInstance } from '../../../helpers/Setup/TestBootstrap'
import ConfigModel from '../../../helpers/model/ConfigModel'
import standardConfig from '../../../../config/standard.config.json'

ConfigModel.config = JSON.parse(JSON.stringify(standardConfig))

const launchSetup = async () => {
  jest.setTimeout(30000)
  const launchUrl = ConfigModel.launchUrl()
  const data = await testBootstrapInstance.getPage(launchUrl)
  expect(data).toBeDefined()
  ConfigModel.initializedLaunch = true
}

testBootstrapInstance.launchSetup = launchSetup

describe('Successful standard user login', () => {
  it('Must allow entering of the admin username', async (done) => {
    const usernameField = await testBootstrapInstance.getVisibleElementById('Username')
    expect(usernameField).toBeDefined()
    usernameField.clear()
    usernameField.sendKeys('standard')
    await testBootstrapInstance.waitForSeconds(2)
    done()
  })

  it('Must Allow entering of the password', async (done) => {
    const passwordField = await testBootstrapInstance.getVisibleElementById('Password')
    expect(passwordField).toBeDefined()
    passwordField.clear()
    passwordField.sendKeys('StandardPassword')
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

  it('Must login successfully', async (done) => {
    const genderSubmitBtn = await testBootstrapInstance.getElementById('submitGenderBtn') // check url or something unique to standard profile
    expect(genderSubmitBtn).toBeDefined()
    await testBootstrapInstance.waitForSeconds(2)
    done()
  })
})

describe('Standard Profile Client', standardProfileTests)

afterAll(() => {
  testBootstrapInstance.cleanUp()
})
