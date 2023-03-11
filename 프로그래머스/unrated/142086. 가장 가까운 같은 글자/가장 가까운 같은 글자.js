function solution(s) {
    let answer = [];
    let instance = [];
   
    for(let i =0; i<s.length; i++){
 let count =0;
        let firstInt= s[i];
        if(!instance.includes(s[i])){
            answer.push(-1);
            instance.push(s[i]);

            continue;
        }
    

     for(let j = i - 1; j >= 0; j--){
            count++;
            if(s[i] == s[j]) {
                answer.push(count);
                break;
            }
        }
    
          
         
      
 
     
    }
    return answer;
}