import axiosInstance from '@/config/axiosConfig';

const baseURL = `/auth`;

export const me = async () => {
  try {
    const res = await axiosInstance(`${baseURL}/me`);
    return res.data;
  } catch (error) {
    if (error.response) {
      console.error('Authentication error:', error.response.data.error);
    }
  }
};

export const signin = async (formData) => {
  try {
    const res = await axiosInstance.post(`${baseURL}/signin`, formData);
    return res.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    } else {
      return { error: 'An unexpected error occurred while signin' };
    }
  }
};

export const signup = async (formData) => {
  try {
    const res = await axiosInstance.post(`${baseURL}/signup`, formData);
    console.log(res.data);
    return res.data;
  } catch (error) {
    if (error.response) {
      console.log(error.response.data);
      return error.response.data;
    } else {
      return { error: 'An unexpected error occurred while signup' };
    }
  }
};
export const signout = async () => {
  try {
    const res = await axiosInstance.delete(`${baseURL}/signout`);
    console.log(res);
  } catch (error) {
    console.error(error);
    return { error: 'An unexpected error occurred while signout' };
  }
};
