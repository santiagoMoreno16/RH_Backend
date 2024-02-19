export class PointsEntity {
  constructor(
    public strategic: number,
    public tactical: number,
    public operational: number,
    public personal: number,
    public userId: string,
  ) {}
}
