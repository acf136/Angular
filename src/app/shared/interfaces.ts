// Global values
export class  GlobalToUser {
  public static currentID: number;
}
// user Definition
export interface IUser {
  id: number;
  name: string;
  secondName: string;
  email?: string;
  impagado: boolean;
}
