let sequence = ["guvi", "is", "the", "software", "training"]

// example
// let power = "guvi"
// [use split to get the output in array]


let result = sequence.split("");

let i;

console.log(result);

for (let i=0; i<sequence.length-2; i++) {
  console.log(sequence[i])    
}

console.log(result.join(" "));