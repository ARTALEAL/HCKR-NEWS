import { decode } from 'html-entities';

export const decodeEntities = (str) => {
  return decode(str);
};
