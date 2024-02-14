import { PersonalProgramDatasource, PersonalProgramDto, PersonalProgramEntity, PersonalProgramRepository, UpdatePersonalProgramDto } from "../../domain";

export class PersonalProgramRepositoryImpl implements PersonalProgramRepository {
  constructor(private readonly personalProgramDatasource: PersonalProgramDatasource) {}

  update(updatePersonalProgramDto: UpdatePersonalProgramDto): Promise<PersonalProgramEntity> {
    return this.personalProgramDatasource.update(updatePersonalProgramDto)
  }

    create(personalProgramDto: PersonalProgramDto): Promise<PersonalProgramEntity> {
        return this.personalProgramDatasource.create(personalProgramDto);
    }

}