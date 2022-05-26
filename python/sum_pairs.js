// # JAVASCRIPT CODE 
// # BELOW:
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