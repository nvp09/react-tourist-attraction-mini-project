import axios from "axios";

const BASE_URL = "http://localhost:4001";

export async function fetchTrips(keyword = "") {
  const response = await axios.get(`${BASE_URL}/trips`, {
    params: {
      keywords: keyword,
    },
  });

  return response.data.data;
}
