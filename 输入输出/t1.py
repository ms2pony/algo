if __name__=='__main__':
    n=int(input())
    a = list(map(int, input().split()))
    #left right为栈
    left=[]
    right=[]
    l_num=[]
    r_num=[]
    for i in range(len(a)):#向左看
        l_num.append(len(left))
        if(i==0):#第一个值特殊处理
            left.append(a[i])
        elif(a[i]<left[-1]):# 入栈操作
            left.append(a[i])
        else:
            while(len(left)!=0 and a[i]>=left[-1]):
                left.pop(-1)
            left.append(a[i])
    a.reverse()
    for i in range(len(a)):#向右看
        r_num.append(len(right))
        if(i==0):#第一个值特殊处理
            right.append(a[i])
        elif(a[i]<right[-1]):# 入栈操作
            right.append(a[i])
        else:
            while(len(right)!=0 and a[i]>=right[-1]):
                right.pop(-1)
            right.append(a[i])
    r_num.reverse()
    #print(l_num)
    #print(r_num)
    ans=[]
    for i in range(len(a)):
       ans.append(l_num[i]+r_num[i]+1)
    ansstr=' '.join([str(i) for i in ans])
    print(ansstr)