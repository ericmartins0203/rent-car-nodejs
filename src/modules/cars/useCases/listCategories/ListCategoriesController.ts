import { Request, Response } from "express";
import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";

import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoriesController {
  constructor(private ListCategoriesUseCase: ListCategoriesUseCase) {}

  handle(request: Request, response: Response): Response {
    const all = this.ListCategoriesUseCase.execute();

    return response.status(201).json(all);
  }
}

export { ListCategoriesController };
