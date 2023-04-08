//======== DEPENDENCIES=============
require("dotenv").config();
const { PORT } = process.env;
const express = require("express");
const app = express();
const routes = require('./routes/index')
const cors = require('cors')

// ======== MiddleWare ===============
app.use(cors()); 
app.use(express.urlencoded({extended: true}))
app.use(express.json());

//======== ROUTES ==============
app.use("/", routes);

app.use((req,res) => {
    res.status(404).json({message: "NOT A PROPER ROUTE"})
})

//======== LISTENER =============
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
