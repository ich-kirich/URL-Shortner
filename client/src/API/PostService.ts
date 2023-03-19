import axios from "axios";
import { BASE_URL } from "../libs/constants";

export async function getOneLink(currency: string) {
  const response = await axios.get(`${BASE_URL}/link/1`);
  return response;
}

export async function addLink() {
  const response = await axios.post(`${BASE_URL}/link`);
  return response;
}
