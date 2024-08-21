import { customAlphabet } from 'nanoid';

const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const nanoid = customAlphabet(alphabet, 3);


export const generateRandomString = (): string => {
    return `${nanoid()}-${nanoid()}-${nanoid()}`;
  };