const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "https://apiwebservice-eb09.onrender.com", //Puerto de la API server en Produccion
  origin: "https://studentscontrol.onrender.com",  //Puerto de el cliente Front en Produccion
  origin: "http://localhost:8081", //Puerto del cliente en dev local
  origin: "http://192.168.1.66:8081",  //Puerto del cliente en prod local
};

//  var corsOptions2 = {
//    origin: "http://localhost:8081"
//  }

app.use(cors(corsOptions));
// app.use(cors(corsOptions2));
// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// database
const db = require("./app/models");
const Role = db.role;

db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });
// force: true will drop the table if it already exists
// db.sequelize.sync({force: true}).then(() => {
//   console.log('Drop and Resync Database with { force: true }');
//   initial();
// });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
require("./app/routes/turorial.routes")(app);
require("./app/routes/alumnos.routes")(app);
require("./app/routes/padrefamilia.routes")(app);

// routers
//const router = require('./app/routes/alumnos.routes')
//app.use('/api/alumnos', router)
//static Images Folder
app.use("/Images", express.static(".//Images"))

// set port, listen for requests
const PORT = process.env.PORT || 3306;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "moderator"
  });
 
  Role.create({
    id: 3,
    name: "admin"
  });
}