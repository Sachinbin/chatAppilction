const express = require("express");
const path = require("path")

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/", (req, res) => {
  // Source - https://stackoverflow.com/a/26079640
// Posted by mscdex, modified by community. See post 'Timeline' for change history
// Retrieved 2026-06-08, License - CC BY-SA 3.0

res.sendFile('./public/index.html', { root: __dirname });


});


module.exports = app