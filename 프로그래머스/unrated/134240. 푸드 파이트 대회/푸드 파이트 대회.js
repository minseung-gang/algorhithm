function solution(food) {
    var answer = '';
    
    for(let i=1; i<food.length; i++){    
        let value = parseInt(food[i]/2);
        for(let j=1; j<=value; j++){
            answer += i;
        }
      
    
    }
    answer += 0;
    for(let k=food.length-1; k>0; k--){
    
        let value = parseInt(food[k]/2);
        for(let a=1; a<=value; a++){
            answer += k;
        }
    }
    return answer;
}