export const createSumMatrix = (rows: number, cols: number): number[][] => {
  return Array(rows)
    .fill(0)
    .map((_, i) =>
      Array(cols)
        .fill(0)
        .map((_, j) => i + j)
    );
};

export const createMultiplyMatrix = (rows: number, cols: number): number[][] => {
  return Array(rows)
    .fill(0)
    .map((_, i) =>
      Array(cols)
        .fill(0)
        .map((_, j) => i * j)
    );
};

export const addMatrices = (
  A: number[][],
  B: number[][]
): number[][] | null => {
  if (A.length !== B.length || A[0]?.length !== B[0]?.length) return null;
  return A.map((row, i) =>
    row.map((val, j) => val + B[i][j])
  );
};