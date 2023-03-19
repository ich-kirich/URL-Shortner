import axios from "axios";
import { BASE_URL } from "../libs/constants";
import { INewLink } from "../types/types";

export async function getOneLink(id: string) {
  const response = await axios.get(`${BASE_URL}link/${id}`);
  return response.data;
}

export async function addLink(link: INewLink) {
  const response = await axios.post(`${BASE_URL}/link`, link);
  return response;
}
