export default function(polygon) {
  var i = -1,
      n = polygon.length,
      x = 0,
      y = 0,
      a,
      b = polygon[n - 1],
      c,
      k = 0;

  if (!n) return [NaN, NaN];

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
    k += c = xa * yb - xb * ya;
    x += (xa + xb) * c;
    y += (ya + yb) * c;
  }

  return k *= 3, [x / k + +x0, y / k + +y0];
}
