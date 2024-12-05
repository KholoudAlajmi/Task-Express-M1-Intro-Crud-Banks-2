

const express = require("express");
const accounts = require("./accounts"); //we will put dtabase call in anthor project, here we have our data
const connectDB = require("./database");
const app = express();
app.use(express.json())

//not requered in task. this show me how the middleware enter my serever from up to down
// app.use((req, res, next) => {
//   console.log("new request received");
//   next();
// });

// app.use((req, res, next) => {
//   req.id = 8;

//   next();
// });

app.get("/api/accounts", (req, res) => {
  console.log(req.id)
    const accounts = fetchesAllAccounts(); 
    res.json(accounts);
  });


  
    
  
  app.post("/accounts", (req, res) => {
    const newaccount = createsANewaccount(req.body);
    res.status(201).json(newaccount);
  });




  const deleteAccount = (accountIdToBeDeleted) => {
    const newAccounts = accounts.filter((account) => account.id != accountIdToBeDeleted)
    console.log("My new accounts are: ", newAccounts)
}

  app.delete("/accounts/:accountId", (req, res) => {
    const { accountId } = req.params;
    const foundAccount = accounts.find((accountId) => accounts.id == accountId);
    if (foundAccount) {
      deleteAccount(accountId);
      res.status(204).end();
    } else {
      res.status(404).json({ message: "Account not found" });
    }
  });



   

  const updatesAnExistingAccount = (currentAccount, newData) => {
    const myUpdatedAccount = Object.assign(currentAccount, newData)
    return myUpdatedAccount
}

  app.put("/accounts/:accountId", (req, res) => {
    const { accountId } = req.params;
    const foundAccount = accounts.find((x) => x.id == accountId); //x is the current record
    if (foundAccount) {
      const updatedAccount = updatesAnExistingAccount(foundAccount,req.body);
      res.status(200).json(updatedAccount); //status is range of number 
    } else {
      res.status(404).json({ message: "Account not found" });
    }
  });






  app.get('/accounts/:username', (req, res) => {
    const username = req.params.username;
    const funds = req.query.currency;
    console.log("username", username)
    console.log("currency", funds)
    let result = accounts
    if (username) {
        result = accounts.find((account) => account.username==username && account.funds==funds)
    }
    console.log(result)
    res.json(result)
  })


//not requered in the task. this will enter all crud, if not find the url it will print the message
// app.all("*", (req, res,next) =>{
//   return res.json({ message: 'not found'})
// })



  function fetchesAllAccounts(){
    return accounts;
  }



  function createsANewaccount (newAccountData) {
    console.log("Creating new account", newAccountData)
    const newId = accounts.length + 1
    const newAccount = Object.assign({ id: newId }, newAccountData)
    console.log("My new account is: ", newAccount)
    return newAccount
}

connectDB()

app.listen(8000, () => {
    console.log("The application is running on localhost:8000");
  });