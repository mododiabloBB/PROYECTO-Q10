export class EventuallyVisibleQuestion {
    
    static isVisible(selector: string, timeout = 5000, interval = 300): Cypress.Chainable<boolean> {
        const startedAt = Date.now()

        const check = (): Cypress.Chainable<boolean> => {
            return cy.get('body', { log: false }).then(($body) => {
                const visible = $body.find(selector).length > 0 && $body.find(selector).is(':visible')

                if (visible) {
                    return cy.wrap(true, { log: false })
                }

                if (Date.now() - startedAt >= timeout) {
                    return cy.wrap(false, { log: false })
                }

                return cy.wait(interval, { log: false }).then(() => {
                    return check()
                })
            })
        }
        return check()
    }
}