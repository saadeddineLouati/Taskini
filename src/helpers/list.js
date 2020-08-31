export const listUpTo = (list, index) => list.slice(list, index + 1);

export const listRestFrom = (list, index) => list.slice(index, list.length);

export const listInsert = (list, index, thing) => [
  ...list.slice(0, index),
  thing,
  ...listRestFrom(list, index)
];

export const listRemove = (list, index) => [
  ...listUpTo(list, index - 1),
  ...listRestFrom(list, index + 1)
];

export const listReorder = (list, source, destination) => (
  listInsert(listRemove(list, source), destination, list[source])
);

window.listUpTo = listUpTo;
window.listRestFrom = listRestFrom;
window.listInsert = listInsert;
window.listReorder = listReorder;
