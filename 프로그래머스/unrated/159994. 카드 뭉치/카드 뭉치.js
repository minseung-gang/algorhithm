function solution(cards1, cards2, goal) {
    var answer = "Yes";
    for(let i=0; i<goal.length; i++){
        if(cards1[0] == goal[i]){
            cards1.shift();
            console.log(cards1);
            continue;
        }
        if(cards2[0] == goal[i]){
            cards2.shift();
            console.log(cards2);
            continue;
        }
       return answer = "No";
    }
    
    return answer;
}