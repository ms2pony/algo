// 左较小的数a：从右到左第一个数a满足条件cond1，cond1：a右边有一个数bi，bi>a
// 右较大的数b：满足cond1的数bi中的最小的数
// 参考：https://leetcode.cn/problems/next-permutation/solution/xia-yi-ge-pai-lie-by-leetcode-solution/
#include<vector>
using namespace std;
class Solution {
public:
    void nextPermutation(vector<int>& nums) {
        int i = nums.size() - 2;
        while (i >= 0 && nums[i] >= nums[i + 1]) {
            i--;
        }
        if (i >= 0) {
            int j = nums.size() - 1;
            while (j >= 0 && nums[i] >= nums[j]) {
                j--;
            }
            swap(nums[i], nums[j]);
        }
        // reverse(nums.begin() + i + 1, nums.end());
    }
};
