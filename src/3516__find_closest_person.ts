function findClosest(x: number, y: number, z: number): number {
  const first = Math.abs(z - x);
  const second = Math.abs(z - y);

  if (first === second) return 0;
  if (first < second) return 1;
  else return 2;
}
