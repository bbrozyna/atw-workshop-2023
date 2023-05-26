describe('Browse Collection - discovereablity', () => {
    before(() => {
        cy.visit('');
    })

    it("All collection", () => {
        // go to home page
        // select "Browse Posters"
        // all collection are displayed
        // trending is first

        cy.randomlyFailTest(Cypress.env("defualtFailureRate"));
    })

    it("Multi plate discount", () => {
        //generate multi plate discount code (eg 3 plates 30% off)
        // add 1 plates to cart
        // use discount code
        // code works and discount is not applied
        // add rest of plate
        // discount applied

        cy.randomlyFailTest(Cypress.env("defualtFailureRate"));
    })

    it("Chose Category", () => {
        // Go to "Explore Collections"
        // click category dropdown
        // chose fantasy
        // fantasy plates are displayed

        cy.randomlyFailTest(Cypress.env("defualtFailureRate"));
    })

    it("Sort category Category", () => {
        // Go to browse collection
        // click category dropdown
        // chose fantasy
        // fantasy plates are displayed
        // click sort by
        // chose New

        cy.randomlyFailTest(Cypress.env("defualtFailureRate"));
    })

})