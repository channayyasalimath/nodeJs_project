// const md5 = require("md5");

// let password= "MyPassword";

// console.log(password);

// let hashPassword= md5(password);
// console.timeLog(hashPassword)

const jwt= require("jsonwebtoken");
let responseFromDb= {
    "id": 2,
    "full_name": "Channayya S",
    "email": "channayya@gmail.com",
    "phone": "987654321"
}

let accessToken = jwt.sign(responseFromDb, 'secretKey');