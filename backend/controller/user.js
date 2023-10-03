const backend = require("../backend/user")({});
const jwt = require("jsonwebtoken");
module.exports = (props) => {
  return {
    saveUser,
    processLogin,
    doesEmailExist,
    aunthenticateUser,
  };
};

function saveUser(req, res) {
  let payload = req.body;
  backend.getUserByEmail(payload, function (options) {
    let userInfoLength = options.response.length;
    if (userInfoLength > 0) {
      return res.send({
        status: 403,
        response: "User with this email already Exist",
        error: "Access Denied",
      });
    }
    backend.saveUser(payload, function (response) {
      console.log("Invokation");
      res.send(response);
    });
  });
}

function processLogin(req, res) {
  let payload = req.body;
  backend.userByCredentials(payload, function (options) {
    if (options.status !== 200) {
      return res.send(options);
    }
    let userInfoLength = options.response.length;
    if (userInfoLength == 0) {
      return res.send({
        status: 403,
        response: null,
        error: "Invalid Credentials",
      });
    }

    let userInfo = options.response[0];
    let accessToken = generateAccessToken(userInfo);
    res.send({ status: 200, response: accessToken, error: null });
  });
}

function generateAccessToken(userpayload) {
  const jwtPayload = {
    id: userpayload.id,
    full_name: userpayload.full_name,
    email: userpayload.email,
    phone: userpayload.phone,
  };
  console.log(jwtPayload);
  let accessToken = jwt.sign(jwtPayload, "mySecret", { expiresIn: "1d" });
  return accessToken;
}

function doesEmailExist(req, res) {
  let payload = req.body;

  backend.getUserByEmail(payload, function (options) {
    if (options.status != 200) {
      return res.send(options);
    }
    if (options.response.length > 0) {
      return res.send({
        status: 403,
        response: "Email Already Exist",
        error: "Email Already Exist",
      });
    }
    res.send(options);
  });
}

function aunthenticateUser(req, res, next) {
  // let token= "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZnVsbF9uYW1lIjoiQ2hhbm5heXlhIFMiLCJlbWFpbCI6ImNoYW5uYXl5YUBnbWFpbC5jb20iLCJwaG9uZSI6Ijk4NzY1NDMyMSIsImlhdCI6MTY3ODc5MDc1OCwiZXhwIjoxNjc4ODc3MTU4fQ.FK-TSRBYcSS4FHSHI9A3KV2X7JsHNT1zd6mXg_xc9js";
  //  console.log(req.headers['authorization'].split(" ")[1]);
  //  return res.send(req.headers['authorization'].split(" ")[1])

  // let token = req.headers['authorization'].split(" ")[1]; //come from client
  //or

  let token= req.headers['authorization']
 
  if(!token){
    return res.send({status: 403, error:"Token is required!"})
}
token = token.replace('Bearer ', '');
  // return res.send(token)
   try{
    let user= jwt.verify(token, 'mySecret')
    req.user= user;
    next();
   }catch(error){
    return res.send({status:403, error: 'User Authentication', response: null, errormessage: error})

   }

  
  
}
