function getNumByString(str) {
  const id = [];

  str.split('').forEach(letter => id.push(letter.charCodeAt(0)));
  return id.toString().replace(/[,01]/gi, '');
}

export default getNumByString;
