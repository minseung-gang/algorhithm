//배열을 순회한다.
//현재와 다음 번째 순서를 더하여 budget과 비교하여 숫자가 작은지 확인한다.
//같거나 작으면 계속하고 크면 종료.
function solution(d, budget) {
  d = d.sort(function (a, b) {
    return a - b;
  });

  let count = 0;
  d.map((data) => {
    budget -= data;
    if (budget >= 0) {
      count++;
    }
    return count;
  });
    
  return count;
}