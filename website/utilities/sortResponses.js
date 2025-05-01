function sortById(list) {
  list.sort(function (a, b) {
    return parseInt(a.id) - parseInt(b.id);
  });
}

export default sortById;
