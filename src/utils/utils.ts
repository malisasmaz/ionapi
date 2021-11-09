const fs = require("fs");
const path = require("path");
import * as loginData from "../source/data.json";

const lookup = new Map();

const handleCors = (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Access, Authorization");

    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json();
    }
    next();
    setLookUp();
},
    logStream = () => {
        return fs.createWriteStream(path.join(__dirname, "./access.log"), { flags: "a" });
    };

async function delay(ms: number) {
    var ms = Math.floor((Math.random() * 2000) + 1000);
    return new Promise(resolve => setTimeout(resolve, ms));
}

function setLookUp() {
    for (let item of loginData) {
        lookup.set(item.userName, [item]);
    }
}

function checkUser(userName) {
    return lookup.get(userName);
};

module.exports = { handleCors, logStream, delay, checkUser };