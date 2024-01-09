export class TrackingPointsEntity {
  constructor(
    public pendingApproval: number,
    public pointsForApproval: number,
    public pendingAdvance: number,
    public pointsRedemption: number
  ) {}
}
