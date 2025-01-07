const express = require('express')
const app = express ()

app.use(express.json())

const port = 8000

require('./config/connect')



const livreRoute = require('./routes/livre')
const clientRoute = require("./routes/client");

//https://localhost:3000/livre
app.use("/livre", livreRoute);
//https://localhost:3000/client
app.use("/client", clientRoute);







app.listen(port , ()=> {
    console.log(`server work on" ${port}`)
})