import { API } from '@/utils/enum';
import { handleError } from '@/utils/helpers';
import Axios, { AxiosError } from 'axios';

export const callApi = async (url: string, method: API, data?: object | null, shouldThrowError?: boolean) => {
  // Axios.defaults.headers.common.Authorization = getToken();
  // const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  // const uri = `${baseUrl}/${url}`;
  // console.log("uri",uri);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL?.replace(/\/$/, ""); // Remove trailing slash
  const formattedUrl = url.startsWith("/") ? url.substring(1) : url; // Remove leading slash from `url`
  const uri = `${baseUrl}/${formattedUrl}`;
  console.log("uri",uri);
  const DEFAULT_HEADER = {
    headers: {
      'Content-Type': 'application/json',
      "Authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2M2ZDJlM2NhMzlhOWM5YzNjM2Y4MjQiLCJyb2xlIjoicm9vdCIsInBlcm1pc3Npb24iOiI2N2M2OTA5MzFkZGM3YWIyNThkMTU3NzIiLCJlbWFpbCI6InJlZXRlYXNocGFuZGV5QGdtYWlsLmNvbSIsInBob25lIjoiMTg3MjQ0MDg5MCIsIm5hbWUiOiJSZWV0ZXNoIFBhbmRleSIsImRlcGFydG1lbnQiOiJTYWxlcyIsImlhdCI6MTc0MjQ0NzM4NH0.U7sa8FQZWE_bSXen6WyD6ZJsyJ7qMjd5Fw35v0ptOE8",
    },
  };
  try {
    // const response =
    //   method === API.POST ? await Axios.post(uri, data, DEFAULT_HEADER) : API.PATCH ? await Axios.patch(uri,DEFAULT_HEADER):await Axios.get(uri,DEFAULT_HEADER);
    // return response.data;
    const response =
  method === API.POST
    ? await Axios.post(uri, data, DEFAULT_HEADER)
    : method === API.PATCH
    ? await Axios.patch(uri, data, DEFAULT_HEADER)
    : await Axios.get(uri, DEFAULT_HEADER);

return response.data;

  } catch (error) {
    return handleError(error as AxiosError, shouldThrowError);
  }
};
