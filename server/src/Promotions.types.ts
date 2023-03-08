export interface IPromotion {
  name: string,
  beginDate: string,
  endDate: string,
  value: number,
  category: string,
  isPercent?: boolean
}