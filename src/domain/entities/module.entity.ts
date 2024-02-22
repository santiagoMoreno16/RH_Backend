
export class ModuleEntity {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public type: string,
    public assessment: number[],
    public img: string,
  ) {}
}
