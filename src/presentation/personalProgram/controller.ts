import { Request, Response } from "express";
import { CreatePersonalProgram, CustomError, PersonalProgramDto, PersonalProgramRepository } from "../../domain";

export class PersonalProgramController {
    constructor(private readonly personalProgramRepository: PersonalProgramRepository) {}
  
    
    private handleError = (error: unknown, res: Response) => {
      if (error instanceof CustomError) {
        return res.status(error.statusCode).json({ error: error.message });
      }
      console.log(error); // Winston
  
      return res.status(500).json({ error: "Internal Server Error" });
    };

    createPersonalProgram = (req: Request, res: Response) => {
        const [error, personalProgramDto] = PersonalProgramDto.create(req.body);
        if (error) return res.status(400).json({ error });
    
        new CreatePersonalProgram(this.personalProgramRepository)
          .execute(personalProgramDto!)
          .then((data) => res.json(data))
          .catch((error) => this.handleError(error, res));
      };
}