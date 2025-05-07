// https://space-tourism-json-server.netlify.app/api/data
// api endpoint

import axios from "axios";

export async function fetchData() {
  try {
    const res = await axios.get(
      "https://space-tourism-json-server.netlify.app/api/data",
    );

    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      //  Handle Axios-specific errors
      console.error("Error fetching data:", error.message);
      throw new Error(error.message);
    } else if (error instanceof Error) {
      // handle generic errors
      console.error("Error fetching data:", error.message);
      throw new Error(error.message);
    } else {
      // Hanlde unexpected error types
      console.error("An unexpected error occurred");
      throw new Error("An unexpected error occured");
    }
  }
}
