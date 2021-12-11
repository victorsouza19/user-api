

  # Documentation - User API
*This API was created to be used with a model for diferent applications, basically it contains the complete CRUD of a user database, including the password recovery*

## Endpoints
<details>
<summary> <strong>GET</strong> <code>/users</code></summary>
<br>
This endpoint is responsible to return the users list from database.

+ #### Parameters
  
  None

+ #### Responses
  - #### 200 - OK!
    In this case, you will receive the users listage correctly.

    Response example:
    ```
    {
      "users": [
          {
              "id": 15,
              "name": "Victor",
              "email": "victor@email.com",
              "role": 1
          },
          {
              "id": 19,
              "name": "John Doe",
              "email": "johndoe@mail.com",
              "role": 1
          },
          {
              "id": 23,
              "name": "Test",
              "email": "test1@test.com",
              "role": 1
          }
      ]
    }
    ```

  - #### 401 - Unauthorized! 
    If this response happens, it means that some failure occurred during the request authentication process.
    **Reasons:** Missing, invalid or expired auth token.

    Response example:
    ```
    {
      "err": "Unauthorized request, please login."
    }
    ```
   - #### 500 - Intern error! 
     If this response happens, it means that some failure occurred during the database lookup process.
     **Reasons:** Query problems, database problems.
     Exemplo de resposta:
     ```
     <!DOCTYPE html>
     <html lang="en">
      <head>
       <meta charset="utf-8">
       <title>Error</title>
     </head>
     <body>
       <pre>ReferenceError: ...
     ```
      - #### 403 - Forbidden! 
     If this response happens, it means that the user do not have the necessary permission to access this route.
     **Reasons:** Insuficient permission.
     Response example:
     ```
     {
      "err": "Forbidden request, you do not have the necessary permission."
     }
     ```
     
</details>
       
<details>
<summary><strong>POST</strong> <code>/login</code> </summary>
<br>
This endpoint is responsible to autenthicate the user on the API and return the authentication token.

+ #### Parameters

  **email:** user e-mail .

  **password:** user password.

  Example:
  ```
  { 
      "email": "johndoe@email.com",
      "password": 123456
  }
  ```

+ #### Responses
  + ####  200 - OK!
   If this response happens, you will receive the authentication token according the user data informed at the request. This token allow you the acess for the protected endpoints of the API.

   Response example:
    ```
    {
        "token": "iBHJUHguyjFGJv6XVCJ9.abcdpZCI6MiwiZW1haWwiOiJhbmFAZW1haUGgcvjgVGfg2jrfuyjR5U76VBJHfur34LCJleH5MTh9"
    }
    ```

  + #### 401 - Unauthorized!
    If this response happens, it means that occur a fail during the authentication process at the request.
    **Reasons:** Wrong e-mail or password.

    Response example:
    ```
    {
      "err": "Wrong e-mail or password"
    }
    ```

  + #### 500 - Internal error!
    If this response happens, it means that ocurr a fail during the database search process or at the token sign process.
    **Reasons:** Query problemas, database problems, JWT token sign problems.

    Response example - Database:
    ```
    <!DOCTYPE html>
    <html lang="en">

    <head>
      <meta charset="utf-8">
      <title>Error</title>
    </head>
    <body>
      <pre>ReferenceError: ...
    ```

</details>
      
<details>
<summary><strong>GET</strong> <code>/users/:id</code> :construction:</summary>
</details>
      
<details>
<summary><strong>POST</strong> <code>/users</code> :construction:</summary>
</details>
      
<details>
<summary><strong>PUT</strong> <code>/users/:id</code> :construction:</summary>
</details>
      
<details>
<summary><strong>DELETE</strong> <code>/users/:id</code> :construction:</summary>
</details>
       
<details>
<summary><strong>POST</strong> <code>/users/recover</code> :construction:</summary>
</details>   
       
<details>
<summary><strong>POST</strong> <code>/users/changepassword</code> :construction:</summary>
</details>   

