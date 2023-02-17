function solution(numbers) {
    let answer = 45;
    for(let i =0; i<= 9; i++){
        for(let j = 0; j<numbers.length; j++){
            if(i == numbers[j]){
                answer -= numbers[j]
            }
        }
    }
   
    return answer;
}
