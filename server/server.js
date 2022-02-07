require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 8080;
const rootPath = path.dirname(__dirname);
app.use(express.static(path.join(rootPath,"/client")));

app.get("/", (req,res) => {
 
    res.sendFile(path.join(rootPath,"client/index.html"));

})

app.listen(PORT, () => {
    console.log("Servidor iniciado na porta " + PORT);
    console.log(`Acesse no link: http://localhost:${PORT}`);
});