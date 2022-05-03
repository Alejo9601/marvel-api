import sURL from "../assets/json/settingsUrl.json";

export const comicsUrlFor = (charId, limit) => {
  return `${sURL.baseUrl}/${charId}/comics?limit=${limit}&${sURL.ts}&${sURL.publicKey}&${sURL.md5Hash}`;
};

export const characterUrlFor = (charName) => {
  return `${sURL.baseUrl}${sURL.charRequest}${charName}&${sURL.ts}&${sURL.publicKey}&${sURL.md5Hash}`;
};
