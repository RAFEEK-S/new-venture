
// let newNum = [];
// let oddNum = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//     if(arr[i]%2 !== 0){
//         console.log(arr[i])
//         newNum.push(arr[i]);
//             }
//         }
//     }
// oddNum([1,2,3,4,5,6,7,8,9]);


// let original = [1,2,3,4,5,6,7,8,];

// let duplicate = [15,12,13,5,4];

// let segreated = [];

// for (let i=0; i<original.length; i++){

//     if (!duplicate.includes(original[i])){

//         segreated.push(original[i]);
//             }
//             }
//         console.log(segreated);


        let primeNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
        let gilteredValues =[];
        
         primeNumbers.filter((values)=>{
            if(values%2 === 0 & values%3 === 0){
            gilteredValues.push(values);

            return values;
                
            }
            
        });
                
        console.log(gilteredValues);      
      