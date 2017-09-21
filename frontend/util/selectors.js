export const toArray = (object) => {
  if (object === undefined) {return []};
  return Object.values(object);
};
