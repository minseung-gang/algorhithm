function solution(nums) {
    var answer = 0;

    const array = new Set(nums);
    console.log(array.size);
    if(array.size > nums.length /2){
        return nums.length/2;
    }
    return array.size;
}