function solution(X, Y) {
    let answer = '';
     X = X.split("");
     Y = Y.split("");
    for(let i=0; i<10; i++){
        console.log(i);
        let Xarr = X.filter(a=> a== i).length;
        let Yarr = Y.filter(a=> a== i).length;
       
        answer += String(i).repeat(Math.min(Xarr,Yarr));
 
    }
    answer = answer.split("").sort((a,b)=>b-a).join("");

    if(answer.length == 0 ){
        return "-1"
    }
    if(answer[0]=== '0') return '0';
    return answer;
}