describe('The Home Page', () => {
    it('successfully loads', () => {
      cy.visit('/')
      cy.contains('.navbar-brand', 'Docket')

      cy.get('#navbarText').contains('Home')
      cy.get('#navbarText').contains('Login')
      cy.get('#navbarText').contains('Register')
      
      
    })
  })