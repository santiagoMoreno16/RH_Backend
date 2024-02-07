import { UpdatePersonalProgramDto } from './../dtos/personalProgram/update-personalProgram.dto';
import { PersonalProgramDto } from "../dtos/personalProgram/create-personalProgram.dto";
import { PersonalProgramEntity } from "../entities/personalProgram.entity";

export abstract class PersonalProgramDatasource {
    abstract create(personalProgramDto: PersonalProgramDto): Promise<PersonalProgramEntity>;
    abstract update(updatePersonalProgramDto: UpdatePersonalProgramDto): Promise<PersonalProgramEntity>;
}