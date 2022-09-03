export const simpleDate = (date: String) => date.split('T')[0];

export const capitalizeFirstLetter = (input: string) => {
   return input.charAt(0).toUpperCase() + input.slice(1);
 }