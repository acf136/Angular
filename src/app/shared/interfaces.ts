export interface IUser {
  id: number;
  name: string;
  secondName: string;
  email?: string;
  impagado: boolean;
}
export class  GlobalToUser {
  public static currentID: number;
}
