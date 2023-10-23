// 20230319 米哈游前端笔试第3题
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

function isSubsequence(s, t) {  // s小，t大
  let hash = {
    m: 0,
    h: 0,
    y: 0
  }
  let n = s.length, m = t.length;
  let i = 0, j = 0;
  while (i < n && j < m) {
    if (s[i] === t[j]) {
      i++;
    }
    else if ("mhy".includes(s[i])) {
      hash[s[i]]++
    }
    else if ("mhy".includes(t[i])) {
      hash[s[i]]++
    } else {
      return false
    }

    j++;
  }
  return i === n;
}

// 力扣 392 判断子序列 的答案
function isSubsequence(s, t) {  // s小，t大
  let n = s.length, m = t.length;
  let i = 0, j = 0;
  while (i < n && j < m) {
    if (s[i] === t[j]) {
      i++;
    }
    j++;
  }
  return i === n;
}

void async function () {
  // Write your code here
  var n = parseInt(await readline());
  for (let k = 0; k < n; k++) {
    s = await readline()
    t = await readline()

    if (s.length >= t.length) {
      let tmp = s
      s = t
      t = tmp
    }
    if (isSubsequence(s, t)) console.log("Yes")
    else console.log("No")
  }
}()