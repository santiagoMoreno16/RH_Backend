export class ProjectDto {
    private constructor(
      public name: string,
      public description: string,
      public type: string,
      public duration: Date,
      public leaderId: string,
      public quizId: string,
      public budget: number,
      public pointId: string,
    ) {}
  
    static create(object: { [key: string]: any }): [string?, ProjectDto?] {
      const { name, description, type, duration, leaderId, quizId, budget, pointId } = object;
  
      if (!name) return ["Missing Name"];
      if (!description) return ["Missing description"];
      if (!type) return ["Missing type"];
      if (!duration) return ["Missing duration"];
      if (!leaderId) return ["Missing user id"];
      if (!quizId) return ["Missing quiz id"];
      if (!budget) return ["Missing budget"];
      if (!pointId) return ["Missing point id"];
  
      return [ undefined, new ProjectDto( name, description, type, duration, leaderId, quizId, budget, pointId), ];
    }
  }
  