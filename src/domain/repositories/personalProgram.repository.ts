import { PersonalProgramDto } from "../dtos/personalProgram/create-personalProgram.dto";
import { PersonalProgramEntity } from "../entities/personalProgram.entity";

export abstract class PersonalProgramRepository {
    abstract create(personalProgramDto: PersonalProgramDto): Promise<PersonalProgramEntity>;
}