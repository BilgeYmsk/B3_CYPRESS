export class Login { //public class yaparak her yerden ulasilabilir yaptik

    navigate() {
        cy.visit('https://www.demoblaze.com/');
    }

    title(){

        cy.title().should('eq','STORE');
    }

    loginBtn() {

        cy.get('#login2').click().wait(500);
        return this

    }

    username() {

        cy.get('#loginusername').type('username').wait(500); //yarim saniye bekletiyoruz
        return this

    }

    password() {

        cy.get('#loginpassword').type('password');
        return this

    }

    submit() {

        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary') .click();
        return this
    }


    assert() {

        cy.get('#nameofuser').should('be.visible');

    }













}