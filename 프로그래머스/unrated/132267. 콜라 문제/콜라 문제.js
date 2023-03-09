function solution(a, b, n) {
  
  
    let answer= 0;
    let restBottle = 0;
    let changeBottle = 0;
    let input= n;
    while(input >= a){
        changeBottle = parseInt(input/a) * b; 
        restBottle = input%a;
        input = changeBottle + restBottle;
        answer+=changeBottle;
 
    }
  return answer;
}