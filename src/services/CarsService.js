import httpService from "./HttpService";

class CarsService {
  constructor() {
    this.axios = httpService.axiosInstance;
  }
  async getAll() {
    const response = await this.axios.get(`/cars`);
    return response;
  }

  async add(newCar) {
    const response = await this.axios.post(`/cars`, newCar);
    return response;
  }
}
const carsService = new CarsService();

export default carsService;
