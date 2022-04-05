import axios from "axios";
import { API_KEY, BASE_URL } from "../env";

export const marvelRequest = async (
  endpoint: string,
  queryParams: string,
  loadingHandler = (value: boolean) => {}
) => {
  if (loadingHandler) loadingHandler(true);

  let response = await axios
    .get(`${BASE_URL}${endpoint}${queryParams}&${API_KEY}`)
    .then((response) => response.data.data.results)
    .catch((error) => console.log(error));

  if (loadingHandler) loadingHandler(false);
  return response;
};
