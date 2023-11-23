import { api } from "../axios/api";

export const initService = async () => {
  const response = await api.post("/init", {
    cinema_id: 3,
    sales_channel_id: 1,
  });

  return response.data;
};
