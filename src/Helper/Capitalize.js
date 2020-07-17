const capfirstl = s => {
  if (s === undefined) {
    return s;
  } else {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }
};

export default capfirstl;
