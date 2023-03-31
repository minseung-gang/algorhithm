function solution(board, moves) {
    var answer = [];
    let count =0;
   moves.map((val)=>{
   
        for(let i=0; i<board.length; i++){
     
            if(board[i][val-1] !== 0){
            
                answer.push(board[i][val-1]);
                board[i][val-1] = 0
            
                
                break;
            }
        }
    });
   return pop(answer,count);

    
  
}

function pop(list,count){

    for(let i=0; i<list.length; i++){

        if(list[i] == list[i+1]){
         
            list.splice(i,2);
            count += 2;
    
            return pop(list,count);
        }
        
    }
    return count;
}