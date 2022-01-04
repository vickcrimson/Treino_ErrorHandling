function validaArray (arr, num) {
    try{ 
    if (!arr && !num) throw new ReferenceError("Envie os parâmetros")
    
    if (typeof arr !== 'Object') throw new TypeError("O Array precisa ser do tipo objeto")

    if (typeof num !== 'Number') throw new TypeError("O número precisa ser do tipo Number")

    if (arr.length !== num) throw new RangeError("O tamanho é invalido")
    return arr;
    }
    catch(e){
        if (e instanceof ReferenceError){
            console.log(`Esse erro é um ReferenceError`)
            console.log(e.message)

            } else if (e instanceof TypeError){
                console.log(`Esse erro é um TypeError`)
                console.log(e.message)
            } else if (e instanceof RangeError){
                console.log(`Esse erro é um RangeError`)
                console.log(e.message)   
} else {
    console.log (`Erro não esperado ` + e)
  }
 }
}

console.log(validaArray([], "a"))