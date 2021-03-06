export const toCamelCase = (input: string) =>
  input.replace(/_([a-z])/gi, (all, letter) => letter.toUpperCase());

export const toTileCase = (str: string) =>
  str.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });

export const toUpperCase = (input: string) =>
  toCamelCase(input.charAt(0).toUpperCase() + input.slice(1));

export const toPrivateCase = (input: string) => input.charAt(0).toLowerCase() + input.slice(1);
