export interface IRandomValuesConstructorPayload {
  from: number;
  to: number;
}

export interface IRandomValues {
  getRandomValue(): number;
}
