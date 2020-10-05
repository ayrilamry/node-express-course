const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const mockUserData = [
    {name : 'Mark'},
    {name : 'Jill'}
]

app.get('/users',function(req,res){
	res.json({
		success: true,
		message: 'successfully got users. Nice!',
		users: mockUserData
	})
})
//colons are used as variables that be viewed in the params
app.get('/users/:id', function(req,res){
    console.log(req.params.id)
    res.json({
        success : true,
        message : 'Got one user!',
        users : req.params.id
    })
})

app.post('/login', function(req,res){
    //Typically passwrods are encrypted using something like bcrypt before sending to database
    const username = req.body.username;
    const password = req.body.password;
    
    //This should come from the database
    const mockUsername = "billyTheKid";
    const mockPassword = "superSecret";
    
    if(username === mockUsername && password === mockPassword){
        //In practice, use JSON web token sign method here to mae an encrypted token
        res.json({
            success : true,
            message : 'Username & Password matched!',
            token : 'encrypted token goes here'
        })
    } else {
        res.json({
            success : false,
            message : 'Username & Password do not match!'
        })
    }
})

app.listen(8000,function(){
    console.log("server is listening")
}) 