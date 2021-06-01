/*eslint-disable*/
/*eslint-disable*/

import { testBootstrapInstance } from '../../../helpers/Setup/TestBootstrap'
import ConfigModel from '../../../helpers/model/ConfigModel'

export const testInterface = testBootstrapInstance
export const adminProfileTests = () => {
  describe('Display correct admin profile details', () => {
    beforeAll((done) => {
      // TODO
    })

    it('Must show file upload input', async (done) => {
      const fileUploadInput = await testInterface.getVisibleElementById('fileUploadInput')
      expect(fileUploadInput).toBeDefined()
      done()
    })

    it('Must show file upload button', async (done) => {
      const fileUploadBtn = await testInterface.getVisibleElementById('submitFileBtn')
      expect(fileUploadBtn).toBeDefined()
      done()
    })
  })
}
