
describe('Home Page', () => {
    before(() => {
        cy.visit('');
    })

    it('should display Calendar of Events and big banner', () => {
        // Enter main page
        // on top of side there should slide with new products and promotion aka Calendar of Events
        // check if it displays properly
        // and elements are clickable

        //check also big banner above it if it displays and is clickable

        cy.randomlyFailTest(Cypress.env("defualtFailureRate"));
    })

it('should display all clickable categories', () => {
        // check if all categories are displayed
        // check if they are clickable

    cy.randomlyFailTest(Cypress.env("defualtFailureRate"));
    })

    it('should display footer', () => {
        // check if footer is displayed
        // check if all elements are displayed
        // check if all elements are clickable

        cy.randomlyFailTest(Cypress.env("defualtFailureRate"));
    })

    it('should display logo', () => {
        // check if logo is displayed
        // check if logo is clickable

        cy.randomlyFailTest(Cypress.env("defualtFailureRate"));
    })


    it('should display best selling feed', () => { // todo important
        //check if best selling feed is displayed
        cy.randomlyFailTest(Cypress.env("defualtFailureRate"));
    })

    it("", () => {
        // click first product
        // add it to cart
        // check if go to cart screen is displayed
        // go to cart and check product
    })
    it('Search', () => {
        // check if search bar is displayed
        // check if it is clickable
        // scroll down and check if it is no longer displayed
        // scroll up and check if it is displayed
        // scroll down and click on magnifing glass
        // check if search bar is displayed

        cy.randomlyFailTest(Cypress.env("defualtFailureRate"));
    })


    it('Add to wishlist', () => { // todo important
        // select random product in any feed on HomePage
        // click on heart
        // check if product is added to wishlist

        cy.randomlyFailTest(Cypress.env("defualtFailureRate"));
    })
})
