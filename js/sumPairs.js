const sumPairs = (arr,desiredSum) => {
    
    let ansArr = [];
    for(i = 0; i < arr.length; i++) {
       
        for(j = i+1; j < arr.length; j++) { 
            let checkArr= [];           
            checkArr.push(arr[i]);
            checkArr.push(arr[j]);
            let sum = checkArr.reduce((a,b) => a+b)
            // console.log(sum, desiredSum)
            if(sum === desiredSum) {
                ansArr.push(checkArr);
            }
        }
    } 
    if (ansArr.length === 0) {
        return 'unable to find pairs'
    }    
    // console.log(ansArr)
    return ansArr
};
console.log(sumPairs([1,2,3,4,5], 9) === [[4,5]])
console.log(sumPairs([1,2,3,4,5], 7) === [[2,5], [3,4]])
console.log(sumPairs([3, 1, 5, 8, 2], 27) === 'unable to find pairs')
// module.exports = {sumPairs}


// sum_pairs([1,2,3,4,5], 9) # [[4,5]]
// sum_pairs([1,2,3,4,5], 7) # [[2,5], [3,4]]
// sum_pairs([3, 1, 5, 8, 2], 27) # 'unable to find pairs'