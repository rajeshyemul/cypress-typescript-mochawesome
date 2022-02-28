export default class BasePage {

    /**
     * This method is responssible for pausing the execution for specified seconds
     * @param seconds - Takes time in seconds to pause the execution
     */
    public pause(seconds: number) {
        cy.wait(seconds * 1000)
    }

    /**
     * This method is responssible for logging the information
     * @param message - Takes message to be displayed
     */
    public logInfo(message: string) {
        cy.log(message)
    }

    /**
     * This method launches the application
     */
    public launchApplication() {
        cy.visit('/')
    }

}