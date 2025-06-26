import axiosInstance from '@/config/axiosConfig';
const baseURL = `/posts`;

export const getPosts = async () => {
  try {
    const res = await axiosInstance(baseURL);
    return res.data;
  } catch (error) {
    if (!error.response.data.error) {
      throw new Error('An error occurred while creating the post');
    }
    throw new Error(error.response.data.error);
  }
};

export const getSinglePost = async (id) => {
  try {
    const res = await axiosInstance(`${baseURL}/${id}`);
    return res.data;
  } catch (error) {
    if (!error.response.data.error) {
      throw new Error('An error occurred while creating the post');
    }
    throw new Error(error.response.data.error);
  }
};

export const createPost = async (formData) => {
  try {
    const res = await axiosInstance.post(baseURL, formData);
    return res.data;
  } catch (error) {
    if (!error.response.data.error) {
      throw new Error('An error occurred while creating the post');
    }
    throw new Error(error.response.data.error);
  }
};
