# Invite tool

Simple demo react app that works as an online tool invitation.

### Setup

1.- Clone the repo: `git clone <repo_url>`

2.- Copy env file: `cp .env.example .env`

> Only 1 is actually need.

3.- Install deps: `npm install`

4.- Run the project: `npm run dev`

### Known Issues

- **Login with Cognito:** There's 2 approaches, with an old sdk: `amazon-cognito-identity-js` (src/services/auth.service.ts) and with the latest version: `aws-amplify` (src/hooks/useAuth) both are not working due to some permissions or missing setup (might be missing something on the FE, but still couldn't achieve login or register with Cognito)

- **API mock:** Even with the documentation the API for login (hence any other endpoint) wasn't working, it responded always with: `{ message: "Not found"}`, so I implement [MSW](https://mswjs.io/) in order to mock the actual call

- **Auth Flow:** For the auth flow we are using the app store with zustand and make persistent (with localStorage) to mimic how Cognito works (with amplify), if you want to "reset" the auth session, simply delete localStorage and you'll see the login page again
