function solution(s, n) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let answer = "";
  for (let i = 0; i < s.length; i++) {

    if (s[i] == " ") {
      answer += " ";
      continue;
    }
    if (s[i] === s[i].toUpperCase()) {
      let idx = alphabet.indexOf(s[i].toLowerCase());
      let result_idx = (idx + n) % 26;
      answer += alphabet[result_idx].toUpperCase();
    }
    if (s[i] === s[i].toLowerCase()) {
      let idx = alphabet.indexOf(s[i].toLowerCase());
      let result_idx = (idx + n) % 26;
      answer += alphabet[result_idx].toLowerCase();
    }
  }
  return answer;
}