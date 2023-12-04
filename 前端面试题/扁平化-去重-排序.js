// 扁平化，方法一，迭代法
const flatten = () => {
  let arr = [[123, 123, 2, 4, 42, 1, 2, 5], [5, 8, 6, 54, 3, 9, 9, 3], 0, 7];

  while (arr.some((item) => Array.isArray(item))) {
    arr = [].concat(...arr);    // concat 参数可以是数组，也可以不是数组
  }

  const setList = new Set([...arr])
  const setListArray = [...setList]

  console.log("setList", setList);
  console.log("setListArray", setListArray);
};

// * 1. 扁平-去重-排序
// 扁平化
const flattenDeep = (array)=>array.flat(Infinity)
// 去重
const unique = (array) => Array.from(new Set(array))
// 排序
const sort = (array)=>array.sort((a,b)=>a-b)
// 函数组合
const compose = (...fns) => (initValue) => fns.reduceRight((y, fn) => fn(y), initValue)
// 组合后函数
const flatten_unique_sort = compose(sort,unique,flattenDeep)

function test1(){
  const arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10]
  console.log(flatten_unique_sort(arr))
}

test1()