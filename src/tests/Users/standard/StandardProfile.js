/*eslint-disable*/

import { testBootstrapInstance } from '../../../helpers/Setup/TestBootstrap'
import ConfigModel from '../../../helpers/model/ConfigModel'

export const testInterface = testBootstrapInstance
export const standardProfileTests = () => {
  describe('Display correct admin profile details', () => {
    beforeAll((done) => {
      // TODO
    })

    it('Must show male gender radio button', async (done) => {
      const maleGenderRadioBtn = await testInterface.getVisibleElementById('male')
      expect(maleGenderRadioBtn).toBeDefined()
      done()
    })

    it('Must show female gender radio button', async (done) => {
      const femaleGenderRadioBtn = await testInterface.getVisibleElementById('female')
      expect(femaleGenderRadioBtn).toBeDefined()
      done()
    })

    it('Must show other gender radio button', async (done) => {
      const otherGenderRadioBtn = await testInterface.getVisibleElementById('other')
      expect(otherGenderRadioBtn).toBeDefined()
      done()
    })
  })
}
