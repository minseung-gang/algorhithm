function solution(t, p) {
    var answer = 0;
    console.log(t.length);
    let example = [];
 
    for(let i=0; i<=t.length-p.length; i++){
        let strings= "";
        for(let j=i; j<i+p.length; j++){
            strings += t[j];
        }
        example.push(Number(strings));
    }
    example.push(Number(p));
    example.sort((a,b)=>a-b);
    answer = example.lastIndexOf(parseInt(p));
    return answer;
}