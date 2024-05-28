function solve(i, j, a, n, ans, move, vis) {
  if (i == n - 1 && j == n - 1) {
    ans.add(move);
    return;
  }

  if (i + 1 < n && vis[i + 1][j] == 0 && a[i + 1][j] == 1) {
    vis[i][j] = 1;
    solve(i + 1, j, a, n, ans, move + "D", vis);
    vis[i][j] = 0;
  }
  if (j - 1 >= 0 && vis[i][j - 1] == 0 && a[i][j - 1] == 1) {
    vis[i][j] = 1;
    solve(i, j - 1, a, n, ans, move + "L", vis);
    vis[i][j] = 0;
  }

  // right
  if (j + 1 < n && vis[i][j + 1] == 0 && a[i][j + 1] == 1) {
    vis[i][j] = 1;
    solve(i, j + 1, a, n, ans, move + "R", vis);
    vis[i][j] = 0;
  }

  // upward
  if (i - 1 >= 0 && vis[i - 1][j] == 0 && a[i - 1][j] == 1) {
    vis[i][j] = 1;
    solve(i - 1, j, a, n, ans, move + "U", vis);
    vis[i][j] = 0;
  }
}
function findPath(a, n) {
  let vis = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      vis[i][j] = 0;
    }
  }
  let ans = [];
  if (a[0][0] == 1) {
    solve(0, 0, a, n, ans, "", vis);
  }
  return ans;
}

let n = 4;
let a = [
  [1, 0, 0, 0],
  [1, 1, 0, 1],
  [1, 1, 0, 0],
  [0, 1, 1, 1],
];
const result = findPath(a, n);
