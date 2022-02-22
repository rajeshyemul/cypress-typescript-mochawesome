import { loginPage } from "../pages/loginPage";

describe('My Account functionality', () => {
    beforeEach(() => {
        loginPage.launchApplication()
    })
    it('Sample Test', () => {
        console.log("This is a sample test")
        expect(false).equal(true)
    })
})