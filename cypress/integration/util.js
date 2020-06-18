//login util
export const login = (username, password) => {
    cy.get('#username').type(username)
    cy.get('#password').type(password)
    cy.get('#submit').click()
  }


 //register user util
 export const register = (username,email,password) => {
    cy.get('#username').type(username)
    cy.get('#email').type(email)
    cy.get('#password').type(password)
    cy.get('#password2').type(password)
    cy.get('#submit').click()
 }


 export const getToken = () => {
   cy.visit('/profile')

   const path = 'div.jumbotron div.container.text-center div.row.justify-content-md-center div.col-md-auto div:nth-child(1) table.table:nth-child(1) tbody:nth-child(1) tr:nth-child(3) > td:nth-child(2)'

//  cy.get(path)
//  .then(($text) => {
//   const txt = $text.text()
//   cy.log(txt)
//  })
 
 
 cy.get(path).invoke('text').as('text')
}
