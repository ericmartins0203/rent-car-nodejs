import { SpecificationRepository } from "../../repositories/implementations/SpecificationRepository";
import { CreateSpeficationController } from "./createSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const specificationRepository = new SpecificationRepository();

const specificationUseCase = new CreateSpecificationUseCase(
  specificationRepository
);

const createspecificationController = new CreateSpeficationController(
  specificationUseCase
);

export { createspecificationController };
