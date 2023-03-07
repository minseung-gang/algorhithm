function solution(strings, n) {
    var answer = [];

    for(let i=0; i<strings.length; i++){
        let first = strings[i][n];
        answer.push(first+strings[i]);
      
    }
    answer.sort();
    console.log(answer);
    for(let j=0; j<strings.length; j++){
        answer[j] =  answer[j].substring(1);
    }
    return answer;
}
