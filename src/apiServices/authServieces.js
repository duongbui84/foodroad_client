import { authRequest } from '~/utils/axiosRequest';

export const loginService = async (email, password) => {
  try {
    const response = await authRequest.post('/log-in', { email, password });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const signupService = async (email, password, fullName, address, gender) => {
  try {
    const response = await authRequest.post('/sign-up', {
      email,
      password,
      fullName,
      address,
      gender,
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
