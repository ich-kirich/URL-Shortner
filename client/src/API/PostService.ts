import axios from "axios";
import { BASE_URL } from "../libs/constants";
import { INewLink } from "../types/types";

export async function addLink(link: INewLink) {
  const response = await axios.post(BASE_URL, link);
  return response;
}

export async function getStatistics(id: string) {
  const response = await axios.get(`${BASE_URL}info/${id}`);
  return response;
}
