export interface IForm {
  name?: string;
  age?: number;
  email?: string;
  password?: string;
  confirmPassword?: string;
  accept?: boolean;
  gender?: 'male' | 'female' | string;
  country?: string;
  picture?: unknown | File;
}

export interface ISubmitForm extends IForm {
  picture: string;
}
