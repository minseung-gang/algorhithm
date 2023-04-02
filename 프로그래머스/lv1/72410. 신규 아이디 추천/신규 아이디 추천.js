function solution(new_id) {
  

   let answer =
     new_id.toLowerCase()
    .replace(/[^a-z0-9_.-]/g,'')
    .replace(/\.{2,}/g,'.')
    .replace(/^\.|\.$/g,'')
    .replace(/^$/,"a")
    .slice(0,15)
    .replace(/\.$/g,"");

    if(answer.length <= 2){
     
        while(answer.length < 3){
            answer += answer.charAt( answer.length - 1).repeat(3 - answer.length);
       
        }

    }
    console.log(answer);
 
    return answer;
}
