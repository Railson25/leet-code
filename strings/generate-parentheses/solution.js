/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  var CAP = 2000;
  var res = new Array(CAP);
  var resCount = 0;

  var totalLen = 2 * n;
  var buf = new Array(totalLen);

  function backTrack(pos, open, close) {
    if (pos === totalLen) {
      var s = "";
      var i = 0;

      while (i < totalLen) {
        s = s + buf[i];
        i++;
      }

      res[resCount] = s;
      resCount++;
      return;
    }

    if (open < n) {
      buf[pos] = "(";
      backTrack(pos + 1, open + 1, close);
    }

    if (close < open) {
      buf[pos] = ")";
      backTrack(pos + 1, open, close + 1);
    }
  }

  backTrack(0, 0, 0);

  var out = new Array(resCount);
  var k = 0;

  while (k < resCount) {
    out[k] = res[k];
    k++;
  }

  return out;
};
