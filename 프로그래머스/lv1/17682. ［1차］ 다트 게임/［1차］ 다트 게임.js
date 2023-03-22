function solution(dartResult) {
    let result = [];
    let answer = 0;
    let num = '0123456789';
    let bonus = 'SDT';
    let option = '*#';
  

    for(let i=0; i<2; i++){
        for(let j=1; j<4; j++){
            if(num.includes(dartResult[j])){
                if(dartResult[j-1]=='1' && dartResult[j]=='0'){
                 
                    j++;
                    result.push(dartResult.slice(0,j+1)); 
                    dartResult = dartResult.substring(j+1);
                    break;
                }
                result.push(dartResult.slice(0,j)); 
                dartResult = dartResult.substring(j);
            }
           
        }
    }

 
    result.push(dartResult);
    for(let i=0; i<result.length; i++){
        let arr = [];
        for(let j=0; j< result[i].length; j++){
            if(option.includes(result[i][j])){
                arr[2] = result[i][j];
            }
            if(bonus.includes(result[i][j])){
                arr[1] = result[i][j];
            }
            arr[0] = parseInt(result[i].slice(0,j+1));
        }
        result[i] = arr;
    }
    
   
    for(let i=0; i<result.length; i++){
        if(result[i][1] == "D"){
      
            result[i][0] = Math.pow(result[i][0],2);
        }
        if(result[i][1]== "T"){
            result[i][0] = Math.pow(result[i][0],3);
        }
        if(result[i][2]=="*"){
            if(i>0){
               result[i-1][0] *= 2;
            }
            result[i][0] *= 2;
        }
        if(result[i][2]=="#"){
            result[i][0] *= -1;
        }
       
         
    }
    answer = result[0][0] +result[1][0] + result[2][0]; 
    return answer;
}

