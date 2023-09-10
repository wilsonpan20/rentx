import { Request, Response } from "express";

import { CreateCategoryUseCase } from "../createCategory/CreateCategoryUseCase";
import { CreateSpecificationUseCase } from "./CreateSpecificationUsecase";



class CreateSpecificationController{
  constructor(private createSpecificationUseCase:CreateSpecificationUseCase){}
  handle(request: Request, response: Response) {
     const { name, description } = request.body
  this.createSpecificationUseCase.execute({ name, description })

  return response.status(201).send()

  }

}

export {CreateSpecificationController}