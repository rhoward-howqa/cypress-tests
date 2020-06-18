/// <reference types="cypress" />

describe('User can be registered', () => {
    
    it('successfully registers user', () => {
      cy.visit('/register')
      cy.get('#username').type('Ryan')
      
      cy.get('#email').type('Ryan2@test.com')
      cy.get('#password').type('123')
      cy.get('#password2').type('123')
      cy.get('#submit').click()
      
      cy.contains('.alert','Congratulations').should('be.visible')
      cy.url().should('include', '/login')
    })
  })