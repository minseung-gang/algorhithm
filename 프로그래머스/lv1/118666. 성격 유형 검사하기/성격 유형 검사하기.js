function solution(survey, choices) {
    var answer = '';
    let types = {
        R: 0, T: 0,
        C: 0, F: 0,
        J: 0, M: 0,
        A: 0, N: 0,
    }

    for(let i =0; i<choices.length; i++ ){
        let score = choices[i]-4;
        if(score>0){
             types[survey[i][1]] = types[survey[i][1]] + Math.abs(score); 
             continue
        }
        
       types[survey[i][0]] = types[survey[i][0]] + Math.abs(score); 
       continue
    }
    console.log(types);

    if(types["R"]>=types["T"]){
        answer+="R";
    }else{answer+="T"}
    if(types["C"]>=types["F"]){ answer+="C"}
    else{answer+="F"}
    if(types["J"]>=types["M"]){answer+="J"}
    else{answer+="M"}
    if(types["A"]>=types["N"]){answer+="A"}
    else{answer+="N"}
    console.log(answer);
    return answer;
}