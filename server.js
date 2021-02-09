const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")

app.use(express.json())
app.use(morgan("dev"))

mongoose.connect("mongodb://localhost:/27017/picturesdb",
    {   useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
    () => console.log("connected to the database"))

app.use("/pictures", require("./routes/pictureRouter.js"))

app.use((err, req, res, next) => {
    console.log(err)
})

app.listen(9000, () => {
    console.log("successfully running on port 9000")
})