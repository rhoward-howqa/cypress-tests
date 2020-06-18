/// <reference types="cypress" />
import { login, getToken }  from './util'
import { registerUserAPI, deleteUserAPI } from './APIs'

describe('Logged in user can add a todo', () => {
  var username = 'Ryan'
  var email = 'ryanhoward1988@gmail.com'
  var password = '123'  
  var todo = 'Do some Shopping'
  
    it('successfully adds todo', () => {
      //register a new user via an the API
      registerUserAPI(username, email, password)
      
      //navigate to login page
      cy.visit('/login')
      
      //login as new user
      login(username, password)

      //add a new todo
      cy.get('#todoInput').type(todo)

      //subit todo
      cy.get('.btn').click()

      //validate todo has been created
      cy.get('#todoItem').should('have.text',todo)

      //call get token to get token value from the profile page
      //getToken()
     
      //use token value from getToken call to delete user via deleteUseRAPI
      cy.get('@text').then((text) =>{
        const token = text
        deleteUserAPI(token)

      })

      
    })
  })