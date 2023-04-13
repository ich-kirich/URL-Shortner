import axios from "axios";
import { INewLink } from "../types/types";

export async function addLink(link: INewLink) {
  const response = await axios.post(
    String(process.env.REACT_APP_BASE_URL),
    link,
  );
  return response;
}

export async function getStatistics(id: string) {
  const response = await axios.get(
    `${process.env.REACT_APP_BASE_URL}/info/${id}`,
  );
  return response;
}
