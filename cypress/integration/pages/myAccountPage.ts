/// <reference types="cypress" />

import { loginPage } from "./loginPage"

class MyAccountPage {
    get signoutLink() { return cy.get('.logout') }
    get pageHeading() { return cy.get('.page-heading') }

    /**
     * This method is responsible for validating successful login
     */
    public validateSuccessfulLogin() {
        this.pageHeading.should('have.text', 'My account')
    }

    /**
     * This method is responssible for performing logout activity
     */
    public logout() {
        this.signoutLink.click()
    }

    /**
     * This method is responsible for validating successful logout
     */
    public validateSuccessfulLogout() {
        loginPage.signinLink.should('be.visible')
    }
}

export const myAccountPage: MyAccountPage = new MyAccountPage()