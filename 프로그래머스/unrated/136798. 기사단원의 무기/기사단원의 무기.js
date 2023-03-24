function solution(number, limit, power) {
    var answer = 0;
 
    let divisor = [];
  
    for(let i=1; i<=number; i++){

        let arr = 1;
        for(let j=1; j<=i/2; j++ ){
            if(i%j==0){
                arr++;
  
                
                  
            }
            
        }
       
        divisor.push(arr);

    }
    for(let i=0; i< divisor.length; i++){
        if(divisor[i]>limit){
 
            answer+=power;

            continue;
        } 
        answer+=divisor[i];
    }

    return answer;
}