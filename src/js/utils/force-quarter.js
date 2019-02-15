function forceQuarter(key) {
  if (key.length < 4) {
    const gem = key.concat(key.slice(key.length - 1));
    return forceQuarter(gem);
  }
  return key;
}

export default forceQuarter;
