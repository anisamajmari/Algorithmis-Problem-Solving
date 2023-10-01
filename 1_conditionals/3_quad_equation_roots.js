/// For an equation ax2 + bx + c = 0 there might be 2, 1 or no roots,
/// write a function to return the real roots of an equation in a list
/// for example x2 - 2x + 1 has 2 roots -1 and 1, therefore your function
/// should return [-1,1] or [1,-1]

const assert = require("assert");

function findRoots(a, b, c) {
  /// your code here, return roots
  const d = b*b - 4 * a *c;
  if(d < 0){
    return [];
  } else if(d == 0){
    const root = -1 * b / 2 * a;
    return [root]
  }else {
    const dRoot = Math.sqrt(d)
    const root1 = (-1*b - dRoot) / 2*a;
    const root2 = (-1*b + dRoot) / 2*a;
    return [root1, root2]
  }
}

assert.deepEqual(new Set(findRoots(1, 0, -1)), new Set([-1, 1]));
assert.deepEqual(new Set(findRoots(1, -5, 6)), new Set([2, 3]));
assert.deepEqual(new Set(findRoots(1, 2, 1)), new Set([-1]));
assert.deepEqual(new Set(findRoots(1, 2, 2)), new Set([]));
