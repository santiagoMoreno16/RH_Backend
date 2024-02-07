import { PersonalProgramModel } from './../../data/mongodb/models/personalProgram.model';
import {
    CustomError,
  PersonalProgramDatasource,
  PersonalProgramDto,
  PersonalProgramEntity,
  UpdatePersonalProgramDto,
} from "../../domain";
import { PersonalProgramMapper } from '../mappers/personalProgram.mapper';

export class PersonalProgramDatasourceImpl implements PersonalProgramDatasource
{
  async update(updatePersonalProgramDto: UpdatePersonalProgramDto): Promise<PersonalProgramEntity> {
    const { id } = updatePersonalProgramDto;

    try {
      const personalProgram = await PersonalProgramModel.findByIdAndUpdate(
        { _id: id },
        { $set: updatePersonalProgramDto }
      );

      if (!personalProgram) {
        throw CustomError.badRequest("Error updating personal program");
      }

      return updatePersonalProgramDto;
    } catch (error) {
      console.log(error);
      if (error instanceof CustomError) {
        throw error;
      }
      throw CustomError.internalServer();
    }


  }
  async create( personalProgramDto: PersonalProgramDto ): Promise<PersonalProgramEntity> {
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
