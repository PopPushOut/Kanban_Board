const generateId = () => {
  const [min, max] = [1000000000000000000, 9999999999999999999];
  const id = Math.floor(Math.random() * (max - min + 1)) + min;
  return id.toString();
};
export default generateId;
