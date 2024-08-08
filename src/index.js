
// You should implement your task here.

module.exports = function towelSort (matrix) {

for(i = 0; i < matrix.length; i++) {
    if (i % 2 === 0) {
        [].push(...matrix[i]);
    }
    else {
        [].push(...matrix[i].reverse());
    }
}
  return [];
};
