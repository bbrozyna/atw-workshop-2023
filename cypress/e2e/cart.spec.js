describe('Cart Operations', () => {
    beforeEach(() => {
        cy.visit('');
    })


    // it("Given I've added plate When I change its addons Then I can buy it with addons", () => {
    it("should change the price when adding addons", () => {
        //add plate to cart
        //in cart
        // add gloss
        // add frame
        // change size
        // change count
        //check if price is correct

        cy.randomlyFailTest(Cypress.env("defualtFailureRate"));
    })

    it("should change the currency for a given country", () => {
        //add plate to cart
        //in cart
        // change country to poland
        // price is in euro
        // change country to usa
        // price is in usd

        cy.randomlyFailTest(Cypress.env("defualtFailureRate"));
    })

    it("should apply discount code", () => {
        //add plate to cart
        //in cart click on discount
        // insert  discount code
        // price is lower

        cy.randomlyFailTest(Cypress.env("defualtFailureRate"));
    })

    it("should remove items from cart", () => {
        //add plate to cart
        // add difrent plate to cart
        // go to cart
        // remove 1st plate
        // plate remove
        // remove 2nd plate
        //redirect to homepage

        cy.randomlyFailTest(Cypress.env("defualtFailureRate"));
    })

    // trees counter is not checkedm
    //not covered cant sell some products in some countires -example starwars in venezula
})