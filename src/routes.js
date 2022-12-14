import Router from "express"; 

//PET CONTROLLERS
import CreateVetController from "./app/controller/VET/CreateVetController";
import ListAllVetsController from "./app/controller/VET/ListAllVetsController";
import CreatePETController from "./app/controller/PET/CreatePETController";
import UpdatePETController from "./app/controller/PET/UpdatePETController"; 
import ListPETController from "./app/controller/PET/ListPETController"; 
import DeletePETController from "./app/controller/PET/DeletePETController"
import ListAllTutorController from "./app/controller/TUTOR/ListTutorController";
import CreateTutorController from "./app/controller/TUTOR/CreateTutorController";
import UpdateTutorController from "./app/controller/TUTOR/UpdateTutorController";
import DeleteTutorController from "./app/controller/TUTOR/DeleteTutorController";
import UpdateVeterinarioController from "./app/controller/VET/UpdateVetController";
import DeleteVeterinarioController from "./app/controller/VET/DeleteVetController";


//MIDDLEWARES
import tutorValidator from "./middlewares/tutorValidator";
import vetValidator from "./middlewares/VetValidator";

import petValidator from "./middlewares/PetValidator";

const routes = new Router();

//PETS
const createPETController = new CreatePETController;
const updatePETController = new UpdatePETController; 
const listPETController = new ListPETController;  
const deletePETController = new DeletePETController; 


//Tutor
const createTutorController = new CreateTutorController();
const listAllTutorController = new ListAllTutorController();
const updateTutorController = new UpdateTutorController();
const deleteTutorController = new DeleteTutorController();


// ROTAS PETS

routes.get('/pets', (req,res)=> 
    listPETController.index(req,res)
);

routes.post("/pets", petValidator,  (req,res) =>
    createPETController.create(req,res)
);

routes.put("/pets/:id", petValidator, (req,res) => 
    updatePETController.update(req,res)
);

routes.delete('/pets/:id', (req,res)=>  
    deletePETController.delete(req,res)

);

// ROTAS VET


routes.post("/vets", vetValidator, async (req, res) => {
  const controller = new CreateVetController();
  return await controller.create(req, res);
}
);

routes.get("/vets", async(req, res)=> {
  const controller = new ListAllVetsController();
  return await controller.listAll(req, res)
})
routes.put("/vets/:id", async (req, res) => {
  const controller = new UpdateVeterinarioController();
  return await controller.update(req, res);
});

routes.delete("/vets/:id", async (req, res) => {
  const controller = new DeleteVeterinarioController();
  return await controller.delete(req, res);
});

//Rotas Tutor
routes.get("/tutor", (req,res) =>  listAllTutorController.listAll(req,res));
routes.post("/tutor", tutorValidator, (req,res) =>  createTutorController.create(req,res));
routes.put("/tutor/:id", (req,res) =>  updateTutorController.update(req,res));
routes.delete("/tutor/:id", (req,res) =>  deleteTutorController.delete(req,res));


export default  routes; 
