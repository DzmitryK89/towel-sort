
// You should implement your task here.

module.exports = function towelSort (matrix) {
if (!matrix || matrix.length === 0) return [];

    return matrix.reduce((total, amount, index) => index % 2 ? total.concat(amount.reverse()) : total.concat(amount), []);
}
