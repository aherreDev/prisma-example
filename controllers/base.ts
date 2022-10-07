import { NextFunction, Request, Response } from "express";

class Controller {
  private errors: string[] = [];

  // ----------------------------------------
  // Basic Methods
  // ----------------------------------------

  public index(req: Request, res: Response, next: NextFunction){
    throw new Error("Not implemented");
  }

  public show(req: Request, res: Response, next: NextFunction){
    throw new Error("Not implemented");
  }

  public create(req: Request, res: Response, next: NextFunction){
    throw new Error("Not implemented");
  }

  public update(req: Request, res: Response, next: NextFunction){
    throw new Error("Not implemented");
  }

  public delete(req: Request, res: Response, next: NextFunction){
    throw new Error("Not implemented");
  }

  // ----------------------------------------
  // Helpers
  // ----------------------------------------

  public hasErrors(){
    return this.errors.length > 0;
  }

  public getErrors(){
    return this.errors.join(", ");
  }

  public clearErrors(){
    this.errors = [];
  }

  // ----------------------------------------
  // Private Helpers
  // ----------------------------------------

  private addError(){
    this.errors.push("Error");
  }
}

export default Controller;
