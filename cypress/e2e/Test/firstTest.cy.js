///<reference types="cypress" />

describe('First Test ', () => {


    it('TC001 Google Test', () => {

        cy.visit('https://www.google.de/');
        cy.get('#L2AGLb > .QS5gu').click()
        cy.get('.gLFyf').should('be.visible').type('cypress{enter}');
        cy.url().should('include','cypress')
        cy.get('[href="https://www.cypress.io/"] > .LC20lb')
          .should('have.text','JavaScript End to End Testing Framework | cypress.io testing ...')
          .click()

    })


})