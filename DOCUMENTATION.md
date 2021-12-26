

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
  
     Response example:
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
<summary><strong>GET</strong> <code>/users/:id</code></summary>
<br>
This endpoint is responsible to return data from a specific user.

+ #### Parameters
  
  None

+ #### Responses
  - #### 200 - OK!
    In this case, you will receive the user data correctly.

    Response example:
    ```
    {
      "user": {
          "id": 19,
          "name": "John Doe",
          "email": "johndoe@mail.com",
          "role": 1
      }
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
  
   - #### 403 - Forbidden! 
     If this response happens, it means that the user do not have the necessary permission to access this route.
  
     **Reasons:** Insuficient permission.
  
     Response example:
     ```
     {
      "err": "Forbidden request, you do not have the necessary permission."
     }
     ```
  
   - #### 404 - Not Found! 
     If this response happens, it means that the user couldn't be located at the database.
  
     **Reasons:** User doesn't exists.
  
     Response example:
     ```
     {
      "res": "User not found."
     }
     ```
  
   - #### 500 - Intern error! 
     If this response happens, it means that some failure occurred during the database lookup process.
  
     **Reasons:** Query problems, database problems.
  
     Response Example:
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
<summary><strong>POST</strong> <code>/users</code></summary>
<br>
This endpoint is responsible to create a user.

+ #### Parameters
  
  **name:** user name *(optional)*.
  
  **email:** user e-mail.
  
  **password:** user password.
  
  **role:** 0 (common user) | 1 (admin user)  => this paramter must be a number between 0 and 1 *(optional, if not included the default role is 0)*
  
  Example:
  ```
  {
    "email": "johndoe1@mail.com",
    "password": "123456",
    "role": "1"
  }
  ```
  

+ #### Responses
  - #### 200 - OK!
    In this case, you will receive a message confirming the user create.

    Response example:
    ```
    {
      "res": "User created."
    }
    ```

  - #### 400 - Bad Request! 
    If this response happens, it means that the request is invalid or incomplete.
  
    **Reasons:** Missing or incorrect parameters: e-mail, password or role

    Response example:
    ```
    {
      "err": "E-mail cannot be empty."
    }
    ```
    ```
    {
      "err": "Password cannot be empty."
    }
    ```
    ```
    {
      "err": "Role must be a number."
    }
    ```
    ```
    {
      "err": "Invalid role."
    }
    ```
  
   - #### 406 - Not Acceptable! 
     If this response happens, it means that data verification before user creation stopped the process.
  
     **Reasons:** Informed e-mail is already in use.
  
     Response example:
     ```
     {
      "err": "E-mail already in use."
     }
     ```
  
   - #### 500 - Intern error! 
     If this response happens, it means that some failure occurred during the database register process.
  
     **Reasons:** Database or server problems.
  
     Response example:
     ```
     {
      "err": "Internal server error during the user creation."
     } 
     ```
  
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

