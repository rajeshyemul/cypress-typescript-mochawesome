/// <reference types="cypress" />

import BasePage from "./basePage"

class LoginPage extends BasePage{
    get signinLink() { return cy.get('.login') }
    get emailAddressTxt() { return cy.get('#email') }
    get passwordTxt() { return cy.get('#passwd') }
    get signinBtn() { return cy.get('#SubmitLogin') }
    get alertBox() { return cy.get('p:contains("error")')}
    get alertMessage() { return cy.get('.alert-danger > ol > li') }
    
    /**
     * This method is responsible for login functionality. Accepts credentials and perform the login activity
     * @param emailId - Takes emailId
     * @param password - Takes password
     */
    public login(emailId: string, password: string) {
        this.signinLink.click()
        this.emailAddressTxt.type(emailId)
        this.passwordTxt.type(password)
        this.signinBtn.click()
    }

    /**
     * This method is responssible for validating the expected error message
     * @param errorMessage - Takes expected error message
     */
    public validateLoginError(errorMessage: string) {
        this.alertBox.should('be.visible')
        this.alertMessage.should('have.text', errorMessage)

    }
}
export const loginPage: LoginPage = new LoginPage()