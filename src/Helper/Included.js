const included = (data, res) => {
  if (data === undefined) {
    return false;
  } else {
    return data.includes(res);
  }
};

export default included;
