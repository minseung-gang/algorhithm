function solution(babbling) {
    var answer = 0;
    let words = ["aya", "ye", "woo", "ma"];
 
    babbling.map(word=>{
   
        let next =true;
        let recentWord = "";
        while(next){
            for(let j=0; j<words.length; j++){
             
               
                if(word.indexOf(words[j])==0){
                    if(recentWord !== words[j]){
                        console.log(words[j],'찾음');
                        word = word.replace(words[j],"");
                        recentWord = words[j];
                      
                        break;
                    }
                    next = false;
                    break;
                  
                }
                
                if(j==words.length-1){
                    next = false;
                    break;
                }
    
            }
            if(word.length==0){
                answer++;
        
                next = false;
                break;
            }
        }
    })
        
      
        
  
    return answer;
}
