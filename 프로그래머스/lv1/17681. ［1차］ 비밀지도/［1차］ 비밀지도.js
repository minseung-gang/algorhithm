function solution(n, arr1, arr2) {
    var answer = [];
    console.log(arr2[1].toString(2));
 
    for(let i=0; i<n; i++){
        let a = arr1[i].toString(2);
        let b = arr2[i].toString(2);
      /*   let map1 = arr1[i].toString(2);
        let map2 = arr2[i].toString(2); */

        while(a.length != n){
          a = "0" + a;
        }
        while(b.length != n){
          b = "0" + b;
        }
       
        let arr = []
       for(let j =0; j<a.length; j++){
     
        arr +=  (a[j] == "0" && b[j]=="0") ? " " : "#";
       
       }
       answer.push(arr);

    }
    return answer;/* .replace(/1/g,"#").replace(/0/g," ") */
}
