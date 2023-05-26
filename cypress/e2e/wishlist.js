describe('Test for wishlist', () => {
  before(() => {
    cy.visit('');
  })

  it("should be preserved on wishlist", () => {
      //add something to wishlist
        //go to wishlist
        //click on
        //check if item is still in wishlist
        // and has added to cart text
        cy.randomlyFailTest(Cypress.env("defualtFailureRate"));
    })

    it("Given I've added product to wishlist When I go to wishlist Then I can remove it", () => {
        // go to home page
        // add product from feed to wishlist
        // go to wishlist
        // check if product is displayed
        // remove product
        // check if product is no longer displayed

      cy.randomlyFailTest(Cypress.env("defualtFailureRate"));
    })

    it("Given I am  product page When I click on heart I can add to wishlist", () => {
       //go to random product page
         // click on heart
            // check if product is added to wishlist

      cy.randomlyFailTest(Cypress.env("defualtFailureRate"));
    })



})