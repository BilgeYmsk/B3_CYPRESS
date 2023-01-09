/**
 * Examples of parent commands:
    cy.visit()
    cy.get()
    cy.request()
    cy.exec()
    cy.intercept()
 */

/**
 * Child Commands
    Child commands are always chained off of a parent command, or another child command.
    The previous subject will automatically be yielded to the callback function.

* Examples of child commands:
    .click()
    .trigger()
    .find()
    .should()
    .as()
 */

    /**
     * Examples of dual commands:
      cy.contains()
      cy.screenshot()
      cy.scrollTo()
      cy.wait()
     */

//visit

///<reference types="cypress" />  
//cypress ile calismak icin referansin en basa yazilmasi gerekiyor!!

//Cypress icinde ki yapiyi göstermek icin bazi kodlar !!
cy.visit('open url')  //site erisimi icin
cy.visit('url',{timeout : 10000})

//should is a promise in here 
cy.url().should('include',path)

//finding the element       //element bulmak icin
//loc is the reference      //loc -->locator -->referans olarak kullaniliyor
cy.get(loc).click()         //locator getir ve click le!!
cy.get(loc).should('be.visible') //locator i bul ve görünür mü onayla!
cy.get(loc).should('be.exist')   

//negative senario
cy.get(loc).should('not.be.visible')  
cy.get(loc).should('not.be.exist')

//https://docs.cypress.io/api/table-of-contents
cy.get('h1').should('have.text',"Table of Contents")
cy.get('input').should('have.value',"James")

//traversing

//parent to child or child to parent
//https://docs.cypress.io/api/table-of-contents
cy.get(loc).first()
cy.get(loc).last()
cy.get(loc).eq(3).click()

cy.get(loc).next().click()
//if you dont use the multiple true it will throw an exception
cy.go('back') // come to previus page come after test
cy.get('tbody tr').nextAll.click({multiple : true})// web table like "t-body" click each of one by one
                                                    //tablo icindeki her bir elemana tiklar

cy.get(loc).prev().click() //previus one bir önceki
cy.get(loc).prevAll().click()

//position handling
//https://the-internet.herokuapp.com/login
cy.get(loc).click('top')
cy.get(loc).click('buttom')
cy.get(loc).click('topLeft')

//hover handling
//https://docs.cypress.io/api/commands/hover
cy.get(loc).trigger('mouseover').click()  //mausu hareket ettiriyor
//http://links.giveawayoftheday.com/demo.guru99.com/#
cy.get(loc).trigger('mouseup').click()
cy.get(loc).trigger('mousedown').click()



//login
cy.get('#username').clear().type('username');