/// <reference types="cypress" />
import { login, getToken }  from './util'
import { registerUserAPI, deleteUserAPI } from './APIs'

describe('Logged in user can delete a todo', () => {
  var username = 'Ryan111'
  var email = 'ryanhowar11d1988@gmail1.com'
  var password = '123'  
  var todo = 'Do some Shopping'
  
    it('successfully deletes todo', () => {
      //register a new user via an the API
      registerUserAPI(username, email, password)  
    })
  })