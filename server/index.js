const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');

mongoose.Promise = Promise;
mongoose.connect('mongodb://10.31.18.213:27017/noAngular')
  .then(() => console.log('Mongoose Up'));

const User = require('./models/users');

app.use(bodyParser.json());

app.post('/api/login',async (req,res) => {
  const {username, password} = req.body;
  console.log(username, password);
  const resp = await User.findOne({username, password});

  console.log(resp);
  if(!resp){
    console.log("Incorrect details");
    //user login is incorrect
  }else{
    console.log("logging you in");
    //make a session and set user to logged in
  }
  res.send("K");
});
app.post('/api/register', async (req,res) => {
  const {username, password} = req.body;

  const user = new User({username:username,password:password});
  const result = await user.save();
  console.log(result);
  //store this date on database
  //Usermodel.save({})
});

app.get('/api/test',(req,res)=>{
  console.log(req.body)
});

app.listen(1234,() => console.log('Server listening at 1234'));
