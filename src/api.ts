export const apiUrl = "https://api.simonmartineau.dev/";

export const fetchResource = async (url: string) => {
  const response = await fetch(apiUrl + url);
  const body = await response.json();
  return body;
};
