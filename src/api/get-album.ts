import {getToken} from "./get-token.ts";

export const getAlbum = async (id: string) => {
  const token = await getToken()

  const headers = new Headers();
  headers.append("Authorization", `Bearer ${token}`);

  const requestOptions = {
    method: 'GET',
    headers: headers,
  };

  return fetch(`https://api.spotify.com/v1/albums/${id}?market=BR`, requestOptions)
    .then(response => response.json())
}