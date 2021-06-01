/*eslint-disable*/

import { testBootstrapInstance } from './Setup/TestBootstrap'
import ConfigModel from './model/ConfigModel'
let testInterface = testBootstrapInstance

beforeAll(async () => {
  jest.setTimeout(30000)
  testInterface = testBootstrapInstance
  await testInterface.init()

  const loginUrl = ConfigModel.loginUrl()
  const data = await testInterface.getPage(loginUrl)
  await testInterface.maximizeWindow()
  expect(data).toBeDefined()
})

afterAll(async () => {
  await testInterface.waitForSeconds(5)
})

beforeEach(async () => {
  // todo
})
