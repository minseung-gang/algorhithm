function solution(numbers, hand) {
  
    let left = [3,0];
    let right = [3,2];
    let leftList = [1,4,7];
    let rightList = [3,6,9];
    let keyNum = 
    [   [3,1],
        [0,0],[0,1],[0,2],
        [1,0],[1,1],[1,2],
        [2,0],[2,1],[2,2],
        [3,1]
    ];

     
          let answer = numbers.map((data,idx)=>{
          
                if(leftList.includes(numbers[idx])){
                   
                    left=keyNum[data];
           
                    return "L";
                }
                if(rightList.includes(numbers[idx])){
                  
                    right=keyNum[data];
          
                    return "R";
                }
                else{
                   
                   
                    let leftNum = Math.abs(keyNum[data][0] - left[0]) + Math.abs(keyNum[data][1] - left[1]);
                
                    let rightNum = Math.abs(keyNum[data][0] - right[0]) + Math.abs(keyNum[data][1] - right[1]);
           
                    if(leftNum > rightNum){
                        right=keyNum[data];
                        return "R";
                    }
                    if(leftNum < rightNum){
                        left=keyNum[data];
                        return "L";
                    }
                    if(hand == "right"){
                        right=keyNum[data];
                        return "R";
                    }
                    left=keyNum[data];
                    return "L";
                  
                }
            })
    

    return answer.join("");
}
