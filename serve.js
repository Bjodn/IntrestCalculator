const express = require('express');
const path = require('path');
const app = express();
const port = 8000;


app.get("/", (require, resolve) => resolve.sendFile(path.join(__dirname + "/index.html")));
app.use("/static", express.static('./static/'));

app.listen(port, () => console.log(`Server is running on port ${port}`));
