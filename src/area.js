export default function(polygon) {
  var i = -1,
      n = polygon.length,
      a,
      b = polygon[n - 1],
      area = 0;

  if (!n) return area;

  // Compute relative to the first vertex to avoid catastrophic cancellation
  // when the polygon is far from the origin.
  var x0 = polygon[0][0],
      y0 = polygon[0][1],
      xa,
      ya,
      xb = b[0] - x0,
      yb = b[1] - y0;

  while (++i < n) {
    xa = xb;
    ya = yb;
    a = polygon[i];
    xb = a[0] - x0;
    yb = a[1] - y0;
    area += ya * xb - xa * yb;
  }

  return area / 2;
}
