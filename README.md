# Instructions
Return your answer as zip-file containing all the relevant files. 

There's no 'correct' answer for these assignments, but you should show your best skills. Elegant solutions gain extra points.

# Backend assignment

In the `backend` folder you can find a skeleton for a simple app. This assignment requires you to modify and add code as needed. You should also add test cases for each of the questions when you think that's appropriate.

### 1. Password saving

Make sure that users are stored in the database in a safe way. How would you store passwords? You can add 3rd party libraries and new properties to User model if needed.

### 2. Password validation

How would you validate that user is logging in with the correct password? Implement the function `checkPassword` according to specification in the User model code.

### 3. addRoles function
Implement `addRoles` function according to specification in the User model code.

### 4. Don't allow creating user with existing username
Creating users with existing username should result to error `Username xx is already taken`.

### 5. ACL
When listing users with

			GET /users
			GET /users/:id
		
Make sure passwords (and other non-public properties) are not sent. _Hint_: check [serverbone](https://github.com/Everyplay/serverbone) codebase.


# Frontend assignment
Make a simple frontend app: 'admin' GUI for the previously built backend using [BackboneJS](http://backbonejs.org/) or [React](http://facebook.github.io/react/) or both. With the app, you should be able to create new users and list created users.

You may use additional 3rd party libs too if you like. Make sure to write tests also for the frontend!