let sequence = [1,2,3,4,5,6,7,8,9,10]

// let divide = sequence.filter((value,index)=>{
//     if(value%2 !== 0){
//         return value;
//     }else if(value%3 === 0){
//         return value;hello
//     }

// console.log('result :',divide);

let divide = sequence.filter((value,index)=>{
        if(index < sequence.length-2){
            return value;
            
        }
})
console.log('result :',divide);

// let segregate = [5,6,88,21,55,47]

// let greater = segregate.filter((value)=>{
//     if(value>10){
//     return value;
//     }
// })
// console.log('result :',greater.sort())

