const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

let intial_path = path.join(__dirname, 'public');
app.use(express.static(intial_path));

app.get('/', (req,res) => {
    res.sendFile(path.join(intial_path, 'index.html'))
})

app.listen(PORT, () => {
    console.log(`Server Listioning at PORT : ${PORT}`);
})