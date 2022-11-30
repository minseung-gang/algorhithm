// 들어온 양식만큼 리턴할 길이가 결정된다.
// 소문자와 대문자 공백을 사용하여 패턴을 맞추어야한다.
// 

function solution(s, n) {
  s.split(" ");
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let answer = "";
  for (let i = 0; i < s.length; i++) {

    if (s[i] == " ") {
      answer += " ";
      continue;
    }
    if (s[i] === s[i].toUpperCase()) {
      let item_idx = alphabet.indexOf(s[i].toLowerCase());
      let idx = (item_idx + n) % 26;
      answer += alphabet[idx].toUpperCase();
    }
    if (s[i] === s[i].toLowerCase()) {
      let item_idx = alphabet.indexOf(s[i].toLowerCase());
      let idx = (item_idx + n) % 26;
      answer += alphabet[idx].toLowerCase();
    }
  }
  return answer;
}