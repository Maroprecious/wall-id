import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import * as SecureStore from "expo-secure-store";


export async function saveToken(key: string, value: string) {
  await SecureStore.setItemAsync(key, value);
}

export async function getToken(key: string) {
  const result = await SecureStore.getItemAsync(key);
  return result;
}

let token = "";


const useAxios = async function apiRequest(
  request: AxiosRequestConfig,
  withToken = true
): Promise<AxiosResponse> {
  const token = await getToken('token')

  const tokenObj = {
    authorization: `Bearer ${token}`,
  }

  let header: any = {
    ...request.headers,
  }

  if (withToken) {
    header.authorization = `Bearer ${token}`
  }

  const resp = await axios.request({
    ...request,
    headers: header,
  });
  if (resp.status === 401) {
    console.log("clear");
  }
  return resp;
};
export default useAxios;
