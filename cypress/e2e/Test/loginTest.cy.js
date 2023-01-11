///<reference types="cypress" />

describe('Login Test', () => {


    it('TC002 positive scenario', () => {

        cy.visit('https://www.demoblaze.com/');
        cy.viewport(1500, 800) //sayfanin görünümünü degistiriyor sag kösede görünüyr ölcüleri
        cy.viewport('samsung-note9') //otomatik secenekleri veriyor
        cy.viewport('macbook-16')
        cy.get('#login2').click().wait(500)
        cy.get('#loginusername').type('username').wait(500) //yarim saniye bekletiyoruz
        cy.get('#loginpassword').type('password')
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary')
            .click()
        cy.get('#nameofuser').should('be.visible')

    })


})