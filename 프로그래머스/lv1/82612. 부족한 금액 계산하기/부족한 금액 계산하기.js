function solution(price, money, count) {
    let answer= 0;
    for(let i = 1; i<=count; i++){
     
        let cost =  price * i;
        answer += cost
        console.log(answer);
    }
    answer = answer - money;
    if(answer > 0){
        return answer;
    }
    else return answer = 0;
   
}