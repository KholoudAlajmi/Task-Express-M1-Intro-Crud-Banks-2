# Banking API 🏦

In this task, you will create a banking API with the basic `CRUD` operations.

## Instructions

- Fork and clone [this repository](https://github.com/JoinCODED/Task-Express-M1-Intro-Crud-Banks) to your `Development` folder.

1. You have a data file called `accounts.js`, it's an array of bank accounts with the owner's username and the funds that he got in KWD.

### Fetch Accounts
1. The method you will use is `get`, create a route to `/accounts`.
2. In the response, send the `accounts` data, using the `json` method because we need to convert it to `json`.
3. We need to also send a status code using `.status` method, which code represents a successful response?

### Create Account
1. The method you will use is `post`, create a route to `/accounts`.
2. Generate an `id` for our new account.
3. Create a variable `newAccount` to store our new account, pass it the data coming from `req.body`, the `id` we just created and a funds of 0 since it's the default
4. Push your `newAccount` into the `accounts` array.
5. Return the `newAccount` in the response with the correct status code.

### Delete Account
1. The method you will use is `delete`, create a route to `/accounts` that accepts a param `accountId`.
2. Extract this param using `req.params`.
3. Find the account with the same `id`, if it doesn't exist, return a response with `404` status code and `not found` message.
4. If it does exist, filter your `accounts` array to not incldue this deleted account.
5. Send a response with the correct status code.

### Update Account
1. The method you will use is `put`, create a route to `/accounts` that accepts a param `accountId`.
2. Extract this param using `req.params`.
3. Find the account with the same `id`, if it doesn't exist, return a response with `404` status code and `not found` message.
4. If it does exist, replace the values of the account with the new values coming from the `req`.
5. Send a response with the correct status code.



## Bonus

### 🍋 Retrieve a single account

- Create a route that retrieve a single account by the username of the owner not by it's ID.

### 🌶 Query Parameters

You have learned about route params, but there's also something called query params.

- On the route you created in the previous challenge, add a query param that retrieves the account info and funds in USD.

Your URL should look like:
`localhost:8000/accounts/Omar?currency=usd`
