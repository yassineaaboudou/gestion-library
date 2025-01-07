const express = require("express");

const router = express.Router();
const client = require("../models/client");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


router.post("/register", async (req, res) => {
  data = req.body;

  clientt = new client(data);

  salt = bcrypt.genSaltSync(10);
  cryptedPass = await bcrypt.hashSync(data.password, salt);

  clientt.password = cryptedPass;

  clientt.save()
    .then(() => {
      res.status(200).send(" client login with succes");
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});



//login
router.post('/login', async (req,res)=>{

  data = req.body

  clientt = await client.findOne({ email: data.email });

  if (!clientt) {
    res.status(404).send(" email or password invalid");
  } else {
    validPass = bcrypt.compareSync(data.password, clientt.password);

    if (!validPass) {
      res.status(401).send("email or password invalid");
    } else {
      payload = {
        _id: clientt._id,
        email: clientt.email,
        name: clientt.name,
      };
      token = jwt.sign(payload, "1234567");
      res.status(200).send({ mytoken: token });
    }
  }
})


//get client by id
router.get("/getById/:id", (req, res) => {
  clientid = req.params.id;
  client.findOne({ _id: clientid })
    .then(
        () => {
      res.send("getted !!");
    })
    .catch((err) => {
      res.send(err);
    });
});

//delete user by id
router.delete("/delete/:id", (req, res) => {
  clientid = req.params.id;
  client.findByIdAndDelete({ _id: clientid })
    .then(
        (deletedClient) => {
      res.send(deletedClient);
      console.log("user deleted with ssucces");
    })
    .catch((err) => {
      res.send(err);
    });
});



module.exports = router;