module.exports = app => {
    const padrefamilia = require("../controllers/padrefamilia.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Padre familia
    router.post("/", padrefamilia.upload, padrefamilia.create);
  
    // Retrieve all Tutorials
    router.get("/", padrefamilia.findAll);
  
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
  
    app.use('/api/padrefamilia', router);
};