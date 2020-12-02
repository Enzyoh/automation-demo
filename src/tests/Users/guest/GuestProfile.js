import { testBootstrapInstance} from "../../../helpers/Setup/TestBootstrap"
import ConfigModel from "../../../helpers/model/ConfigModel"

export const testInterface = testBootstrapInstance
export const guestProfileTests = () => {

    describe('Display correct profile details', () => {
        beforeAll((done) => {
            if (!ConfigModel.initializedLaunch) {
                testBootstrapInstance.launchSetup().then((response)=> {
                    done()
                }).catch((error)=> {
                    console.debug(error)
                })
            } else {
                done()
            }
        })

        it('Be routed to the correct url', async () => {
            const data = await testInterface.getCurrentPageUrl()
            const profilePageUrl = ConfigModel.profileUrl()
            expect(data).toBe(profilePageUrl)
        })

        it('Must display I.D field', async (done) => {
            const id = await testInterface.getVisibleElementById('id')
            expect(id).toBeDefined()
            done()
        })    
    })
}