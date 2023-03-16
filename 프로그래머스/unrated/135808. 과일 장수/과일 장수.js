// k: 최상품의 질 , m: 상품 묶음의 수 , p: 가장 낮은 질의 사과의 가격, score: 사과들의 점수
// 최저 사과점수 x 사과 개수 x 상자 개수 
// 배열 리스트 갯수를 상품 묶음의 수로 나눈다. 나누어지면 최상품의 질을 묶음의 갯수만큼 가져온다.
// 계산 후 총 가격에 추가
// 다음으로 넘어간다.
function solution(k, m, score) {
    var answer = 0;
    score.sort((a,b)=>b-a);
     
    for(let i =m-1; i<score.length; i+=m){
        answer += score[i] * m
    
    }
    return answer;
}