// Using node-uuid instead :(
// A chance of colisions is lower using uuid

/*
export const generateId = () => {
  const [min, max] = [1000000000000000000, 9999999999999999999];
  const id = Math.floor(Math.random() * (max - min + 1)) + min;
  return id.toString();
};
*/

//2015-03-31 13:35:21
export const formatDate = (date) => {
  const d = new Date(date);
  return (
    d.getFullYear().toString() +
    '-' +
    ((d.getMonth() + 1).toString().length == 2
      ? (d.getMonth() + 1).toString()
      : '0' + (d.getMonth() + 1).toString()) +
    '-' +
    (d.getDate().toString().length == 2
      ? d.getDate().toString()
      : '0' + d.getDate().toString()) +
    ' ' +
    (d.getHours().toString().length == 2
      ? d.getHours().toString()
      : '0' + d.getHours().toString()) +
    ':' +
    (d.getMinutes().toString().length == 2
      ? d.getMinutes().toString()
      : '0' + d.getMinutes().toString()) +
    ':' +
    (d.getSeconds().toString().length == 2
      ? d.getSeconds().toString()
      : '0' + d.getSeconds().toString())
  );
};
