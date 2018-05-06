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

})


app.listen(3001, (err) => {
    assert.equal(null , err,"sercer is out control") 
    console.log("server is on")
})



