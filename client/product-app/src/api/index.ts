import axios from "axios";

export const fetchProducts = async (perPage: string, pageNumber: string) => {
  const response = await axios.get(`api/products?perPage=${perPage}&pageNumber=${pageNumber}`);
  return response;
};
