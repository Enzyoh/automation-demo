import { testBootstrapInstance } from "../../../helpers/Setup/TestBootstrap"
import ConfigModel from "../../../helpers/model/ConfigModel"

export const testInterface = testBootstrapInstance
export const adminProfileTests = () => {
    const scriptCheckAfterDelaySec = 2

    describe('Display correct admin profile details', () => {
        beforeAll((done) => {
            testBootstrapInstance.launchSetup().then((response) => {
                done()
            }).catch((error) => {
                console.log(error)
            })
        })

        it('Must be routed to the correct url', async (done) => {
            const data = await testInterface.getCurrentPageUrl()
            const callStartUrl = ConfigModel.callStartUrl()
            expect(data).toBe(callStartUrl)
            done()
        })
        
        it('Must display titles drop down', async (done) => {
            const usernameField = await testInterface.getVisibleElementById('title')
            expect(usernameField).toBeDefined()
            done()
        })

    })
}