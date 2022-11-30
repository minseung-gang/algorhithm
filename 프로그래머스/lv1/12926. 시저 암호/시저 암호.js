// 들어온 양식만큼 리턴할 길이가 결정된다.
// 소문자와 대문자 공백을 사용하여 패턴을 맞추어야한다.
// 


2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
function solution(s, n) {
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var answer= '';

    for(var i =0; i <s.length; i++){
        var text = s[i];
        if(text == ' ') {
            answer += ' '; 
            continue;
        }
        var textArr = upper.includes(text) ? upper : lower;
        var index = textArr.indexOf(text)+n;
        if(index >= textArr.length) index -= textArr.length;
        answer += textArr[index];
    }
    return answer;
}