var express = require("express"),
    bodyParser =require("body-parser"),
    app = express(),
    port = 3001,
    users;

const cors = require('cors')

app.use(bodyParser.json());

app.use(cors());
app.options("*", cors());

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header(
//         "Access-Control-Allow-Headers",
//         "Origin, X-Requested-With, Content-Type, Accept"
//     );
//     next();
// });

var fs = require("fs"),
    xml2js = require("xml2js");
var parser = new xml2js.Parser();
fs.readFile("users.xml", "utf-8", function(err, data) {
    if (err) console.log(err);
    // console.log(data);
    parser.parseString(data, function(err, result) {
        if (err) console.log(err);
        // console.dir(result);
        // console.log("Done");
        users = result;
    });
});

app.get("/", function(req, res) {
    var response = {
        "status": "App working correctly"
    }
    res.setHeader('Content-Type', 'application/json');
    res.json(JSON.stringify(response));
})

// request to get the information of user
app.get("/users/u=:userName&p=:password", (req, res) => {
    res.header("Content-Type", "application/json");

    var size = Object.keys(users.USERS.USER).length,
        pass_request = req.params.password,
        user_request = req.params.userName.toUpperCase(),
        response;

    console.log("User entered: " + user_request);
    console.log("Password entered: " + pass_request);

    for (let i = 0; i < size; i++) {
        var current_user = users.USERS.USER[i].Name[0].toUpperCase(),
            current_password = users.USERS.USER[i].Password[0],
            current_permissions = users.USERS.USER[i].Permission[0];
        if (user_request === current_user) {
            // User exists, checking password
            if (pass_request === current_password) {
                // Password correct
                response = {
                    "status": "success",
                    "user": current_user,
                    "permissions": current_permissions
                }
            } else {
                //Password incorrect
                response = {
                    "status": "password_incorrect",
                    "user": current_user,
                    "permissions": ""
                }
            }
            res.send(JSON.stringify(response));
            return;
        } 
    }
    response = {
        "status" : "failed",
        "user": "",
        "permissions": ""
    }
    res.send(JSON.stringify(response));
});

app.get("/users", function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(users));
})

app.listen(port, function(err) {
    console.log("Server started on port " + port);
});
