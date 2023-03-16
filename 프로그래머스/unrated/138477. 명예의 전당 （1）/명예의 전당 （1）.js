// k수 만큼 배열에 스코어를 넣는다.
// 배열을 정렬하여 마지막 숫자의 값을 가져와 새로운 배열에 넣는다.
// k번째 이후로는 배열에 마지막 숫자랑 비교하여 넣는다.
// 배열의 마지막 값을 새로운 배열에 넣는다.

function solution(k, score) {
    let answer = [];
    let fameArr = [];
  
    for(let i =0; i<score.length; i++){
        answer.push(score[i]);
     
        if(answer.length>k){
    
              answer.sort((a,b)=>b-a);
              answer.pop();

              fameArr.push(Math.min.apply(null,answer));

              continue;
        }
       
        answer.sort((a,b)=>b-a);

       
        fameArr.push(Math.min.apply(null,answer));

    }
    return fameArr;
}