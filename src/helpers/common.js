function isEmptyObject(obj) {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      return false;
    }
  }

  return JSON.stringify(obj) === JSON.stringify({});
}

function sortDataByGroup(a, b) {
  // ava b la cac item lien ke nam trong mang
  if (a.group_id < b.group_id) {
    return -1; // giam dan
  } else if (a.group_id > b.group_id) {
    return 1; // tang dan
  }
  return 0; // mac dinh
}

export const helper = {
  isEmptyObject,
  sortDataByGroup,
};
