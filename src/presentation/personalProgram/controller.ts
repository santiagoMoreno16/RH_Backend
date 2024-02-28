import { Request, Response } from "express";
import {
  CreatePersonalProgram,
  CustomError,
  PersonalProgramDto,
  PersonalProgramRepository,
  UpdatePersonalProgram,
  UpdatePersonalProgramDto,
} from "../../domain";
import { CategoryModel } from "../../data/mongodb";

export class PersonalProgramController {
  constructor(
    private readonly personalProgramRepository: PersonalProgramRepository
  ) {}

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

  updatePersonalProgram = (req: Request, res: Response) => {
    const [error, updatePersonalProgramDto] = UpdatePersonalProgramDto.update(
      req.body
    );
    if (error) return res.status(400).json({ error });

    new UpdatePersonalProgram(this.personalProgramRepository)
      .execute(updatePersonalProgramDto!)
      .then((data) => res.json(data))
      .catch((error) => this.handleError(error, res));
  };

  getProgramsByUserId = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const program = await this.personalProgramRepository.findByUserId(id);

      if (!program) {
        return res.status(400).json({ message: "User not found" });
      }

      res.json({ program });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  };
}
