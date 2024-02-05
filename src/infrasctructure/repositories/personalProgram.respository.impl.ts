import { PersonalProgramDatasource, PersonalProgramDto, PersonalProgramEntity, PersonalProgramRepository } from "../../domain";

export class PersonalProgramRepositoryImpl implements PersonalProgramRepository {
  constructor(private readonly personalProgramDatasource: PersonalProgramDatasource) {}

    create(personalProgramDto: PersonalProgramDto): Promise<PersonalProgramEntity> {
        return this.personalProgramDatasource.create(personalProgramDto);
    }

}