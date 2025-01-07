const express = require("express");
const router = express.Router()

const livre = require('../models/livre')



router.post("/add",  (req, res) => {
  data = req.body;

  livree = new livre(data);


  livree.save()
    .then(
      () => {
      res.status(200).send("book added");
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});






router.get('/get/:id' , (req , res)  => {

    idlivre = req.params.id;
    
    livre.findOne({ _id: idlivre })
      .then((livre) => {
        res.status(200).send(livre);
      })
      .catch((err) => {
        res.status(404).send(err);
      });
})



//delete livre by id
router.delete("/delete/:id", (req, res) => {
  idlivre = req.params.id;
  livre.findByIdAndDelete({ _id: idlivre })
    .then(
      () => {
      res.status(200).send("livre deleted with ssucces");
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});


//update
router.put("/update/:id", (req, res) => {
  idlivre = req.params.id;
  newData = req.body;

  livre.findByIdAndUpdate({ _id: idlivre }, newData)
    .then(
      () => {
      res.status(200).send("livre updated successfully");
    })
    .catch((err) => {
      res.status(500).send({ error: err.message });
    });
});

    
module.exports = router;