const express = require("express");
const path = require("path");
const app = express();
const PORT = 4040;
const rootPath = path.dirname(__dirname);
app.use(express.static(path.join(rootPath,"/client")));

app.get("/", (req,res) => {
 
    res.sendFile(path.join(rootPath,"client/index.html"));

})

app.listen(PORT, () => {
    console.log("Servidor iniciado na porta " + PORT);
});