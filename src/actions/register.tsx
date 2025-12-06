"use server";

import { IFormData } from "@/types/form-data";
import  prisma  from "@/utils/prisma";

const registerUser = async (formData: IFormData) => {
  const { email, password, confirmPasword } = formData;

  try {
    const user = await prisma.user.create({
      data: {
        email: email,
        password: password,
      },
    });
    console.log("user", user);
    return user;
  } catch (error) {
    console.log('ошибка регистрации', error);
    return {error: 'ошибка регистрации'}
  }
};

export default registerUser;
