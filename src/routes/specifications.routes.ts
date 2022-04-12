import { Router } from "express";

import { createspecificationController } from "../modules/cars/useCases/createSpecification";

const specificationsRoutes = Router();

specificationsRoutes.post("/", (req, res) => {
  return createspecificationController.handle(req, res);
});

export { specificationsRoutes };
