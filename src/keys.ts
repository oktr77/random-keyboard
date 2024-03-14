const KEYS = 'qwertyuiopasdfghjklzxcvbnm'.split('');

export const DEFAULT_KEYS = KEYS.reduce((acc, key) => ({ ...acc, [key]: key }), {});

export interface StringMap {
  [key: string]: string;
}

function swapValues(obj: StringMap, key1: string, key2: string) {
  let tmp = obj[key1];
  obj[key1] = obj[key2];
  obj[key2] = tmp;
}

function shallowClone(obj: StringMap) {
  return Object.keys(obj).reduce((acc, key) => ({ ...acc, [key]: obj[key] }), {});
}

function randomInt(max: number, min = 0) {
  return min + Math.floor(Math.random() * (max-min));
}

export function shuffleKeys(keys: StringMap) {
  let res = shallowClone(keys);
  let resKeys = Object.keys(shallowClone(keys));
  resKeys.forEach(key => swapValues(res, key, resKeys[randomInt(resKeys.length)]));
  return res;
}
