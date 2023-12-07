const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    const count = Number(await readline())

    const resArr = new Array(count).fill(1), leftStack=[], rightStack=[]
    let heights
    // Write your code here
    while(line = await readline()){
        heights = line.split(' ').map(Number);
    }

    for(let i=0; i<heights.length-1; i++){
        // 找左下界
        while(leftStack.slice(-1)[0] <= heights[i] && leftStack.length){
            leftStack.pop()
        }

        leftStack.push(heights[i])

        // if(i+1===0) console.log(leftStack.length)

        resArr[i+1] += leftStack.length
    }

    for(let i=heights.length-1; i>0; i--){
        // 找右下界
        // console.log("rightStack.slice(-1)[0]", rightStack.slice(-1)[0])
        while(rightStack.slice(-1)[0] <= heights[i] && rightStack.length){
            rightStack.pop()
        }

        rightStack.push(heights[i])

        // console.log(rightStack)

        // if(i-1===0) console.log(rightStack.length)

        resArr[i-1] += rightStack.length
    }

    // console.log(resArr)

    console.log(resArr.join(' '))
}()
