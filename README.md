# Koerber-Pharma-Challenge
This is a repo for the Koerber Pharma Frontend Challenge.

## Node version
>18.11.12

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

## Goal

The goal of this application is the following:

#### Login with a user from the list

1. Access this website replacing {id} with a number from 1 to 100 - https://dummyjson.com/users/{id}
2. Use the username and password to login.
(https://dummyjson.com/docs/users - Here you have an example of what the API should return).

#### Show Posts List

After logging in you should be able to see the posts list for a given email.

1. Access this website replacing {id} with a number from 1 to 100 - https://dummyjson.com/users/{id}
2. Use the given email in the input field.
3. Click on "Get Posts".
4. You should be able to see every post written by that email.

#### Create a New Post

When logged in, you have a chance to create a new post and see it in your page.

1. Click on the button "New Post".
2. Write a title and a description for the post you want to create.
3. Click on "New Post" to create it and see it in your main page.
