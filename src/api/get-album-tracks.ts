import {getToken} from "./get-token.ts";

export const getAlbumTracks = async (id: string) => {
  const token = await getToken()

  const headers = new Headers();
  headers.append("Authorization", `Bearer ${token}`);

  const requestOptions = {
    method: 'GET',
    headers: headers,
  };

  return fetch(`https://api.spotify.com/v1/albums/${id}/tracks?market=BR`, requestOptions)
    .then(response => response.json())
}