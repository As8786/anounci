const assert = require('assert')


const express = require('express')
const bodyParser = require("body-parser")
const {MongoClient, ObjectID} = require('mongodb')

const app = express()
app.use(bodyParser.json())

const mongo_url = "mongodb://localhost:27017"
const dataBase = "anounci"

MongoClient.connect(mongo_url, (err, client) => {
    assert.equal(null, err, 'dataBase is out control')
    const db = client.db(dataBase)

    app.post("/addNewUser", (req, res) => {
        newUser = req.body
        db.collection('users').insertOne(newUser, (err, data) => {
            if(err) {
                res.send("user not added")
            } else {
                console.log(data.ops)
                res.send(data.ops)
            }
        })
    })


    app.get("/users/:id", (req, res) => {
        id = req.params.id
        db.collection('users').findOne({email : id}, (err, data) => {
            if(err) {
                res.send("cant find the requested user")}
            else {
                res.send(data) 
            }   
        })
    })



})




app.listen(3001, (err) => {
    assert.equal(null , err,"sercer is out control") 
    console.log("server is on")
})



