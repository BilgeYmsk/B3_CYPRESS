///<reference types="cypress" />

describe('Login Test with Custom Command ', () => {


    it('TC002 positive scenario', () => {

       cy.visit(Cypress.env('baseUrl'))

       cy.loginCommand(Cypress.env('username'), Cypress.env('password'))
       
        cy.get('#nameofuser').should('be.visible')
        
    })


})