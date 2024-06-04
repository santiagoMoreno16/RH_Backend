export class ProjectEntity {
    constructor(
      public id: string,
      public name: string,
      public description: string,
      public type: string,
      public duration: Date,
      public leaderId: string,
      public quizId: string,
      public budget: number,
      public pointId: string,
    ) {}
  }
  