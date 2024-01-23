


let request = new XMLHttpRequest();

request.open('GET', 'https://restcountries.com/v3.1/all',true)

request.send();

request.onload = function() {
    let data = JSON.parse(request.response)

    let chip = data.map((value)=>{
        console.log(value)
        return value;
        
    })
    console.log(chip)
    // console.log(data);
    // console.log(data[0].borders);
    // console.log(data[0].population);
}
