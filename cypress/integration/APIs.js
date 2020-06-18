//Register users API
export const registerUserAPI = (username, email, password) => {
   cy.request(
    {
        method: 'POST',
        url: '/api/Register/',
        body : {
         "Username": username,
         "Email Address": email,
         "Password": password

        }
    }
 ).then((response) => {
    // response.body is automatically serialized into JSON
    var responseMessage = response.body.message
    const pattern = '(?<=: ).*'
    var token = responseMessage.match(pattern)
    cy.log(token)

 })

}

 //add todo
 export const addTodoAPI = (token, todo) => {
   cy.request(
    {
        method: 'POST',
        url: '/api/Todo/',
        headers : {
            'token' : token,
        },
        body : {
         "Body": todo,

        }
    }
 )}

//delete todo
 export const deleteTodoAPI = (token, todoId) => {
   cy.request(
    {
        method: 'DELETE',
        url: '/api/Todo/' + todoId,
        headers : {
            'token' : token,
        }
        })
    }
 

//Delete users API
export const deleteUserAPI = (token) => {
  cy.request(
   {
       method: 'DELETE',
       url: '/api/Users/',
       headers : {
           'token' : token,
       }
   }
)
.then((response) => {
    // response.body is automatically serialized into JSON
    cy.log(response.body)
  })


}