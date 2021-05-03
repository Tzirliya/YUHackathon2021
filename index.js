const express = require('express');
const mongoose = require('mongoose');
var bodyParser = require('body-parser')
const app = express();
const port = 3000;
mongoose.connect('mongodb+srv://new_user1:new_user1@cluster0.c5ndq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use(express.urlencoded());
 
const UserShem = new mongoose.Schema({
    UserName: String,
    PassWord: String
})
    
const User  = mongoose.model('User', UserShem);

app.use(express.static('public'));
app.use(express.static(__dirname + '/views'));
app.post('/login', function(request, response){
      y = User.findOne({UserName: request.body.Username, PassWord: request.body.Password}, function (err, data) {
        if(err)console.log("no")
        if(data != null){
          response.redirect("/home.html");
        }else{
          alert("invalid")
        }
      });
});
app.use(express.static(__dirname + '/views/signup.html'));
app.post('/signup', function(request, response){
      var x = new User();
      x.UserName =request.body.Username
      x.PassWord =request.body.Password
      y = User.findOne({UserName: request.body.Username}, function (err, data) {
        if(err)console.log("no")
        if(data != null){
          alert("UserName taken")
        }else{
          x.save();
          response.redirect("/home.html");
        }
      });
});

app.listen(port, function() {
    console.log('Server starting on http://localhost:' + port);
});
