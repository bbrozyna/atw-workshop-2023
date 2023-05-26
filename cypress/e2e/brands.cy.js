describe('Brandshop', () => {
    before(() => {
        cy.visit('');
    })

    it("Discover brands", () => {
//go to discover brands from main page
        // select witcher 3
        //expected list of collection displayed
        // brand banner displayed
        // info that it is official brand shop displayed

        cy.randomlyFailTest(Cypress.env("defualtFailureRate"));
    })

    it("Discover brands II", () => {
//hover over discover brands // todo so hover or go to
        // select "Discover all Brands" from menu
        // select game category
        // sort by A-Z
        // 11 bit studios should be on top

        cy.randomlyFailTest(Cypress.env("defualtFailureRate"));
    })

    it("Poster view", () => {
// go to any brand
        // switch from collection view to "displates" view
        // plates are displayed

        cy.randomlyFailTest(Cypress.env("defualtFailureRate"));
    })

    it("Collection view", () => {
      //go to brand
      // go open collection
      // artwork from collection should be displayed

        cy.randomlyFailTest(Cypress.env("defualtFailureRate"));
    })


    // not covered buying brands in countries without license  for example Star Wars in Venezuela

})