# User API
<br>

<div align="center">
  
![Badge](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Badge](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![Badge](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![Badge](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)
![Badge](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)
  
</div>

> RestAPI of user manipulation.

### :construction: Recent Features

- [x] UUID to recover token generate.
- [x] NodeMailer to e-mail trigger for password recovery.
- [x] .env file to store the environment variables. 



## 💻 Prerequisites

Before start, make sure you meet these requirements:

* You have installed the latest stable version of `node` 
* You have installed and configured a  `MySQL client`.


## 🚀 Installing and Configuring

To install UserAPI, follow these steps:

Clone the project and run the command in the root directory:
```
npm install
```
<br>

Change the file <code>.envexample</code> with your environment variables:
```
## database config
DB_HOST=127.0.0.1
DB_USER=user
DB_PWD=password
DB_NAME=database

## E-mail trigger config
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=465
EMAIL_USER=youremail@gmail.com
EMAIL_PASSWORD=123456
## if your SMTP server didn't use SSL/TLS put false
EMAIL_SECURE=true

## JWT config
JWT_SECRET=f9f217a18745919771a7936b3a164121a
```

After that, rename the file to <code>.env</code>

## ☕ Using the UserAPI.

 Run the server with this line in the command line:
```
node index.js
```
(I recommend `nodemon` to server auto-restart after changes)

Test and enjoy! 😅

## :books: Documentation

To view the API documentation, check the file [DOCUMENTATION](DOCUMENTATION.md).


## 📫 Contributing for this project.

To contribute, follow these steps:

1. Fork this repository.
2. Create a branch with your feature name: `git checkout -b mynewfeature`.
3. Make your changes and confirm: `git commit -m 'messagehere'`
4. Push your change to the original branch: `git push origin mynewfeature`
5. Create the pull request.

Instead, you can check the GitHub documentation [Creating a Pull Request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

## 🤝 Contributors

<div align="center" >
  <a href="#">
    <img src="https://github.com/victorsouza19.png" width="100px;" alt="Victor Souza image"/><br>
    <sub>
      <b>Victor Souza</b>
    </sub>
  </a>
</div>

## 📝 License

This project is under license. Check the file [LICENSE](LICENSE.txt) for more details.

[⬆ Go back to the top!](#User-API)<br>

