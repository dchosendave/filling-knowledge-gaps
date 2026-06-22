import assert from "node:assert";

function binarySearch(numbers, target) {
  let low = 0;
  let high = numbers.length - 1;

  while (low <= high) {
    let middle = Math.floor(low + (high - low) / 2);
    let value = numbers[middle];

    if (value < target) {
      low = middle + 1;
    } else if (value > target) {
      high = middle - 1;
    } else {
      return middle;
    }
  }

  return "not found";
}

assert.strictEqual(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7), 6);
assert.strictEqual(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1), 0);
assert.strictEqual(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10), 9);
assert.strictEqual(
  binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 99),
  "not found",
);
assert.strictEqual(binarySearch([], 5), "not found");
assert.strictEqual(binarySearch([5], 5), 0);

console.log("All tests passed!");
