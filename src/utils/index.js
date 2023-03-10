export const isNotValid = (text) => /&#?[a-z0-9]+;/.test(text);
