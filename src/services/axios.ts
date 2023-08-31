import axios, { AxiosInstance } from "axios";

const API_URL: string = "https://fakestoreapi.com/";

const getAriveAxiosInstance = (baseURL: string): AxiosInstance => {
  const axiosInstance: AxiosInstance = axios.create({
    baseURL,
    headers: {
      Accept: "application/json",
    },
  });

  return axiosInstance;
};

export const ariveAxiosInstance: AxiosInstance = getAriveAxiosInstance(API_URL);
