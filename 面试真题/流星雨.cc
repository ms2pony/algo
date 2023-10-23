// 3.11 美团前端笔试，算法题第二题，最多能观测到多少流星，这种时刻有几个？
// 题目的详细描述：https://www.nowcoder.com/discuss/464206852427890688?sourceSSR=post 
/*
3       区间个数
2 1 5   左端点下标
6 3 7   右端点下标
*/ 
#include<bits/stdc++.h>
using namespace std;

int n, t;
int main() {
  cin >> n;
  vector<pair<int, int> > vec;
  for(int i = 0; i < n; ++i) {
    cin >> t;
    vec.push_back({t, 0});
  }
  for(int i = 0; i < n; ++i) {
    cin >> t;
    vec.push_back({t, 1});
  }
  sort(vec.begin(), vec.end());
  // depth 是当前区间深度，maxDep是最大的深度，cnt是最大深度覆盖的长度和，l是当前最大深度覆盖区间的左端点
  int depth = 0, maxDep = 0, cnt = 0, l = 0;
  for(int i = 0; i < vec.size(); ++i) {
    if(vec[i].second == 0) {	//	碰到左端点，深度+1
      depth++;
      if(depth > maxDep) {	//	找到了新的最深区间
      	cnt = 0; 
        maxDep = depth;
        l = vec[i].first;
      } else if(depth == maxDep) {
        l = vec[i].first;	//	第二次碰到最深区间，也记录左端点
      }
    } else {	//	碰到右端点，深度-1
      if(depth == maxDep) {
        cnt += vec[i].first - l + 1;
      }
      depth--;
    }
  }
  cout << maxDep << ' ' << cnt << endl;
  return 0;
}