import { ValidationError } from 'yup';
import { passwordSchema } from '../Yup/passwordShema';

export async function showPasswordStrength(password: string): Promise<number> {
  const maxStrength = 4;
  try {
    await passwordSchema.validate(
      {
        password,
      },
      { abortEarly: false }
    );
    return maxStrength;
  } catch (e) {
    if (e instanceof ValidationError) {
      console.log(e.inner);
      return maxStrength - e.inner.length;
    }
    return 0;
  }
}