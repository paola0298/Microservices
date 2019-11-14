var express = require("express"),
    bodyParser =require("body-parser"),
    app = express(),
    port = 8080;

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



app.use(bodyParser.json());

app.listen(port, function(err) {
    console.log("running server on from port:::::::" + port);
});

app.get("/", function(req, res) {
    res.send("App works!!");
})

// request to get the information of user
app.get("/users/u=:userName&p=:password", function(req, res) {
    var size = Object.keys(users.USERS.USER).length;
    var pass = req.params.password;
    var userTo = req.params.userName;
    var user;
    var response = "";
    console.log(size);
    for (var i = 0; i<size; i++) {
        user = users.USERS.USER[i].Name[0];
        console.log(user);
        console.log(userTo);
        if (user == userTo) {
            var passw = user = users.USERS.USER[i].Password[0];
            if (pass == passw) {
                user = "Exists";
                //usuario y contrasenia correctos
                res.json(user);
                return user;
            } else {
                user = "Password incorrect";
                //contrasenia incorrecta
                res.json(user);
                return user;
            }
        } else if (i+1 == size) {
            user = "User incorrect";
            //Usuario incorrecto
            res.json(user);
            return user;
        }
    }
    user = "Not found";
    res.json(user);
})

app.get("/users", function(req, res) {
    res.json(users);
})

