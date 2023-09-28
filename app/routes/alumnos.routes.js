module.exports = app => {
    const alumnos = require("../controllers/alumnos.controller.js");

    var router = require("express").Router();
  
    // Create a new Alumno
    router.post("/", alumnos.upload, alumnos.create);
    
    // Retrieve all Tutorials
    router.get("/", alumnos.findAll);

    // Upload Images files
  
    // Retrieve all published Tutorials
   // router.get("/published", tutorials.findAllPublished);
  
    // Retrieve a single Tutorial with id
 //   router.get("/:id", tutorials.findOne);
  
    // Update a Tutorial with id
 //   router.put("/:id", tutorials.update);
  
    // Delete a Tutorial with id
 //    router.delete("/:id", tutorials.delete);
  
    // Delete all Tutorials
 //   router.delete("/", tutorials.deleteAll);
  
   app.use('/api/alumnos', router);
};
  