var strStr = function (ss, pp) {
  if (!pp.length) return 0

  let n = ss.length, m = pp.length

  ss = " " + ss
  pp = " " + pp

  let next = new Array(m + 1).fill(0)

  // 构造过程 i = 2，j = 0 开始，i=0是哨兵，i=1是因为next[1]默认为0
  for (let i = 2, j = 0; i <= m; i++) {
    // 对应上面描述的，p[i]!=p[j]，则j=next[j-1]
    while (j > 0 && p[i] != p[j + 1]) j = next[j]
    // 匹配成功的话，先让j++
    if (p[i] == p[j + 1]) j++
    next[i] = j
  }

  // 匹配过程，i=1，j=0 开始，i 小于等于原串长度 【匹配 i 从 1 开始】
  for (let i = 1, j = 0; i <= n; i++) {
    // 匹配不成功 j =next[j]
    while (j > 0 && s[i] != p[j + 1]) j = next[j]
    // 匹配成功的话，先让j++，结束本次循环后
    if (s[i] == p[j + 1]) j++
    // 整段匹配成功，直接返回下标
    if (j == m) return i - m
  }

  return -1
};