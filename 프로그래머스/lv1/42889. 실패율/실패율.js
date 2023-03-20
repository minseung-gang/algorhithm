function solution(N, stages) {
    let answer = [];
    let result = [];

    for(let j=0; j<=N; j++){

        answer.push(stages.filter(value=> 
            value==j+1
       ).length);

    }
    for(let i=0; i<N; i++ ){
        let sum = 0;
        if(answer[i]==0){
            result.push(0);
            continue;
        }
        for(let k=i; k<answer.length; k++){
            sum += answer[k];

        }
        result.push(answer[i] / sum);

    }
  
    let last = [];
    while(result.length !== last.length){
      let max = Math.max(...result);
      last.push(result.indexOf(max)+1);
      result.splice(result.indexOf(max),1,-1);
 
    }
  
   
   return last;

  
  

}