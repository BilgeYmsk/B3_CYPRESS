
/*
describe('First Test Suit ',()=>{  //Test Suitlerimiz function yerine bu sekilde de yazilabilir!!

    beforeEach(()=>{
        cy.visit('')
    })
    
    it(' First Test Case',()=>{  //Test Caselerimizi bu sekilde yaziyoruz 

        syntax 
    })
    it(' Second Test Case',()=>{

        syntax 
    })
    it(' Third Test Case',()=>{

        syntax 
    })
})
*/



describe('First Test Suit ',function(){  //Test Suitlerimiz

    beforeEach(()=>{   //bu sekilde her test case den önce bu calisacak
        cy.visit('')
    })

    it(' First Test Case',function(){  //Test Caselerimizi bu sekilde yaziyoruz 

        syntax 
    })
    it(' Second Test Case',function(){

        syntax 
    })
    it(' Third Test Case',function(){

        syntax 
    })
})
