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

  async findByUserId(id: string): Promise<PersonalProgramEntity[] | null> {
    try {
      const programs = await PersonalProgramModel.find({ userId: id }).populate("categoryId").exec();

      return programs.map(PersonalProgramMapper.personalProgramEntityFromObject);
    } catch (error) {
      console.log(error);
      if (error instanceof CustomError) {
        throw error;
      }
      throw CustomError.internalServer();
    }
  }
  async update(updatePersonalProgramDto: UpdatePersonalProgramDto): Promise<PersonalProgramEntity> {
    const { id } = updatePersonalProgramDto;

    try {

      const exists = await PersonalProgramModel.findOne({ _id: id });

      if (!exists) throw CustomError.badRequest("Personal program not found");

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
    const { code, name, status, description, requirement, userId, categoryId } = personalProgramDto;

    try {

      const count = await PersonalProgramModel.countDocuments({ userId: userId });

      if (count >= 3) {
        throw CustomError.badRequest('Max number of personal programs exceeded');
    }

        const pProgram = await PersonalProgramModel.create({
            code: code, 
            name: name,
            status: status,
            description: description,
            requirement: requirement,
            userId: userId,
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
