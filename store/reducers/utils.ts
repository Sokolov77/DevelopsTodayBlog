import * as _ from 'lodash';

export const removePostFromArray = (array, id) => {
  const idx = _.findIndex(array, (post) => post.id === id);
  return [...array.slice(0, idx), ...array.slice(idx + 1)];
};
