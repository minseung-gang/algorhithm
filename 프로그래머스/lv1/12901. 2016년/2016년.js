function solution(a, b) {
   
    let result = b;
    let days = ["THU","FRI","SAT","SUN","MON","TUE","WED"];
    let months = [31,29,31,30,31,30,31,31,30,31,30,31]; 
    for(let i=0; i<a-1; i++){
        result += months[i];
        console.log(result);
    }
    console.log(result,result%7);
    return  days[result % 7];

}
