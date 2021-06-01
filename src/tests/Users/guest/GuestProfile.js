import { testBootstrapInstance} from "../../../helpers/Setup/TestBootstrap"
import ConfigModel from "../../../helpers/model/ConfigModel"

export const testInterface = testBootstrapInstance
export const guestProfileTests = () => {

    describe('Display correct profile details', () => {
        beforeAll((done) => {
            // TODO
        })

        it('Must display observer text', async (done) => {
            const id = await testInterface.getVisibleElementById('observerText')
            expect(id).toBeDefined()
            done()
        })    
    })
}