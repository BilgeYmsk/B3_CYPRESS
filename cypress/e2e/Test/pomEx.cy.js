///<reference types="cypress" />

import { Login } from "../../pageObject/login";

const login = new Login;


describe('Login Test page object model', () => {


    it('TC001 positive scenario', () => {

        login.navigate();
        login.title();

    })

    it('TC002 positive scenario', () => {
        /*
                login.loginBtn();
                login.username();
                login.password();
                login.submit();
                login.assert();
                */

        login.loginBtn() //bu sekilde return this yazinca bu sekilde de test geciyor. 
        .username()
        .password()
        .submit()
        .assert()

    })


})