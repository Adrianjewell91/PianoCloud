export const toArray = (object) => {
  // console.log(object);
  if (object === undefined) {return []};
  return Object.values(object);
};
