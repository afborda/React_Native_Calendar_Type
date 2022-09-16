import { api } from "./api";

export const GetListCars = async () => {
  try {
    const listCar = await api.get("/cars");

    return listCar;
  } catch (error) {
    console.log(error);
  }
};
