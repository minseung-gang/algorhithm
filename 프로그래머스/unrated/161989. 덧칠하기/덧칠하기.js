function solution(n, m, section) {
    let num = 0;
    let count=0;

   
    for(let i=0; i<section.length;i++){

        if(section[i] >= num){
            num = section[i] + m;
   
            count++;

        }
        

    }

   
    return count;
}

   
 