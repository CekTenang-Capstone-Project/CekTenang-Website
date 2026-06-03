import api from "./api";

export const createActivity = async (payload) => {
  try {
    const response = await api.post("/activities", payload);

    return {
      error: false,
      data: response.data,
    };
  } catch (error) {
    return {
      error: true,
      message:
        error.response?.data?.message ||
        error.message ||
        "Terjadi kesalahan",
    };
  }
};