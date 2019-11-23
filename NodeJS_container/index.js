var express = require("express"),
    bodyParser =require("body-parser"),
    app = express(),
    port = 8080;

const cors = require('cors');

// // array to hold users
// const users = [{firstName:"fnam1",lastName:"lnam1",userName:"username1"}];

// // Default user
// app.get("/", function(req, res) {
//     res.send("App works!!");
// })

// // request to post the user
// // req.body has object of type {firstName:"fnam1",lastName:"lnam1",userName:"username1"}
// app.post("/user", function(req, res) {
//     users.push(req.body);
//     res.json(users);
// })

var fs = require("fs"),
    xml2js = require("xml2js");

var users;

var parser = new xml2js.Parser();
fs.readFile("users.xml", "utf-8", function(err, data) {
    if (err) console.log(err);
    console.log(data);
    parser.parseString(data, function(err, result) {
        if (err) console.log(err);
        console.dir(result);
        console.log("Done");
        users = result;

    });
});

app.use(cors());
app.options("*", cors());

app.use(bodyParser.json());

app.listen(port, function(err) {
    console.log("running server on from port " + port);
});

app.get("/", function(req, res) {
    var response = {
        "status": "error"
    }
    res.setHeader('Content-Type', 'application/json');
    res.json(JSON.stringify(response));
})

// request to get the information of user
app.get("/users/u=:userName&p=:password", function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    var size = Object.keys(users.USERS.USER).length;
    var pass = req.params.password;
    var userTo = req.params.userName;
    var user;

    var response;
    console.log(size);

    for (var i = 0; i<size; i++) {
        user = users.USERS.USER[i].Name[0];
        
        console.log(user);
        console.log(userTo);
        if (user == userTo) {
            var passw = user = users.USERS.USER[i].Password[0];
            var permissions = users.USERS.USER[i].Permission[0];
            if (pass == passw) {
                
                response = {
                    "status": "success",
                    "user": userTo,
                    "permissions": permissions
                }

            } else {
                response = {
                    "status": "password_incorrect",
                    "user": userTo,
                    "permissions": "" 
                }
            }

            res.send(JSON.stringify(response));
            return user;

        } else if (i+1 == size) {
            var response = {
                "status": "failed",
                "user": "",
                "permissions": ""
            }

            res.send(JSON.stringify(response));
            return user;
        }
    }

    response = {
        "status": "error"
    };

    res.send(JSON.stringify(response));
})

app.get("/users", function(req, res) {
    res.json(users);
})

