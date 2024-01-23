let sequence = [1,2,3,4,5,6,7,8,9,10];


let squeeze = sequence.reduce((sum,value)=>{
    console.log(sum,value);
    return sum + value;
})
console.log('result :',squeeze)