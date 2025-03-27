import express from "express"

const app = express();

app.use("/",express.static("public"))

const puerto = 127
app.listen(puerto,console.log("http://localhost:" + puerto));