const strin = s => {
  if (s === undefined) {
    return s;
  } else {
    return s
      .toString()
      .split(" ")
      .join("");
  }
};

export default strin;
