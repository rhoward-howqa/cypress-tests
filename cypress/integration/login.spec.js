/// <reference types="cypress" />

describe('registered user can login', () => {
    
    it('successfully log in user', () => {
      cy.visit('/login')
      cy.get('#username').type('Ryan')
      cy.get('#password').type('123')
      cy.get('#submit').click()

      cy.get('h1').contains('Hello Ryan')
      
      cy.url().should('include', '/todo')

      cy.get('#todoInput').should('be.visible')
    })
  })