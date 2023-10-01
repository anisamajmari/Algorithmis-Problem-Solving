const a = [
  [
    [1, 2],
    [1, 2, 3],
    [1, 2, 3, 4],
    [-1, 1, 2],
  ],
  [[1], [2, 3, -1], [4], [-1, -5, 2, 3]],
  [[1, 2, 3], [-1], [2], [1, 3, 4]],
  [[2], [-1, -4, -7, 2], [1], [11, 1, -3, 12]],
];

/// create a new 2d array, use the maximum of the last level as element
/// for example the upper array should be like
/// 2     3       4       2
/// 1     3       4       3
/// 3     -1      2       4
/// 2     2       1       12
