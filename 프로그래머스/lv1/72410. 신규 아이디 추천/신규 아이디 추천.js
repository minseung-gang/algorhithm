function solution(new_id) {
    var answer = '';
 
    let regExp = /a-z0-9_-.]+/g;
    answer =
     new_id.toLowerCase()
    .replace(/[^a-z0-9_.-]/g,'')
    .replace(/\.{2,}/g,'.')
    .replace(/^\.|\.$/g,'')
    .replace(/^$/,"a")
    .slice(0,15)
    .replace(/\.$/g,"");

    if(answer.length <= 2){
        console.log(answer.length, );
        while(answer.length < 3){
            answer += answer.charAt( answer.length - 1).repeat(3 - answer.length);
            console.log(answer);
        }

    }
    console.log(answer);
 
    return answer;
}