    def sum_pairs(arr,desired_sum):
    ans_list = []
    sum = 0
    
    for x in arr :  
        for y in arr:
            pair_arr = []
            if arr.index(x) != arr.index(y) :
                # print(x,y)
                sum = x+y
               # print(sum,desired_sum)
                if sum == desired_sum :
                    pair_arr.append(x)
                    pair_arr.append(y)
                    check_rev = [y,x]
                #print(check_rev)
                    if check_rev not in ans_list:
                        ans_list.append(pair_arr)
    if len(ans_list) == 0 :
        return 'unable to find pairs'
    return ans_list
        
            
            




# JAVASCRIPT CODE 
# BELOW:
# let ansArr = [];
#     for(i = 0; i < arr.length; i++) {

#         for(j = i+1; j < arr.length; j++) { 
#             let checkArr= [];           
#             checkArr.push(arr[i]);
#             checkArr.push(arr[j]);
#             let sum = checkArr.reduce((a,b) => a+b)
#             // console.log(sum, desiredSum)
#             if(sum === desiredSum) {
#                 ansArr.push(checkArr);
#             }
#         }
#     } 
#     if (ansArr.length === 0) {
#         return 'unable to find pairs'
#     }    
#     // console.log(ansArr)
#     return ansArr

print(sum_pairs([1,2,3,4,5], 9) == [[4,5]])
print(sum_pairs([1,2,3,4,5], 7) == [[2,5], [3,4]])
print(sum_pairs([3, 1, 5, 8, 2], 27) == 'unable to find pairs')
