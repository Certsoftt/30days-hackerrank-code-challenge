function test(input){
    let even_char, odd_char
    let new_input = input.split("\n")
    for(let i=0; i< new_input.length; i++){
        if((!isNaN(new_input[i]) && parseInt(Number(new_input[i])) == new_input[i] && !isNaN(parseInt(new_input[i], 10)))){
        new_input.splice(i,1)
        }
    }
    for(let i =0; i<new_input.length;i++){
        even_char = ""
        odd_char =""
        for(let j=0; j<new_input[i].length; j++){
            if(j == 0 || j%2 == 0){
                even_char += new_input[i][j]
            }else{
                odd_char += new_input[i][j]
            }
        }
        console.log(`${even_char} ${odd_char}`)
    }
} 
