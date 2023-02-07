function isTriangle(a,b,c)
{
   return a + b > c && a + c > b && c + b > a;
}

var isTriangle = (a,b,c) => Math.max(a,b,c)<(a+b+c)/2

function isTriangle(a,b,c)
{
  [a, b, c] = [a, b, c].sort((x, y) => x-y);
  
  return a+b > c;
}
