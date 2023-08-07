import {spotifyConfig} from "../config";

interface GetTokenResponse {
  access_token: string;
}

export const getToken = (): Promise<string> => {
  const headers = new Headers();
  headers.append("Content-Type", "application/x-www-form-urlencoded");

  const urlencoded = new URLSearchParams();
  urlencoded.append("grant_type", "client_credentials");
  urlencoded.append("client_id", spotifyConfig.CLIENT_ID);
  urlencoded.append("client_secret", spotifyConfig.CLIENT_SECRET);

  const requestOptions = {
    method: 'POST',
    headers: headers,
    body: urlencoded,
  };

  return fetch("https://accounts.spotify.com/api/token", requestOptions)
    .then(response => response.json())
    .then((result: GetTokenResponse) => result.access_token)
}