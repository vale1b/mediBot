const app = require("./app.js");
const { conn } = require("./db.js");
/* 
// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log("%s listening at 3001"); // eslint-disable-line no-console
  });
}); */

const port = process.env.PORT || 4000;

app.listen(port, () => {
   console.log("Escuchando en el puerto", port);
})
