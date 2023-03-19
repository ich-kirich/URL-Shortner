import axios from "axios";
import { BASE_URL } from "../libs/constants";

export async function getOneLink(id: string) {
  const response = await axios.get(`${BASE_URL}/link/${id}`);
  return response;
}

export async function addLink() {
  const response = await axios.post(`${BASE_URL}/link`);
  return response;
}
