import { PersonalProgramDatasource, PersonalProgramDto, PersonalProgramEntity, PersonalProgramRepository, UpdatePersonalProgramDto } from "../../domain";

export class PersonalProgramRepositoryImpl implements PersonalProgramRepository {
  constructor(private readonly personalProgramDatasource: PersonalProgramDatasource) {}

  
  findByUserId(id: string): Promise<PersonalProgramEntity[] | null> {
    return this.personalProgramDatasource.findByUserId(id);
  }

  update(updatePersonalProgramDto: UpdatePersonalProgramDto): Promise<PersonalProgramEntity> {
    return this.personalProgramDatasource.update(updatePersonalProgramDto)
  }

    create(personalProgramDto: PersonalProgramDto): Promise<PersonalProgramEntity> {
        return this.personalProgramDatasource.create(personalProgramDto);
    }

}