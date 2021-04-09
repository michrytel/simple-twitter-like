# Frontend challenge
It's my very first Typescript project

Live: https://simple-twitter-like.herokuapp.com/

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

##### Used libraries: Formik, Jest, Axios, 

### Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
----
-----
-----
## Description

Build a simple social networking application, similar to Twitter, using publicly available API. The application should support the scenarios below.

## Requirements

🕒You have one week to give us back the challenge.

The code needs to be hosted on github.com on a public repository.

### Login screen

User needs to login to enter the application. It is not required to authenticate user in backend, following is enough:

- username is at least 5 characters long
- password contains 8 characters, at least one small letter, at least one capital letter, at least one number

Store user credentials in the session-storage. Prepare logout functionality.

### Wall

User should be able to see posts on a wall. Posts should come from

```
https://jsonplaceholder.typicode.com/posts
```

and should be displayed in descending order (by "id" field). Posts should be displayed with delay - one post each second (up to the number of posts available).
Posts should be displayed in form of tiles and whole page should be responsive:

- three columns with tiles for desktop
- two columns with tiles for tablet
- one column with tiles for mobile

#### Search

Search box should appear at the top of posts list. It should filter posts **visible** on the screen (by title and body).

### Post details

User should be able to see post details after clicking on post tile. UserId should be mapped to a random name. Appropriate routing should be in place, so post ID should appear in the URL.
Post details should come from:

```
https://jsonplaceholder.typicode.com/posts/{postId}
```

### Error handling

In case of HTTP connection error please display Modal dialog with error information. Error handling component (dialog) should be shared across wall and post details components.
PageNotFound handler should be prepared as well.

### React hooks

Please do use React Hooks.

## Technologies

Application should be written using React 16+ (accordingly to received instructions). The code needs to be written in Typescript, and styles have to use SCSS.
Please add Unit testing.

## Bonus

You can add the do the following point to surprise us:

- You can add into the `README.md` file what you would have change if you had more time and/or why you use this or that library.
- Add any tools to imporve developement (git hooks via husky, linters, ...) would be a fair advantage.
- Not using a UI library (Material UI, Bootstrap, ...) would be good (the design is not the most important part).
- Adding all unit tests would be a fair advantage.

## References

- API resource

```
https://jsonplaceholder.typicode.com/
```

## DESIGN

![Design](https://github.com/HStoneAge/code-challenge/blob/master/desing.png?raw=true)
