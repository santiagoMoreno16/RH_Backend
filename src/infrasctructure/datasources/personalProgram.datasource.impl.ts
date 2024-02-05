import { PersonalProgramModel } from './../../data/mongodb/models/personalProgram.model';
import {
    CustomError,
  PersonalProgramDatasource,
  PersonalProgramDto,
  PersonalProgramEntity,
} from "../../domain";
import { PersonalProgramMapper } from '../mappers/personalProgram.mapper';

export class PersonalProgramDatasourceImpl implements PersonalProgramDatasource
{
  async create(
    personalProgramDto: PersonalProgramDto
  ): Promise<PersonalProgramEntity> {
    const { code, name, status, type, expirationDate, month, employeeId, categoryId } = personalProgramDto;

    try {
        const pProgram = await PersonalProgramModel.create({
            code: code, 
            name: name,
            status: status,
            type: type,
            expirationDate: expirationDate,
            month: month,
            employeeId: employeeId,
            categoryId: categoryId
        })

        await pProgram.save();

        return PersonalProgramMapper.personalProgramEntityFromObject(pProgram);
    } catch (error) {
        console.log(error);
      if (error instanceof CustomError) {
        throw error;
      }
      throw CustomError.internalServer();
    }

  }
}
