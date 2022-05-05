import sURL from "../assets/json/settingsUrl.json";

export const comicsUrlFor = (charId, limit, offset) => {
  return `${sURL.baseUrl}/${charId}/comics?limit=${limit}&offset=${offset}&${sURL.ts}&${sURL.publicKey}&${sURL.md5Hash}`;
};

export const characterUrlFor = (charName) => {
  return `${sURL.baseUrl}${sURL.charRequest}${charName}&${sURL.ts}&${sURL.publicKey}&${sURL.md5Hash}`;
};
